import { MethodEnum } from "./RouteInterface";

export class Route
{
    private method: MethodEnum;
    private route: string;
    private middleware: Array<string|null>;
    private action: Function;

    public constructor(
        method: MethodEnum,
        route: string,
        middleware: Array<string|null>,
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
    public getRoute(): string
    {
        return this.route;
    }

    /**
     * get middleware
     * @returns 
     */
    public getMiddleware(): Array<string|null>
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