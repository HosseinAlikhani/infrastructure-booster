import ServiceInterface from "../Providers/Contracts/ServiceInterface";

export default class Request implements ServiceInterface
{
    /**
     * store request
     */
    private request;

    /**
     * initialize request middleware
     * @param request 
     */
    public execute(request)
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
     * initialize service class
     * @param request 
     * @param response 
     * @param next 
     */
    public initialize(request: any, response: any, next: any) {
        request = this.execute(request);
        next();
    }
}