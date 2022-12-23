export class Query
{
    protected query;

    /**
     * find all records
     * @returns 
     */
    public async findAll(){
        return await this.query.findAll();
    }

    /**
     * find record by id column
     * @param _id
     * @returns 
     */
    public async findOne(_id){
        return await this.query.findOne({
            where: {
                id: _id
            }
        });
    }

    /**
     * find one by specific column
     * @param _column 
     * @param _value 
     */
    public async findOneBy(_column, _value){
        let whereCondition = {};
        whereCondition[_column] = _value;
        return await this.query.findOne({
            where: whereCondition
        })
    }

    /**
     * create record
     * @param _data 
     * @returns 
     */
    public async create(_data) {
        return await this.query.create(_data);
    }

    /**
     * update record by id column
     * @param _id 
     * @param _data 
     * @returns 
     */
    public async update(_id, _data){
        return await this.query.update(_data, {
            where: { id: _id }
        });
    }

    /**
     * delete record by id column
     * @param _id 
     * @returns 
     */
    public async delete(_id){
        return await this.query.destroy({
            where: { id: _id }
        });
    }
}