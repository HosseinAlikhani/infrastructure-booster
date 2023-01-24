import MiddlewareInterface from "../../Middleware/MiddlewareInterface";
import { RoutesInterface } from "../../Route/RouteInterface";

export interface RouteServiceProviderInterface
{
    registerRoutes(applicationRoutes: RoutesInterface): boolean;
    
    /**
    * register middleware to route service provider
    * @param name
    * @param middleware 
    */
    registerMiddlewares(name: string, middleware): void;

    /**
    * return middleware
    * @param name 
    * @return
    */
    makeMiddleware(name: string);
}