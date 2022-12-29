import { GroupRoute } from "./GroupRoute";
import { Route } from "./Route";

export default class Routes
{
    private routes: Array<GroupRoute|Route> = [];

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