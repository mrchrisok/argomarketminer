export interface IParameters {
   GetString(name: string): string;
   GetBoolean(name: string): boolean | null
   GetDouble(name: string): number | null;
   GetDecimal(name: string): number | null;
   GetShort(name: string): number | null;
   GetInteger(name: string): number | null;
   GetLong(name: string): number | null;
}