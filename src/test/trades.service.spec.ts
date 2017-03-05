"use strict";

describe("tradesService", () => {
    const api = "/api/trades";

    let $httpBackend,
        sessionService,
        tradesService;

    beforeEach(angular.mock.module("components"));

    beforeEach(inject($injector => {
        const environment = "my environment",
            token = "my token",
            accountId = "my account id";

        $httpBackend = $injector.get("$httpBackend");
        tradesService = $injector.get("tradesService");
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
                    id: 175427743,
                    instrument: "EUR_USD",
                    price: 1.36687,
                    side: "sell",
                    stopLoss: 0,
                    takeProfit: 0,
                    time: "2014-02-13T17:47:57Z",
                    trailingAmount: 0,
                    trailingStop: 0,
                    units: 2
                },
                {
                    id: 175427742,
                    instrument: "EUR_USD",
                    price: 1.36687,
                    side: "sell",
                    stopLoss: 0,
                    takeProfit: 0,
                    time: "2014-02-13T17:47:56Z",
                    trailingAmount: 0,
                    trailingStop: 0,
                    units: 2
                }
            ]);

        $httpBackend.whenGET(/^app\/.*\.html$/).respond(200);
    }));

    afterEach(() => {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe("refresh", () => {
        it("test", () => {
            tradesService.refresh();
            $httpBackend.flush();

            const assert = chai.assert;
            const trades = tradesService.getTrades();

            assert.lengthOf(trades, 2);

            assert.equal(175427743, trades[0].id);
            assert.equal(2, trades[0].units);
            assert.equal("sell", trades[0].side);
            assert.equal("EUR_USD", trades[0].instrument);
            assert.equal("2014-02-13T17:47:57Z", trades[0].time);
            assert.equal(1.36687, trades[0].price);
            assert.equal(0, trades[0].takeProfit);
            assert.equal(0, trades[0].stopLoss);
            assert.equal(0, trades[0].trailingStop);
            assert.equal(0, trades[0].trailingAmount);
        });
    });
});
