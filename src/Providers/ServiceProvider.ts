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
     * @returns 
     */
    public static init(application: ApplicationInterface){
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

    public static makeApplicationSource(){
        let instance = this.make();
        return instance.getApplicationSource();
    }

    /**
     * get application source
     * @returns
     */
    public getApplicationSource(){
        return this.applicationSource;
    }

    /**
     * run service provider
     * @param port 
     */
    public listen(port: null|number = null){
        port = port ?? this.port;
        this.application.listen(port, () => {
            console.log('provider run on port 3000 ...');
        });
    }
}