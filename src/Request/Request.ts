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
     * @param key
     * @return void
     */
    private getParams(key): void
    {
        this.request.getParams = () => {
            let params = this.request.params;
            if ( key ) {
                return params && params[key]? params[key] : null;
            }
            return params ?? {};
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