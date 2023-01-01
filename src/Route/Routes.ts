import { GroupRoute } from "./GroupRoute";
import { Route } from "./Route";
import { MethodEnum } from "./RouteInterface";

export default class Routes
{
    private routes: Array<GroupRoute|Route> = [];

    public constructor(){
        this.RouteHttpVerb();
    }

    /**
     * add route http verb method
     */
    private RouteHttpVerb()
    {
        ['get', 'post', 'patch', 'delete'].forEach( (httpVerb) => {
            this[httpVerb] = (route, middleware = [], action) => {
                this.route(
                    new Route(
                        MethodEnum[httpVerb],
                        route,
                        middleware,
                        action
                    )
                );
            };
        });
    }

    /**
     * register route to routes property
     * @param route 
     */
    public route(route: GroupRoute|Route): GroupRoute|Route
    {
        this.routes.push(route);
        return route;
    }

    /**
     * get routes
     * @returns 
     */
    public getRoutes(): Array<GroupRoute|Route>
    {
        return this.routes;
    }

    /**
     * register group route
     * @param prefix 
     * @param middleware 
     * @param callback 
     */
    public group(prefix: String, middleware: any, callback: Function): GroupRoute
    {
        let groupRoute = new GroupRoute(prefix, middleware, callback);
        this.route( groupRoute );
        return groupRoute;
    }
}