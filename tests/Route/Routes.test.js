import RouteFaker from "../Faker/RouteFaker";
import Routes from "./../../src/Route/Routes";

let routeFaker = new RouteFaker();

describe('test Routes', () => {

    it('check route/getRoute methods', () => {
        let routes = new Routes(),
            routeFakes = [];

        for(let i = 1; i <= 5; i++){
            routeFakes.push( routes.route(routeFaker.route()) );
        }

        expect( routes.getRoutes().length ).toBe(5);
        expect( routes.getRoutes() ).toEqual( routeFakes );
    });

    it('check group/getRoute methods', () => {
        let routes = new Routes(),
            routeFakes = [];

        let group1 = routeFaker.group();
        routeFakes.push( routes.group(group1.prefix, group1.middleware, group1.callback) );

        for(let i = 1; i <= 4; i++){
            routeFakes.push( routes.route(routeFaker.route()) );
        }

        let group3  = routeFaker.group();
        routeFakes.push( routes.group(group3.prefix, group3.middleware, group3.callback) );

        expect( routes.getRoutes().length ).toBe(6);
        expect( routes.getRoutes() ).toEqual( routeFakes );
    });

    it('check get method', () => {
        let routes = new Routes(),
            fakeRoute = routeFaker.route('get');
        routes.get( fakeRoute.getRoute(), fakeRoute.getMiddleware(), fakeRoute.getAction() );

        expect(routes.getRoutes().length).toBe(1);

        let route = routes.getRoutes()[0];

        expect( route.getMethod() ).toBe( fakeRoute.getMethod() );
        expect( route.getRoute() ).toBe( fakeRoute.getRoute() );
        expect( route.getMiddleware() ).toBe( fakeRoute.getMiddleware() );
        expect( route.getAction() ).toBe( fakeRoute.getAction() );
    });
});