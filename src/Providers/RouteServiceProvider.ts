import { GroupRoute } from "../Route/GroupRoute";
import { Route } from "../Route/Route";
import { RoutesInterface } from "../Route/RouteInterface";
import ServiceProvider from "./ServiceProvider";

export default class RouteServiceProvider
    extends ServiceProvider
{
    private middlewares: Object = {};

    /**
     * register routes to application service provider
     * @param applicationRoutes 
     */
     public registerRoutes(applicationRoutes: RoutesInterface){
        let routes = applicationRoutes.getRoutes();
        routes.forEach((route) => {
            if ( route instanceof Route ) {
                this.registerRoute(route);
            } else if( route instanceof GroupRoute ) {
                this.registerGroup(route);
            }
        });
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
        let Router = this.applicationSource.Router(),
            routes = groupRoute.getRoutes();
        
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
}