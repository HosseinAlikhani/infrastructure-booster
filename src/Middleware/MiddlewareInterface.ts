export interface MiddlewareInterface
{
    handle(request, response, next);
}