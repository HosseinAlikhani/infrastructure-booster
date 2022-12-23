import { RoutesInterface } from "../../Route/RouteInterface";

export interface ServiceProviderInterface
{
    getApplicationSource();
    
    registerRoutes(routes: RoutesInterface);
    
    listen();
}