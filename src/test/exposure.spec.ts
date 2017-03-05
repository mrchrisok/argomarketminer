"use strict";

describe("Exposure", () => {
    let $controller,
        tradesServiceMock;

    beforeEach(angular.mock.module("components"));

    beforeEach(inject($componentController => {
        $controller = $componentController;

        tradesServiceMock = {
            getTrades() {
                return [
                    {
                        currentUnits: 100,
                        instrument: "EUR_USD",
                        price: 1.2345
                    },
                    {
                        currentUnits: 200,
                        instrument: "GPB_USD",
                        price: 1.4678
                    }
                ];
            }
        };
    }));

    describe("vm.exposures", () => {
        let controller;

        beforeEach(() => {
            controller = $controller("exposure", {
                $scope: {},
                tradesService: tradesServiceMock
            });
        });

        it("test", () => {
            const exposures = controller.exposures;

            const assert = chai.assert;

            assert.lengthOf(exposures, 3);

            assert.equal("EUR", exposures[0].market);
            assert.equal("100", exposures[0].units);
            assert.equal("Long", exposures[0].type);

            assert.equal("USD", exposures[1].market);
            assert.equal("417.01", exposures[1].units);
            assert.equal("Short", exposures[1].type);

            assert.equal("GPB", exposures[2].market);
            assert.equal("200", exposures[2].units);
            assert.equal("Long", exposures[2].type);
        });
    });
});
