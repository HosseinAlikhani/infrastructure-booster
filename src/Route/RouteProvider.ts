import { GroupRoute } from "./GroupRoute";
import { Route } from "./Route";
import { MethodEnum, RoutesInterface } from "./RouteInterface";

export class RouteProvider
    implements RoutesInterface
{
    private routes: Array<GroupRoute|Route> = [];

    protected prefix: String = "";

    public getRoutes()
    {
        return this.routes;
    }

    public getPrefix(): String
    {
        return this.prefix;
    }

    protected setRoutes(route: GroupRoute|Route){
        this.routes.push(route);
    }

    protected get(route, middleware, action)
    {
        let routeObject = {
            method: MethodEnum.get,
            route,
            middleware,
            action
        };
        this.setRoutes(
            this.makeRoute(routeObject)
        );
    }

    protected post(route, middleware, action)
    {
        let routeObject = {
            method: MethodEnum.post,
            route,
            middleware,
            action
        };
        this.setRoutes(
            this.makeRoute(routeObject)
        );
    }

    protected patch(route, middleware, action)
    {
        let routeObject = {
            method: MethodEnum.patch,
            route,
            middleware,
            action
        };
        this.setRoutes(
            this.makeRoute(routeObject)
        );
    }

    protected delete(route, middleware, action)
    {
        let routeObject = {
            method: MethodEnum.delete,
            route,
            middleware,
            action
        };
        this.setRoutes(
            this.makeRoute(routeObject)
        );
    }

    private makeRoute(route)
    {
        return new Route(
            route.method,
            route.route,
            route.middleware,
            route.action
        );
    }

    protected group(route: String, middleware: Array<String|null>, callback){
        this.setRoutes(
            new GroupRoute(route, middleware, callback)
        );
    }
}