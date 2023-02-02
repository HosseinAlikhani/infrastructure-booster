const application = require('./../Mock/ApplicationMock');
import ServiceProviderFaker from "./../Faker/ServiceProviderFaker";
import ServiceProvider from "./../../src/Providers/ServiceProvider";

let serviceProviderFaker = new ServiceProviderFaker();
describe("test service provider", () => {

    it("test init static method", () => {
        let serviceProvider = ServiceProvider.init(application);

        expect( serviceProvider ).toBeInstanceOf(ServiceProvider);
    });

    it("test make static method without exception", () => {
        ServiceProvider.init(application);

        let make = ServiceProvider.make();

        expect( make ).toBeInstanceOf(ServiceProvider);
    });

    it("test make static method with exception", () => {
        ServiceProvider.instance = null;
        expect( () => {
            ServiceProvider.make();
        }).toThrow(Error);
    });

    it("test getApplicationSource method", () => {
        let serviceProvider = ServiceProvider.init(application);
        expect( serviceProvider.getApplicationSource() ).toEqual( application );
    });

    it("test registerService method", () => {
        let serviceProvider = ServiceProvider.init(application);
        expect( serviceProvider.registerService(
            serviceProviderFaker.service()
        )).toBe(true);
    });

    it("test listen method", () => {
        let serviceProvider = ServiceProvider.init(application);
        expect( serviceProvider.listen() ).toBe(true);
    });
});