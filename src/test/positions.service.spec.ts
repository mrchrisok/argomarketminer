"use strict";

describe("positionsService", () => {
    const api = "/api/positions";

    let $httpBackend,
        sessionService,
        positionsService;

    beforeEach(angular.mock.module("components"));

    beforeEach(inject($injector => {
        const environment = "my environment",
            token = "my token",
            accountId = "my account id";

        $httpBackend = $injector.get("$httpBackend");
        positionsService = $injector.get("positionsService");
        sessionService = $injector.get("sessionService");

        sessionService.setCredentials({
            environment,
            token,
            accountId
        });

        $httpBackend
            .when("POST", api)
            .respond([
                {
                    instrument: "EUR_USD",
                    long: {
                        averagePrice: 1.3626,
                        units: 4741
                    }
                },
                {
                    instrument: "USD_CAD",
                    short: {
                        averagePrice: 1.11563,
                        units: -30
                    }
                },
                {
                    instrument: "USD_JPY",
                    long: {
                        averagePrice: 102.455,
                        units: 88
                    }
                }
            ]);

        $httpBackend.whenGET(/^app\/.*\.html$/).respond(200);
    }));

    afterEach(() => {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe("getPositions", () => {
        it("test", () => {
            positionsService.getPositions().then(positions => {

                const assert = chai.assert;

                assert.lengthOf(positions, 3);

                assert.equal("USD_CAD", positions[1].instrument);
                assert.equal(-30, positions[1].units);
                assert.equal("sell", positions[1].side);
                assert.equal(1.11563, positions[1].avgPrice);
            });
            $httpBackend.flush();
        });
    });
});
