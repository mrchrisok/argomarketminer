import { ClientBase } from "../../../core/common/servicemodel/index";
import { IConfiguration, ILogger } from "../../../core/index";
import "reflect-metadata";
import { inject, injectable } from "inversify/dts/inversify";
import { IMetadataService } from "../../index";
import { MetaResource, MetaLookup, MetaSetting } from "../../../core/common/meta/index";

@injectable()
export class MetadataClient extends ClientBase implements IMetadataService {
   constructor(
      @inject("AppConfig") _config: IConfiguration,
      @inject("") logger: ILogger
   ) {
      super(_config, "IMetadataService");
      this._logger = logger;
   }

   async ClearCacheAsync(): Promise<boolean> {
      let result;
      const options = { url: "ClearCache" }
      function callback(body: any): void { result = body.result; }
      await this.Get(options, this.GetResponseHandler(callback));
      return result as boolean;
   }

   async ClearCacheItemAsync(key: string): Promise<boolean> {
      let result;
      const body = { key: key };
      const options = { url: "ClearCacheItem", body: body }
      function callback(body: any): void { result = body.result; }
      await this.Get(options, this.GetResponseHandler(callback));
      return result as boolean;
   }

   async ClearCacheSetsAsync(entitySets: string[]): Promise<boolean> {
      let result;
      const body = { entitySets: JSON.stringify(entitySets) };
      const options = { url: "ClearCacheSets", body: body } 
      function callback(body: any): void { result = body.result; }
      await this.Get(options, this.GetResponseHandler(callback));
      return result as boolean;
   }

   async GetSettingAsync(type: string, code: string, enabledOnly: boolean = true): Promise<MetaSetting> {
      let setting;
      const body = { type: type, code: code, enabledOnly: enabledOnly };
      const options = { url: "GetSetting", body: body }
      function callback(body: any): void { setting = Object.assign(new MetaSetting(), body); }
      await this.Get(options, this.GetResponseHandler(callback));
      return setting as MetaSetting;
   }

   async GetSettingsAsync(type: string, enabledOnly: boolean = true): Promise<MetaSetting[]> {
      let settings;
      const body = { type: type, enabledOnly: enabledOnly };
      const options = { url: "GetSettings", body: body }
      function callback(body: any): void { settings = body.map(x => Object.assign(new MetaSetting(), x)); }
      await this.Get(options, this.GetResponseHandler(callback));
      return settings as MetaSetting[];
   }

   async GetLookupAsync(type: string, code: string, enabled: boolean = true): Promise<MetaLookup> {
      let lookup;
      const body = { type: type, code: code, enabled: enabled };
      const options = { url: "GetLookup", body: body }
      function callback(body: any): void { lookup = Object.assign(new MetaLookup(), body); }
      await this.Get(options, this.GetResponseHandler(callback));
      return lookup as MetaLookup;
   }

   async GetLookupsAsync(type: string, enabledOnly: boolean = true): Promise<MetaLookup[]> {
      let lookups;
      const body = { type: type, enabledOnly: enabledOnly };
      const options = { url: "GetLookups", body: body }
      function callback(body: any): void { lookups = body.map(x => Object.assign(new MetaLookup(), x)); }
      await this.Get(options, this.GetResponseHandler(callback));
      return lookups as MetaLookup[];
   }

   async GetResourceAsync(set: string, type: string, key: string, cultureCode: string = "en-US", enabled: boolean = true): Promise<MetaResource> {
      let resource;
      const body = { set: set, type: type, key: key, cultureCode: cultureCode, enabled: enabled };
      const options = { url: "GetResource", body: body }
      function callback(body: any): void { resource = Object.assign(new MetaResource(), body); }
      await this.Get(options, this.GetResponseHandler(callback));
      return resource as MetaResource;
   }

   async GetResourcesAsync(set: string, enabledOnly: boolean = true): Promise<MetaResource[]> {
      let resources;
      const body = { set: set, enabledOnly: enabledOnly };
      const options = { url: "GetResources", body: body }
      function callback(body: any): void { resources = body.map(x => Object.assign(new MetaResource(), x)); }
      await this.Get(options, this.GetResponseHandler(callback));
      return resources as MetaResource[];
   }

   async GetResourcesByTypeAsync(set: string, type: string, enabledOnly: boolean = true): Promise<MetaResource[]> {
      let resources;
      const body = { set: set, type: type, enabledOnly: enabledOnly };
      const options = { url: "GetResourcesByType", body: body }
      function callback(body: any): void { resources = body.map(x => Object.assign(new MetaResource(), x)); }
      await this.Get(options, this.GetResponseHandler(callback));
      return resources as MetaResource[];
   }

   async GetResourcesByCultureAsync(set: string, cultureCode: string = "en-US", enabledOnly: boolean = true): Promise<MetaResource[]> {
      let resources;
      const body = { set: set, cultureCode: cultureCode, enabledOnly: enabledOnly };
      const options = { url: "GetResourcesByCulture", body: body }
      function callback(body: any): void { resources = body.map(x => Object.assign(new MetaResource(), x)); }
      await this.Get(options, this.GetResponseHandler(callback));
      return resources as MetaResource[];
   }

   async GetResourcesByTypeAndCultureAsync(set: string, type: string, cultureCode: string = "en-US", enabledOnly: boolean = true): Promise<MetaResource[]> {
      let resources;
      const body = { set: set, type: type, cultureCode: cultureCode, enabledOnly: enabledOnly };
      const options = { url: "GetResourcesByTypeAndCulture", body: body }
      function callback(body: any): void { resources = body.map(x => Object.assign(new MetaResource(), x)); }
      await this.Get(options, this.GetResponseHandler(callback));
      return resources as MetaResource[];
   }
}
