import { GroupRoute } from "../Route/GroupRoute";
import { Route } from "../Route/Route";
import { RoutesInterface } from "../Route/RouteInterface";
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
        let Router = router ?? this.application;
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
        let Router = this.getApplicationRouter(),
            routes = groupRoute.getRoutes();
        
        routes.forEach((route: Route|GroupRoute) => {
            if (route instanceof GroupRoute ) {
                this.registerGroup(route);
            }else{
                this.registerRoute(route, Router);
            }
        });

        this.application.use(groupRoute.getPrefix(), Router );
    }

    /**
     * get router func from application router
     * @returns 
     */
    private getApplicationRouter()
    {
        return this.applicationSource.Router();
    }
}