import Routes from "./../../src/Route/Routes";
import RouteFaker from "./../Faker/RouteFaker";
import RouteServiceProvider from "./../../src/Providers/RouteServiceProvider";

const application = require('./../Mock/ApplicationMock');


const routeFaker = new RouteFaker();
describe("test RouteServiceProvider", () => {

    it("test registerRoutes method", () => {
        let routes = new Routes(),
            fakeRoute = [
                routeFaker.route('get'),
                routeFaker.route('post'),
                // routeFaker.group(),
                routeFaker.route('post'),
                routeFaker.route('post'),
            ];

        fakeRoute.forEach( (route) => {
            routes.route(route);
        });

        let routeServiceProvider = new RouteServiceProvider(application);
        routeServiceProvider.registerRoutes(routes);

    });

});