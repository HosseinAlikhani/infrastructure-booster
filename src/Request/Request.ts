import MiddlewareInterface from "../Middleware/MiddlewareInterface";

export default class Request implements MiddlewareInterface
{
    /**
     * store request
     */
    private request;

    /**
     * initialize request middleware
     * @param request 
     */
    public initialize(request)
    {
        this.request = request;
    }

    /**
     * middleware handle method
     * @param request 
     * @param response 
     * @param next 
     */
    public handle(request: any, response: any, next: any) {
        this.initialize(request);        
    }
}