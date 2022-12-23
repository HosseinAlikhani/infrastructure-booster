import { ApplicationInterface } from "./Contracts/ApplicationInterface";
import { ServiceProviderInterface } from "./Contracts/ServiceProviderInterface";
import { RoutesInterface } from "../Route/RouteInterface";
import { GroupRoute } from "../Route/GroupRoute";
import { Route } from "../Route/Route";
import { AuthenticateMiddleware } from "../Middleware/AuthenticateMiddleware";

export class ServiceProvider 
    implements ServiceProviderInterface
{
    private static instance: ServiceProviderInterface|null = null;

    private application: ApplicationInterface;

    private applicationSource;

    middlewares: Object = {};

    private port: number = 3000;

    public constructor(application){
        this.applicationSource = application;
        this.application = application();
        this.initJsonParser();
        this.defaultMiddleware();
    }

    private initJsonParser(){
        var body = require('body-parser');
        this.application.use(body.json());
        this.application.use(body.urlencoded({
            extended: true
        }));
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
     * register middleware to service provider
     * @param contract 
     * @param abstract 
     */
    public registerMiddleware(contract, abstract: Function)
    {
        this.middlewares[contract] = abstract;
    }

    /**
     * set default middleware to service provider
     */
    public defaultMiddleware()
    {
        this.middlewares['authenticate'] = new AuthenticateMiddleware();
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

    /**
     * register routes to service provider
     * @param applicationRoutes 
     */
    public registerRoutes(applicationRoutes: RoutesInterface){
        let routes = applicationRoutes.getRoutes();
        routes.forEach(route => {
            if ( route instanceof GroupRoute ) {
                this.registerGroup(route);
            } else {
                this.registerRoute(route);
            }
        });
    }

    private registerGroup(groupRoute: GroupRoute){
        let Router = this.applicationSource.Router(),
            routes = groupRoute.getRoutes();
        
        if ( groupRoute.getMiddleware().length ) {
            Router.use( this.makeMiddleware(groupRoute.getMiddleware()) );
        }

        routes.forEach((route: Route|GroupRoute) => {
            if (route instanceof GroupRoute ) {
                route.concatPrefix(groupRoute);
                this.registerGroup(route);
            }else{
                this.registerRoute(route, Router);
            }
        });

        this.application.use(groupRoute.getPrefix(), Router );
    }
    
    private registerRoute(route: Route, router = null){
        let Router = router ?? this.application;
        Router[route.getMethod()](
            route.getRoute(),
            this.makeMiddleware(route.getMiddleware()),
            route.getAction()
        );
    }

    private makeMiddleware(middlewares)
    {
        let sum: Array<Function> = [];
        middlewares.forEach(middleware => {
            sum.push( this.middlewares[middleware].handle );
        });
        return sum;
    }
}