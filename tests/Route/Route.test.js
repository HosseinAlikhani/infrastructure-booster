const { Route } = require("../../src/Route/Route");
const { MethodEnum } = require("../../src/Route/RouteInterface");

describe("test routes", function(){
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
});