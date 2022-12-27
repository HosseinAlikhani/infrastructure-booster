import { GroupRoute } from "./GroupRoute";
import { Route } from "./Route";

export default class Routes
{
    private routes: Array<GroupRoute|Route> = [];

    public setRoute(route: GroupRoute|Route){
        this.routes.push(route);
    }

}