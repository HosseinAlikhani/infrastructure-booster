export default interface MiddlewareInterface
{
    handle(request, response, next);
}