//import * as util from "util";
import { EventEmitter } from "events";

export interface INotifyPropertyChanged {
   OnPropertyChanged(value: any): void;
}

export class NotificationObject extends EventEmitter
   implements INotifyPropertyChanged {

   public OnPropertyChanged(value: any) {
      const property = arguments.callee.caller.name;
      this.emit("propertyChanged", property, value);
   }
}
