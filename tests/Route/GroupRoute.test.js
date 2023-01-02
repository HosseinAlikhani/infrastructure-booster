import { GroupRoute } from "../../src/Route/GroupRoute";
import RouteFaker from "./../Faker/RouteFaker";

const routeFaker = new RouteFaker();

describe("test GroupRoute class", () => {

    it("test new groupRoute instance", () => {
        let fakeGroupRoute = routeFaker.group(),
            groupRoute = new GroupRoute(
                fakeGroupRoute.getPrefix(),
                fakeGroupRoute.getMiddleware(),
                fakeGroupRoute.getCallback()
            );
        expect( groupRoute ).toBeInstanceOf(GroupRoute);
    });

    it("test getter methods", () => {
        let routes = (route) => {
                route.get('/users', [], () => {} );
                route.post('/users', [], () => {} );
                route.delete('/users', [], () => {} );
            },
            groupRoute = new GroupRoute(
                '/test',
                ['auth'],
                routes
            );

            expect( groupRoute.getPrefix() ).toEqual('/test');
            expect( groupRoute.getMiddleware() ).toEqual(['auth']);
            expect( groupRoute.getCallback() ).toEqual( routes );
    });
});