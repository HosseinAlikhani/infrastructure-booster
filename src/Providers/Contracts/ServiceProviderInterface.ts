import { ApplicationInterface } from "./ApplicationInterface";

export interface ServiceProviderInterface
{
    /**
     * return application source instnace
     * @return 
     */
    getApplicationSource();

    /**
     * return application instance
     * @returns ApplicationInterface
     */
    getApplication(): ApplicationInterface
    
    /**
     * run application on specific port
     * @param port 
     */
    listen(port: null|number);
}