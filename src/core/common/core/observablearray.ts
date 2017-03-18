import { EventEmitter } from "events";

export enum NotifyArrayChangedAction {
   Add,
   Move,
   Remove,
   Replace,
   Reset
}

export class NotifyArrayChangedEventArgs<T> {
   Action: NotifyArrayChangedAction;
   OldItems: T[];
   NewItems: T[];
   NewStartingIndex: number;
   OldStartingIndex: number;
}

export class ObservableArray<T> extends EventEmitter {
   constructor() {
      super();
      this._items = [];
   }

   private _items: T[];

   // properties
   get length(): number { return this._items.length; }

   // methods
   push(...items: T[]) {
      const args = new NotifyArrayChangedEventArgs<T>();
      args.Action = NotifyArrayChangedAction.Add;
      args.OldItems = this._items;
      args.NewItems = items;
      const count = this._items.push(...items);
      this.emit("push", this, args);
      return count;
   }

   pop() {
      const args = new NotifyArrayChangedEventArgs<T>();
      args.Action = NotifyArrayChangedAction.Remove;
      args.OldItems = this._items;
      const last = this._items.pop();
      args.NewItems = this._items;
      this.emit("pop", this, args);
      return last;
   }

   shift() {
      const args = new NotifyArrayChangedEventArgs<T>();
      args.Action = NotifyArrayChangedAction.Remove;
      args.OldItems = this._items;
      const first = this._items.shift();
      this.emit("shift", this, args);
      return first;
   }
}