import Routes from "./Routes";

export class GroupRoute
{
    private prefix: String;
    private middleware: Array<String|null>;
    private callback: Function;
    private routes: Routes;

    public constructor(
        prefix: String,
        middleware: Array<String|null>,
        callback: Function
    ){
        this.prefix = prefix;
        this.middleware = middleware;
        this.callback = callback;

        this.routes = new Routes();
        this.callback(this.routes);
    }

    /**
     * get prefix
     * @returns 
     */
    getPrefix(): String
    {
        return this.prefix;
    }

    /**
     * get middlewares
     * @returns 
     */
    getMiddleware(): Array<String|null>
    {
        return this.middleware;
    }

    /**
     * return callback
     * @returns Function
     */
    public getCallback(): Function
    {
        return this.callback;
    }

    /**
     * get routes
     * @returns
     */
    public getRoutes()
    {
        return this.routes.getRoutes();
    }
}