import Routes from "./Routes";

export class GroupRoute
{
    private prefix: String;
    private middleware: Array<String|null>;
    private callback: Function;

    public constructor(
        prefix: String,
        middleware: Array<String|null>,
        callback: Function
    ){
        this.prefix = prefix;
        this.middleware = middleware;
        this.callback = callback;
        this.callback(new Routes());
    }

    getPrefix(): String
    {
        return this.prefix;
    }

    getMiddleware(): Array<String|null>
    {
        return this.middleware;
    }

    getCallback(): Function
    {
        return this.callback;
    }
}