import MiddlewareInterface from "../Middleware/MiddlewareInterface";
import { GroupRoute } from "../Route/GroupRoute";
import { Route } from "../Route/Route";
import { RoutesInterface } from "../Route/RouteInterface";
import { ApplicationInterface } from "./Contracts/ApplicationInterface";
import { RouteServiceProviderInterface } from "./Contracts/RouteServiceProviderInterface";
import { ServiceProviderInterface } from "./Contracts/ServiceProviderInterface";
import ServiceProvider from "./ServiceProvider";

export default class RouteServiceProvider
    implements RouteServiceProviderInterface
{
    private middlewares: Object = {};

    private provider: ServiceProviderInterface;

    private static instance: RouteServiceProviderInterface;

    /**
     * route service provider constructor
     */
    public constructor(){
        this.provider = ServiceProvider.make();
    }

    /**
     * make routeServiceProvider instance
     * @returns RouteServiceProviderInterface
     */
    public static make(): RouteServiceProviderInterface
    {
        if(! this.instance ) {
            this.instance = new RouteServiceProvider();
        }
        return this.instance;
    }

    /**
     * register middleware to route service provider
     * @param name
     * @param middleware 
     */
    public registerMiddlewares(name: string, middleware): boolean
    {
        if (! this.middlewares[name] ) {
            this.middlewares[name] = middleware;
            return true;
        }
        return false;
    }

    /**
     * return middleware
     * @param name 
     * @return
     */
    public makeMiddleware(name: string): MiddlewareInterface
    {
        if (! this.middlewares[name] ){
            throw new Error(`can't make middleware ${name}`);
        }
        return this.middlewares[name];
    }

    /**
     * return array of middleware function
     * @param names
     */
    private bindMiddlewares(names: Array<string>)
    {
        let middlewares = [];
        names.forEach( (name) => {
            middlewares.push(this.makeMiddleware(name).handle);
        });
        return middlewares;
    }

    /**
     * register routes to application service provider
     * @param applicationRoutes
     * @return boolean
     */
     public registerRoutes(applicationRoutes: RoutesInterface): boolean
     {
        let routes = applicationRoutes.getRoutes();
        routes.forEach((route) => {
            if ( route instanceof Route ) {
                this.registerRoute(route);
            } else if( route instanceof GroupRoute ) {
                this.registerGroup(route);
            }
        });
        return true;
    }

    /**
     * register route to application
     * @param route 
     * @param router 
     */
    private registerRoute(route: Route, router = null){
        let Router = router ?? this.getApplication();
        Router[route.getMethod()](
            route.getRoute(),
            route.getMiddleware(),
            route.getAction()
        );
    }

    /**
     * register group of route to application
     * @param groupRoute 
     */
    private registerGroup(groupRoute: GroupRoute){
        let Router = this.getApplicationSource().Router(),
            routes = groupRoute.getRoutes();


        Router.use(
            this.bindMiddlewares(groupRoute.getMiddleware())
        );

        routes.forEach((route: Route|GroupRoute) => {
            if (route instanceof GroupRoute ) {
                this.registerGroup(route);
            }else{
                this.registerRoute(route, Router);
            }
        });

        this.getApplication().use(groupRoute.getPrefix(), Router );
    }

    /**
     * get application source from provider instance
     * @returns 
     */
    private getApplicationSource()
    {
        return this.provider.getApplicationSource();
    }

    /**
     * return application instace
     * @returns ApplicationInterface
     */
    private getApplication(): ApplicationInterface
    {
        return this.provider.getApplication();
    }
}