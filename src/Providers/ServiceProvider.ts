import Request from "../Request/Request";
import { ApplicationInterface } from "./Contracts/ApplicationInterface";
import { ServiceProviderInterface } from "./Contracts/ServiceProviderInterface";

export default class ServiceProvider 
    implements ServiceProviderInterface
{
    private static instance: ServiceProviderInterface;

    protected application: ApplicationInterface;

    protected applicationSource;

    public constructor(application){
        this.applicationSource = application;
        this.application = application();
        this.registerDefaultService(); // register default service on application
    }

    /**
     * initialie service provider
     * @param application 
     * @returns ServiceProviderInterface
     */
    public static init(application: ApplicationInterface): ServiceProviderInterface
    {
        if (! this.instance ) {
            let instance = new this(application);
            this.instance = instance;
        }
        return this.instance;
    }

    /**
     * make service provider
     * @returns
     */
    public static make(): ServiceProviderInterface{
        if (! this.instance ){
            throw new Error('service provider is not created before ..!');
        }
        return this.instance;
    }

    /**
     * get application source
     * @returns
     */
    public getApplicationSource(){
        return this.applicationSource;
    }

    /**
     * return application instance
     * @returns ApplicationInterface
     */
    public getApplication(): ApplicationInterface
    {
        return this.application;
    }

    /**
     * register default service
     * @return void
     */
    private registerDefaultService():void
    {
        [ Request ].forEach( (service) => {
            this.registerService(service);
        })
    }

    /**
     * register service on serviceProvider
     * @param service
     */
    public registerService(service: any): boolean|Error
    {
        try {
            let init = new service();
            this.application.use((req, res, next) => init.initialize(req, res, next));
            return true;
        }catch(error){
            throw Error(error);
        }
    }

    /**
     * run application
     * @param port 
     */
    public listen(port:number){
        try {
            this.application.listen(port, () => {
                console.log('application run on port 3000 ...!');
            });
            return true;
        }catch(error: any) {
            throw new Error(error.message);
        }
    }
}