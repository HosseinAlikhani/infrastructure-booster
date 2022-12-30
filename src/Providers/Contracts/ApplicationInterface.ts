export interface ApplicationInterface
{
    get(name, middleware, action);
    post(name, middleware, action);
    patch(name, middleware, action);
    delete(name, middleware, action);
    use(...arg);
    listen(port, callback);
}