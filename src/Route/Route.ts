import { MethodEnum } from "./RouteInterface";

export class Route
{
    private method: MethodEnum;
    private route: String;
    private middleware: Array<String|null>;
    private action: Function;

    public constructor(
        method: MethodEnum,
        route: String,
        middleware: Array<String|null>,
        action: Function
    ){
        this.method = method;
        this.route = route;
        this.middleware = middleware;
        this.action = action;
    }

    /**
     * get method
     * @returns 
     */
    public getMethod(): MethodEnum
    {
        return this.method;
    }
    
    /**
     * get route
     * @returns 
     */
    public getRoute(): String
    {
        return this.route;
    }

    /**
     * get middleware
     * @returns 
     */
    public getMiddleware(): Array<String|null>
    {
        return this.middleware;
    }

    /**
     * get action
     * @returns 
     */
    public getAction(): Function
    {
        return this.action;
    }
}