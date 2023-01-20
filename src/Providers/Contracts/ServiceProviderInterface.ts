import { ApplicationInterface } from "./ApplicationInterface";

export interface ServiceProviderInterface
{
    getApplicationSource();

    /**
     * return application instance
     * @returns ApplicationInterface
     */
    getApplication(): ApplicationInterface
    
    listen(port: null|number);
}