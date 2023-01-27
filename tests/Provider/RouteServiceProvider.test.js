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

    it("test registerRoutes method", () => {
        ServiceProvider.init(application);
        let routes = new Routes(),
            fakeRoute = [
                routeFaker.route('get'),
                routeFaker.route('post'),
                routeFaker.group(),
                routeFaker.route('post'),
                routeFaker.route('post'),
                routeFaker.route('delete'),
            ];

        fakeRoute.forEach( (route) => {
            routes.route(route);
        });

        let routeServiceProvider = RouteServiceProvider.make();
        expect( routeServiceProvider.registerRoutes(routes)).toBe(true);
    });

});