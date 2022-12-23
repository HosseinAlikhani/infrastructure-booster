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

    public getMethod(){
        return this.method;
    }
    
    public getRoute(){
        return this.route;
    }

    public getMiddleware(){
        return this.middleware;
    }

    public getAction(){
        return this.action;
    }
}