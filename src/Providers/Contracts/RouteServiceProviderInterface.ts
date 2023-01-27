import { RoutesInterface } from "../../Route/RouteInterface";

export interface RouteServiceProviderInterface
{
    /**
    * register routes to application service provider
    * @param applicationRoutes
    * @return boolean
    */
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