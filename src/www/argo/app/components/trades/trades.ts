namespace app.components.trades {

    export interface ITradesController {
        trades(): any[];
        closeTrade(event: any, id: string): void;
    }

    class TradesController {
        public static $inject = ["$mdDialog", "toastService", "tradesService"];
        constructor(
            private $mdDialog: ng.material.IDialogService,
            private toastService: app.components.toast.IToastService,
            private tradesService: ITradesService
        ) {
            this.activate();
        }
  
        public trades(): any[] {
            return this.tradesService.getTrades();
        }

        public closeTrade(event, id) {
            const confirm = this.$mdDialog.confirm()
                .textContent("Are you sure you wish to close the trade?")
                .ariaLabel("Trade closing confirmation")
                .ok("OK")
                .cancel("Cancel")
                .targetEvent(event);

            this.$mdDialog.show(confirm).then(() => {
                this.tradesService.closeTrade(id).then(trade => {
                    const message = "Closed " +
                        `${(trade.units > 0 ? "sell" : "buy")} ` +
                        `${trade.instrument} ` +
                        `#${trade.id} ` +
                        `@${trade.price} ` +
                        `P&L ${trade.pl}`;

                    this.toastService.show(message);
                }).catch(err => {
                    const message = `ERROR ${err.code} ${err.message}`;

                    this.toastService.show(message);
                });
            });
        }

        // private
        private activate() {
            this.tradesService.refresh();
        }
    }

    angular
        .module("components.trades")
        .component("trades", {
            controller: TradesController,
            templateUrl: "app/components/trades/trades.html"
        });
}
