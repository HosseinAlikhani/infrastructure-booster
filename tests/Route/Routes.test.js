import RouteFaker from "../Faker/RouteFaker";
import Routes from "./../../src/Route/Routes";

let routeFaker = new RouteFaker();

describe('test Routes', () => {

    it('check route method with route instance without exception', () => {
        let routes = new Routes();
        for(let i = 1; i <= 5; i++){
            routes.route(routeFaker.route());
        }

        expect( routes.getRoutes().length ).toBe(5);
    });

    
});