import { RoutesInterface } from "../../Route/RouteInterface";

export interface RouteServiceProviderInterface
{
    registerRoutes(applicationRoutes: RoutesInterface): boolean;
}