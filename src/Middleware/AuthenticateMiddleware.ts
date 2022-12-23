import { MiddlewareInterface } from "./MiddlewareInterface";

export class AuthenticateMiddleware implements MiddlewareInterface
{
    public async handle(request, response, next)
    {
        next();
    }
}