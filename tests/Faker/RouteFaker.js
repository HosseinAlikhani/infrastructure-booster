import { Route } from "../../src/Route/Route";
import { MethodEnum } from "../../src/Route/RouteInterface";
import Routes from "../../src/Route/Routes";

Array.prototype.random = function(){
    return this[Math.floor(Math.random()*this.length)];
}

export default class RouteFaker
{
    /**
     * generate random route instance
     * @param {*} method 
     * @param {*} route 
     * @param {*} middleware 
     * @param {*} action 
     */
    route(method = null,route = null,middleware = [],action = () => {})
    {
        method = method ? MethodEnum[method] : MethodEnum[this.method()];
        route = route ?? this.routeUrl(); 
        return new Route(
            method,
            route,
            middleware,
            action
        );
    }

    group(prefix = null, middleware = [], callback = null)
    {
        prefix = prefix ?? this.url();
        callback = callback ?? function(routes){
            for(let i = 1; i <= 3; i++){
                Routes.route(this.route());
            }
        };
        return {
            prefix,
            middleware,
            callback
        };
    }

    /**
     * generate random http verb
     */
    method(){
        let methods = ['get', 'post', 'patch', 'delete'];
        return methods.random();
    }

    /**
     * generate random route url
     */
    routeUrl(){
        return `${this.url()}${this.url()}`;
    }

    url(length = 7){
        return `/${(Math.random() + 1).toString(36).substring(length)}`;
    }
}