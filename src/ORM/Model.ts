import { DataTypeInterface } from "./DataTypeInterface";
import { Query } from "./Query";

export class Model extends Query {
    host: String = 'localhost';
    dialect: String = 'mysql';
    username: String = 'root';
    password: String = '';
    database: String = 'human';
    protected tableName: String = "";

    timeStamp: boolean = true;
    timeStampCreatedAt: String = 'created_at';
    timeStampUpdatedAt: String = 'updated_at';

    query;
    dataTypes: DataTypeInterface;

    static instance;

    constructor() {
        super();
        this.dataTypes = DataTypes;
    }

    static async initialize(){
        if (! this.instance ) {
            let instance = new this();
            await instance.createConnection();
            await instance.createTable();
            this.instance = instance;
        }
        return this.instance;
    }
    
    async createConnection() {
        this.query = new ORM(
            this.database,
            this.username,
            this.password,
            {
                host: this.host,
                dialect: this.dialect
            }
        );
        
        try {
            await this.query.authenticate();
            // console.log("connect to mysql success!");
        }catch {
            // console.log("connect to mysql failed!");
        }
    }

    async createTable(){
        await this.initializeTableName();
        this.query = this.query.define(this.tableName,this.initializeTable(),{
            timestamps: this.timeStamp,
            createdAt: this.timeStampCreatedAt,
            updatedAt: this.timeStampUpdatedAt
        });
    }
    
    /**
     * set table name property from class name
     */
    async initializeTableName() {
        if (! this.tableName.length ) {
            let className = this.constructor.name;
            this.tableName = className.toLowerCase();
        }
    }

    initializeTable(): object {
        return {};
    }
    
    async syncTable(_force = false) {
        let data = {
            force: _force
        };
        await this.query.sync(data);
    }

    async dropTable() {
        await this.query.drop();
    }

}