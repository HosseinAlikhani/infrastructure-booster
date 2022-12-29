import { RoutesInterface } from "../../Route/RouteInterface";

export interface ServiceProviderInterface
{
    getApplicationSource();
    
    listen();
}