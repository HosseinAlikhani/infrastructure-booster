import Routes from "./../../src/Route/Routes";
import RouteFaker from "./../Faker/RouteFaker";
import RouteServiceProvider from "./../../src/Providers/RouteServiceProvider";
import ServiceProvider from "infrastructure-booster/src/Providers/ServiceProvider";
const application = require('./../Mock/ApplicationMock');

const routeFaker = new RouteFaker();
describe("test RouteServiceProvider", () => {
    it("test make method with exception", () => {
        expect( () => { RouteServiceProvider.make() }).toThrow(Error);
    });

    it("test make method without exception", () => {
        ServiceProvider.init(application);
        expect(RouteServiceProvider.make()).toBeInstanceOf(RouteServiceProvider);
    });

    it("test registerMiddlewares", () => {
        ServiceProvider.init(application);
        let routeServiceProvider = RouteServiceProvider.make(),
            middlewares = {
                'testRegisterMiddleware1': () => {

                },
                'testRegisterMiddleware2': () => {

                }
            };
        for(let middleware in middlewares){
            routeServiceProvider.registerMiddlewares(middleware, middlewares[middleware]);
        }

        expect( routeServiceProvider.makeMiddleware('testRegisterMiddleware1')).toBeInstanceOf(Function);
        expect( routeServiceProvider.makeMiddleware('testRegisterMiddleware2')).toBeInstanceOf(Function);
    });

    it("test makeMiddleware that not register before", () => {
        ServiceProvider.init(application);
        let routeServiceProvider = RouteServiceProvider.make();
        expect( () => { routeServiceProvider.makeMiddleware('authenticate') } ).toThrow(Error);
    });

    it("test makeMiddlware that register before", () => {
        ServiceProvider.init(application);
        let routeServiceProvider = RouteServiceProvider.make();
        routeServiceProvider.registerMiddlewares('corserror', () => {});
        expect( routeServiceProvider.makeMiddleware('corserror')).toBeInstanceOf(Function);
    });

    it("test registerRoutes method", () => {
        ServiceProvider.init(application);
        let routeServiceProvider = RouteServiceProvider.make(),
            routes = new Routes(),
            fakeRoute = [
                routeFaker.route('get'),
                routeFaker.route('post'),
                routeFaker.group(null, ['test1', 'test2']),
                routeFaker.route('post'),
                routeFaker.route('post'),
                routeFaker.route('delete'),
                routeFaker.group(null, []),
            ];

        routeServiceProvider.registerMiddlewares('test1', routeFaker.middleware());

        routeServiceProvider.registerMiddlewares('test2', routeFaker.middleware());


        fakeRoute.forEach( (route) => {
            routes.route(route);
        });

        expect( routeServiceProvider.registerRoutes(routes)).toBe(true);
    });

});