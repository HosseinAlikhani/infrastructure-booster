export default interface ServiceInterface
{
    /**
     * initialize service
    * @param request 
    * @param response 
    * @param next 
    */
    initialize(request: any, response: any, next: any);
}