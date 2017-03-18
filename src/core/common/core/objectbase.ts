import { Container } from "inversify";
import { NotificationObject } from "./notificationobject";

export class ObjectBase extends NotificationObject {

   static Container: Container;

   /**
   * Get the value of a target property from the passed-in propertyName
   * @param propertyName Name of the target property.
   */
   GetValue<K extends keyof this>(propertyName: K) {
      return this[propertyName];
   }

   /**
   * Set the value of a target property from the passed-in propertyName and value object
   * @param propertyName Name of the target property.
   * @param value New value of the target property.
   */
   SetValue<T extends this, K extends keyof this>(propertyName: K, value: T[K]): void {
      try {
         this.GetValue(propertyName);
      }
      catch (err) {
         throw new Error(`${this.toString()} does not contain a property definition for ${value}`);
      }

      const property = Object.getOwnPropertyDescriptor(this, propertyName);
      if (!property.set) {
         throw new Error(`Property ${propertyName} is a read-only property.`);
      }

      this[propertyName] = value;
   }
    
}
