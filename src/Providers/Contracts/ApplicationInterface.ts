export interface ApplicationInterface
{
    _router;
    request;
    response;
    get(name, middleware, action);
    post(name, middleware, action);
    patch(name, middleware, action);
    delete(name, middleware, action);
    Router();
    use(...arg);
    listen(port, callback);
}