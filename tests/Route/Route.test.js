const { Route } = require("../../src/Route/Route");
const { MethodEnum } = require("../../src/Route/RouteInterface");

describe("test route", function(){
    it("create route class", function(){
        let data = {
            method: MethodEnum.get,
            route: '/api/test',
            middleware: ['authenticate'],
            action: () => {return 'action'}
        };

        let route = new Route(data.method, data.route, data.middleware, data.action);

        expect(route).toBeInstanceOf(Route);
    });

    it("Route Getter", function(){
        let data = {
            method: MethodEnum.delete,
            route: '/api/getter-test',
            middleware: ['web'],
            action: () => { return 'getter-action' }
        };

        let route = new Route(data.method, data.route, data.middleware, data.action);

        expect(route.getMethod()).toBe(data.method);
        expect(route.getRoute()).toBe(data.route);
        expect(route.getMiddleware()).toBe(data.middleware);
        expect(route.getAction()).toBe(data.action);

        // test if middleware it's just empty array
        data.middleware = [];
        route = new Route(data.method, data.route, data.middleware, data.action);

        expect(route.getMiddleware()).toBe(data.middleware);
    });
});