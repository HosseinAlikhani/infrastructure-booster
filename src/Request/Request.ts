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
        this.getParams();
        
        return this.request;
    }

    /**
     * get request body
     * @return void
     */
    private getContent(): void
    {
        this.request.getContent = () => {
            return this.request.body ?? {};
        };
    }

    /**
     * get request params
     * @return void
     */
    private getParams(): void
    {
        this.request.getParams = () => {
            return this.request.params ?? {};
        }
    }

    /**
     * initialize service class
     * @param request 
     * @param response 
     * @param next 
     */
    public initialize(request: any, response: any, next: any) {
        request = this.execute(request);
        return next();
    }
}