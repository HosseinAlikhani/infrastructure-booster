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
    
    listen(port: null|number);
}