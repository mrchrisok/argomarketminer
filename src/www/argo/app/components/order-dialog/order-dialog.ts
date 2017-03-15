namespace app.components.orderdialog {

    class OrderDialogController {
        public static $inject = ["$mdDialog", "toastService", "quotesService", "ordersService", "accountsService"];
        constructor(
            private $mdDialog,
            private toastService: any,
            private quotesService: any,
            private ordersService,
            private accountsService
            ) {
            this.account = this.accountsService.getAccount();
            this.pips = this.account.pips;
        }

        // properties
        public type: string;
        public side: string;
        public units: number;
        public instruments: string[];
        public selectedInstrument: string;
        public expires: { label: string, value: number }[];
        public selectedExpire = 604800000; // 1 week
        public measure: string;
        public quote: number;
        public step: number;
        public takeProfit: number;
        public stopLoss: number;
        public lowerBound: number;
        public upperBound: number;
        public trailingStop: number;
        public isLowerBound: boolean;
        public isUpperBound: boolean;
        public isTakeProfit: boolean;
        public isStopLoss: boolean;
        public isTrailingStop: boolean;

        private account: { [key: string]: any };
        private pips: { [key: string]: number };
        private params: any;

        // methods
        public $onInit() {
            // this.changeMarket = changeMarket;
            // this.changeMeasure = changeMeasure;

            this.type = "MARKET";
            this.side = this.params.side;
            this.instruments = this.params.instruments;
            this.selectedInstrument = this.params.selectedInstrument;
            this.changeMarket(this.selectedInstrument);
            this.expires = [
                { label: "1 Hour", value: 60 * 60 * 1000 },
                { label: "2 Hours", value: 2 * 60 * 60 * 1000 },
                { label: "3 Hours", value: 3 * 60 * 60 * 1000 },
                { label: "4 Hours", value: 4 * 60 * 60 * 1000 },
                { label: "5 Hours", value: 5 * 60 * 60 * 1000 },
                { label: "6 Hours", value: 6 * 60 * 60 * 1000 },
                { label: "8 Hours", value: 8 * 60 * 60 * 1000 },
                { label: "12 Hours", value: 12 * 60 * 60 * 1000 },
                { label: "18 Hours", value: 18 * 60 * 60 * 1000 },
                { label: "1 Day", value: 60 * 60 * 24 * 1000 },
                { label: "2 Days", value: 2 * 60 * 60 * 24 * 1000 },
                { label: "1 Week", value: 7 * 60 * 60 * 24 * 1000 },
                { label: "1 Month", value: 30 * 60 * 60 * 24 * 1000 },
                { label: "2 Months", value: 60 * 60 * 60 * 24 * 1000 },
                { label: "3 Months", value: 90 * 60 * 60 * 24 * 1000 }
            ];
            this.selectedExpire = 604800000; // 1 week
            this.measure = "price";
            this.isLowerBound = false;
            this.isUpperBound = false;
            this.isTakeProfit = false;
            this.isStopLoss = false;
            this.isTrailingStop = false;
        }

        public changeMarket(instrument: string): void {
            if (!this.pips) {
                return;
            }

            const price = this.quotesService.getQuotes()[instrument],
                fixed = ((this.pips[this.selectedInstrument].toString()).match(/0/g) || []).length;

            this.measure = "price";
            this.step = parseFloat(this.pips[this.selectedInstrument].toString());
            if (this.side === "buy") {
                this.quote = parseFloat(price && price.ask.toString());
                this.takeProfit = parseFloat((this.quote + this.step * 10).toFixed(fixed));
                this.stopLoss = parseFloat((this.quote - this.step * 10).toFixed(fixed));
            } else {
                this.quote = parseFloat(price && price.bid.toString());
                this.takeProfit = parseFloat((this.quote - this.step * 10).toFixed(fixed));
                this.stopLoss = parseFloat((this.quote + this.step * 10).toFixed(fixed));
            }
            this.lowerBound = parseFloat((this.quote - this.step).toFixed(fixed));
            this.upperBound = parseFloat((this.quote + this.step).toFixed(fixed));
            this.trailingStop = 25;
        }

        public changeMeasure(measure: string): void {
            if (measure === "price") {
                this.changeMarket(this.selectedInstrument);
            } else {
                this.lowerBound = 1;
                this.upperBound = 1;
                this.takeProfit = 10;
                this.stopLoss = 10;
                this.trailingStop = 25;
                this.step = 1;
            }
        }

        public hide(): void {
            this.$mdDialog.hide();
        }

        public cancel(): void {
            this.$mdDialog.cancel();
        }

        public answer(action: string): void {
            const order: { [key: string]: any } = {},
                isBuy = this.side === "buy",
                isMeasurePips = this.measure === "pips";

            this.$mdDialog.hide(action);

            this.step = this.pips[this.selectedInstrument];

            order.instrument = this.selectedInstrument;
            order.units = this.units.toString();
            if (this.units && !isBuy) {
                order.units = `-${order.units}`;
            }

            order.side = this.side;
            order.type = this.type;

            if (order.type === "LIMIT") {
                order.price = this.quote && this.quote.toString();
                order.gtdTime = new Date(Date.now() + this.selectedExpire).toISOString();
            }

            if (isMeasurePips) {
                if (this.isLowerBound) {
                    order.priceBound = (this.quote - this.step * this.lowerBound).toString();
                }
                if (this.isUpperBound) {
                    order.priceBound = (this.quote + this.step * this.upperBound).toString();
                }
                if (isBuy) {
                    if (this.isTakeProfit) {
                        order.takeProfitOnFill = {};
                        order.takeProfitOnFill.price = (this.quote + this.step * this.takeProfit).toString();
                    }
                    if (this.isStopLoss) {
                        order.stopLossOnFill = {};
                        order.order.takeProfitOnFill.price = (this.quote - this.step * this.stopLoss).toString();
                    }
                } else {
                    if (this.isTakeProfit) {
                        order.takeProfitOnFill = {};
                        order.takeProfitOnFill.price = (this.quote - this.step * this.takeProfit).toString();
                    }
                    if (this.isStopLoss) {
                        order.stopLossOnFill = {};
                        order.order.takeProfitOnFill.price = (this.quote + this.step * this.stopLoss).toString();
                    }
                }
            } else {
                if (this.isLowerBound) {
                    order.priceBound = this.lowerBound.toString();
                }
                if (this.isUpperBound) {
                    order.priceBound = this.upperBound.toString();
                }
                if (this.isTakeProfit) {
                    order.takeProfitOnFill = {};
                    order.takeProfitOnFill.price = this.takeProfit.toString();
                }
                if (this.isStopLoss) {
                    order.stopLossOnFill = {};
                    order.stopLossOnFill.price = this.stopLoss.toString();
                }
            }
            if (this.isTrailingStop) {
                order.trailingStopLossOnFill = {};
                order.trailingStopLossOnFill.distance = (this.step * this.trailingStop).toString();
            }

            if (action === "submit") {
                this.ordersService.putOrder(order).then(transaction => {
                    let opened: { [key: string]: any },
                        canceled: { [key: string]: any },
                        side: string,
                        message: string;

                    if (transaction.code && transaction.message) {
                        message = "ERROR " +
                            `${transaction.code} ${transaction.message}`;

                        this.toastService.show(message);
                    } else if (transaction.errorMessage) {
                        message = `ERROR ${transaction.errorMessage}`;

                        this.toastService.show(message);
                    } else if (transaction.orderCancelTransaction) {
                        canceled = transaction.orderCancelTransaction;

                        message = `ERROR ${canceled.reason}`;

                        this.toastService.show(message);
                    } else {
                        opened = transaction.orderFillTransaction ||
                            transaction.orderFillTransaction ||
                            transaction.orderCreateTransaction;

                        side = opened.units > 0 ? "buy" : "sell";
                        message = `${side} ` +
                            `${opened.instrument} ` +
                            `#${opened.id} ` +
                            `@${opened.price} ` +
                            `for ${opened.units}`;

                        this.toastService.show(message);
                    }
                });
            }
        }
    }

    angular
        .module("components.charts")
        .component("orderDialog", {
            controller: OrderDialogController,
            templateUrl: "app/components/order-dialog/order-dialog.html",
            bindings: {
                params: "<"
            }
        });
}
