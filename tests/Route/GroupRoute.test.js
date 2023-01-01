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
});