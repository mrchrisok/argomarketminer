import { EventEmitter } from "events";

export class NotifyArrayChangedEventArgs<T> {
   public OldItems: T[];
   public NewItems: T[];
}

export class ObservableArray<T> extends EventEmitter {
   constructor() {
      super();
      this._items = [];
   }

   private _items: T[];

   public push(...items: T[]) {
      const args = new NotifyArrayChangedEventArgs<T>();
      args.OldItems = this._items;
      args.NewItems = items;
      const count = this._items.push(...items);
      this.emit("push", this, args);
      return count;
   }

   public pop() {
      const args = new NotifyArrayChangedEventArgs<T>();
      args.OldItems = this._items;
      const last = this._items.pop();
      args.NewItems = this._items;
      this.emit("pop", this, args);
      return last;
   }
}