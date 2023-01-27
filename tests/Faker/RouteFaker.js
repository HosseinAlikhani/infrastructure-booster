import { Route } from "../../src/Route/Route";
import { GroupRoute } from "../../src/Route/GroupRoute";
import { MethodEnum } from "../../src/Route/RouteInterface";

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

    /**
     * generate random group instance
     * @param {*} prefix 
     * @param {*} middleware 
     * @param {*} callback 
     * @returns 
     */
    group(prefix = null, middleware = [], callback = null)
    {
        prefix = prefix ?? this.url();
        callback = callback ? callback : (routes) => {
            for(let i = 1; i <= 3; i++){
                routes.route(this.route());
            }
        };
        return new GroupRoute(
            prefix,
            middleware,
            callback
        );
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