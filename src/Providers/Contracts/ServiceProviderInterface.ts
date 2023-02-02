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
     * register service on serviceProvider
     * @param service
     */
    registerService(service): boolean|Error;
    
    /**
     * run application on specific port
     * @param port 
     */
    listen(port: null|number);
}