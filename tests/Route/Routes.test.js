import RouteFaker from "../Faker/RouteFaker";
import Routes from "./../../src/Route/Routes";

let routeFaker = new RouteFaker();

describe('test Routes', () => {

    it('check route/getRoute methods', () => {
        let routes = new Routes(),
            routeFakes = [];

        for(let i = 1; i <= 5; i++){
            let fake = routeFaker.route();
            routeFakes.push(fake);
            routes.route(fake);
        }

        expect( routes.getRoutes().length ).toBe(5);
        expect( routes.getRoutes() ).toEqual( routeFakes );
    });

    it('check group/getRoute methods', () => {
        let routes = new Routes(),
            routeFakes = [];
        
    });
});