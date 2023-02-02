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
        this.getContent();
        
        return this.request;
    }

    /**
     * get request body
     * @return void
     */
    private getContent(): void
    {
        this.request.getContent = () => {
            return this.request.body;
        };
    }

    /**
     * middleware handle method
     * @param request 
     * @param response 
     * @param next 
     */
    public handle(request: any, response: any, next: any) {
        request = this.initialize(request);        
    }
}