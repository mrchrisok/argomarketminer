namespace app.components.toast {

    export interface IToastService {
        show(message: string): void;
    }

    class ToastService implements IToastService {
        public static $inject = ["$mdToast"];
        constructor(private $mdToast: ng.material.IToastService) {
        }

        public show(message: string): void {
            // show a simple toast msg with a bottom right
            // [CLOSE] button for 10 secs
            this.$mdToast.show(
                this.$mdToast.simple()
                    .textContent(message)
                    .action("CLOSE")
                    .position("right bottom")
                    .hideDelay(10000)
            );
        }
    }

    angular
        .module("components.toast")
        .service("toastService", ToastService);
}
