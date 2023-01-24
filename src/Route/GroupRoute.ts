import Routes from "./Routes";

export class GroupRoute
{
    private prefix: string;
    private middleware: Array<string|null>;
    private callback: Function;
    private routes: Routes;

    public constructor(
        prefix: string,
        middleware: Array<string|null>,
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
    getPrefix(): string
    {
        return this.prefix;
    }

    /**
     * get middlewares
     * @returns 
     */
    getMiddleware(): Array<string|null>
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