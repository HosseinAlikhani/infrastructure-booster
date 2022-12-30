import { RoutesInterface } from "../../Route/RouteInterface";

export interface ServiceProviderInterface
{
    getApplicationSource();
    
    listen(port: null|number);
}