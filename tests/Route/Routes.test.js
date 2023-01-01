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
        routeFakes.push( routes.group(group1.getPrefix(), group1.getMiddleware(), group1.getCallback()) );

        for(let i = 1; i <= 4; i++){
            routeFakes.push( routes.route(routeFaker.route()) );
        }

        let group3  = routeFaker.group();
        routeFakes.push( routes.group(group3.getPrefix(), group3.getMiddleware(), group3.getCallback()) );

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

    it('check post method', () => {
        let routes = new Routes(),
        fakeRoute = routeFaker.route('post');
        routes.post( fakeRoute.getRoute(), fakeRoute.getMiddleware(), fakeRoute.getAction() );

        expect(routes.getRoutes().length).toBe(1);

        let route = routes.getRoutes()[0];

        expect( route.getMethod() ).toBe( fakeRoute.getMethod() );
        expect( route.getRoute() ).toBe( fakeRoute.getRoute() );
        expect( route.getMiddleware() ).toBe( fakeRoute.getMiddleware() );
        expect( route.getAction() ).toBe( fakeRoute.getAction() );
    });

    it('check patch method', () => {
        let routes = new Routes(),
        fakeRoute = routeFaker.route('patch');
        routes.patch( fakeRoute.getRoute(), fakeRoute.getMiddleware(), fakeRoute.getAction() );

        expect(routes.getRoutes().length).toBe(1);

        let route = routes.getRoutes()[0];

        expect( route.getMethod() ).toBe( fakeRoute.getMethod() );
        expect( route.getRoute() ).toBe( fakeRoute.getRoute() );
        expect( route.getMiddleware() ).toBe( fakeRoute.getMiddleware() );
        expect( route.getAction() ).toBe( fakeRoute.getAction() );
    });

    it('check delete method', () => {
        let routes = new Routes(),
        fakeRoute = routeFaker.route('delete');
        routes.delete( fakeRoute.getRoute(), fakeRoute.getMiddleware(), fakeRoute.getAction() );

        expect(routes.getRoutes().length).toBe(1);

        let route = routes.getRoutes()[0];

        expect( route.getMethod() ).toBe( fakeRoute.getMethod() );
        expect( route.getRoute() ).toBe( fakeRoute.getRoute() );
        expect( route.getMiddleware() ).toBe( fakeRoute.getMiddleware() );
        expect( route.getAction() ).toBe( fakeRoute.getAction() );
    });
});