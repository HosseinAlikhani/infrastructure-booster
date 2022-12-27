import { GroupRoute } from "./GroupRoute";
import { Route } from "./Route";
import { MethodEnum, RoutesInterface } from "./RouteInterface";
import { RouteMethod } from "./RouteMethod";

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

    public setRoutes(route: GroupRoute|Route){
        this.routes.push(route);
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

}