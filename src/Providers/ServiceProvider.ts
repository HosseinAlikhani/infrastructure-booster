import { ApplicationInterface } from "./Contracts/ApplicationInterface";
import { ServiceProviderInterface } from "./Contracts/ServiceProviderInterface";

export default class ServiceProvider 
    implements ServiceProviderInterface
{
    private static instance: ServiceProviderInterface|null = null;

    protected application: ApplicationInterface;

    protected applicationSource;

    private port: number = 3000;

    public constructor(application){
        this.applicationSource = application;
        this.application = application();
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
     * run application
     * @param port 
     */
    public listen(port: null|number = null){
        port = port ?? this.port;
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