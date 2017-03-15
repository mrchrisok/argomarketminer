namespace app.components.trades {

    export interface ITradesService {
        getTrades(): any[];
        closeTrade(id: string): any;
        updateTrades(tick: any): void;
        refresh(): void;
    }

    class TradesService implements ITradesService {
        public static $inject = ["$http", "sessionService", "accountsService"];
        constructor(
            private $http: ng.IHttpService,
            private sessionService: any,
            private accountsService: any
        ) {
        }

        private _trades = [];

        public getTrades(): any[] {
            return this._trades;
        }

        public refresh(): void {
            this.sessionService.isLogged().then(credentials => {
                this.$http.post("/api/trades", {
                    environment: credentials.environment,
                    token: credentials.token,
                    accountId: credentials.accountId
                }).then(res => {
                    this._trades.length = 0;
                    angular.extend(this._trades, res.data);
                    this._trades.forEach(trade => {
                        trade.side = trade.currentUnits > 0 ? "buy" : "sell";
                    });
                });
            });
        }

        public closeTrade(id: string): any {
            return this.sessionService.isLogged().then(
                credentials => this.$http.post("/api/closetrade", {
                    environment: credentials.environment,
                    token: credentials.token,
                    accountId: credentials.accountId,
                    id
                }).then(order => order.data)
                    .catch(err => err.data)
            );
        }

        public updateTrades(tick): void {
            const account = this.accountsService.getAccount(),
                pips = account.pips;

            this._trades.forEach((trade, index) => {
                let current,
                    side;

                if (trade.instrument === tick.instrument) {
                    side = trade.currentUnits > 0 ? "buy" : "sell";

                    if (side === "buy") {
                        current = tick.bid;
                        this._trades[index].profitPips =
                            ((current - trade.price) / pips[trade.instrument]);
                    }
                    if (side === "sell") {
                        current = tick.ask;
                        this._trades[index].profitPips =
                            ((trade.price - current) / pips[trade.instrument]);
                    }

                    this._trades[index].current = current;
                }
            });
        }
    }

    angular
        .module("components.trades")
        .service("tradesService", TradesService);
}
