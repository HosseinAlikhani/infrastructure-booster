import { GroupRoute } from "./GroupRoute";
import { Route } from "./Route";

export default class Routes
{
    private routes: Array<GroupRoute|Route> = [];

    /**
     * register route to routes property
     * @param route 
     */
    public route(route: GroupRoute|Route){
        this.routes.push(route);
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
    public group(prefix: String, middleware: any, callback: Function): void
    {
        this.route(
            new GroupRoute(prefix, middleware, callback)
        );
    }
}