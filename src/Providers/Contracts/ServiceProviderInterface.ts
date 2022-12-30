export interface ServiceProviderInterface
{
    getApplicationSource();
    
    listen(port: null|number);
}