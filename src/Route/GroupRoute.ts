import { RouteProvider } from "./RouteProvider";

export class GroupRoute
    extends RouteProvider
{
    private route: String;
    private middleware: Array<String|null>;
    private callback: Function;

    public constructor(
        route: String,
        middleware: Array<String|null>,
        callback: Function
    ){
        super();
        this.route = route;
        this.middleware = middleware;
        this.callback = callback;
        this.setPrefix(route);
        this.callback(this);
    }

    private setPrefix(prefix: String)
    {
        this.prefix = prefix;
    }

    concatPrefix(groupRoute: GroupRoute){
        this.setPrefix(`${groupRoute.getPrefix()}${this.getPrefix()}`);
    }

    getRoute(): String
    {
        return this.route;
    }

    getMiddleware(): Array<String|null>
    {
        return this.middleware;
    }

    getCallback(): Function
    {
        return this.callback;
    }
}