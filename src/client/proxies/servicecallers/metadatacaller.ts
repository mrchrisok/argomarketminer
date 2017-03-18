import { ServiceCaller } from "./servicecaller";
import { IMetadataService } from "../../index";
import { MetaSetting, MetaLookup, MetaResource } from "../../../core/common/meta/index";
//

export class MetadataCaller extends ServiceCaller {

   static Instance() { return new MetadataCaller(); }

   private _metaSettingResult: MetaSetting;
   private _metaSettingResults: MetaSetting[];
   private _metaLookupResult: MetaLookup;
   private _metaLookupResults: MetaLookup[];
   private _metaResourceResult: MetaResource;
   private _metaResourceResults: MetaResource[];

   async ClearCacheAsync(): Promise<boolean> {
      let result: boolean = false;
      await this.WithMetadataClientAsync(async metadataClient => {
         result = await metadataClient.ClearCacheAsync();
      });
      return result;
   }

   async ClearCacheItemAsync(key: string): Promise<boolean> {
      let result: boolean = false;
      await this.WithMetadataClientAsync(async metadataClient => {
         result = await metadataClient.ClearCacheItemAsync(key);
      });
      return result;
   }

   async ClearCacheSetsAsync(entitySets: string[]): Promise<boolean> {
      let result: boolean = false;
      await this.WithMetadataClientAsync(async metadataClient => {
         result = await metadataClient.ClearCacheSetsAsync(entitySets);
      });
      return result;
   }

   async GetSettingAsync(type: string, code: string, enabledOnly: boolean = true): Promise<MetaSetting> {
      await this.WithMetadataClientAsync(async metadataClient => {
         this._metaSettingResult = await metadataClient.GetSettingAsync(type, code, enabledOnly);
      });
      return this._metaSettingResult;
   }

   async GetSettingsAsync(type: string, enabledOnly: boolean = true): Promise<MetaSetting[]> {
      await this.WithMetadataClientAsync(async metadataClient => {
         this._metaSettingResults = await metadataClient.GetSettingsAsync(type, enabledOnly);
      });
      return this._metaSettingResults;
   }

   async GetLookupAsync(type: string, code: string, enabled: boolean = true): Promise<MetaLookup> {
      await this.WithMetadataClientAsync(async metadataClient => {
         this._metaLookupResult = await metadataClient.GetLookupAsync(type, code, enabled);
      });
      return this._metaLookupResult;
   }

   async GetLookupsAsync(type: string, enabledOnly: boolean = true): Promise<MetaLookup[]> {
      await this.WithMetadataClientAsync(async metadataClient => {
         this._metaLookupResults = await metadataClient.GetLookupsAsync(type, enabledOnly);
      });
      return this._metaLookupResults;
   }

   async GetResourceAsync(set: string, type: string, key: string, cultureCode: string = "en-US", enabled: boolean = true): Promise<MetaResource> {
      await this.WithMetadataClientAsync(async metadataClient => {
         this._metaResourceResult = await metadataClient.GetResourceAsync(set, type, key, cultureCode, enabled);
      });
      return this._metaResourceResult;
   }

   async GetResourcesAsync(set: string, enabledOnly: boolean = true): Promise<MetaResource[]> {
      await this.WithMetadataClientAsync(async metadataClient => {
         this._metaResourceResults = await metadataClient.GetResourcesAsync(set, enabledOnly);
      });
      return this._metaResourceResults;
   }

   async GetResourcesByTypeAsync(set: string, type: string, enabledOnly: boolean = true): Promise<MetaResource[]> {
      await this.WithMetadataClientAsync(async metadataClient => {
         this._metaResourceResults = await metadataClient.GetResourcesByTypeAsync(set, type, enabledOnly);
      });
      return this._metaResourceResults;
   }

   async GetResourcesByCultureAsync(set: string, cultureCode: string = "en-US", enabledOnly: boolean = true): Promise<MetaResource[]> {
      await this.WithMetadataClientAsync(async metadataClient => {
         this._metaResourceResults = await metadataClient.GetResourcesByCultureAsync(set, cultureCode, enabledOnly);
      });
      return this._metaResourceResults;
   }

   async GetResourcesByTypeAndCultureAsync(set: string, type: string, cultureCode: string = "en-US", enabledOnly: boolean = true): Promise<MetaResource[]> {
      await this.WithMetadataClientAsync(async metadataClient => {
         this._metaResourceResults = await metadataClient.GetResourcesByTypeAndCultureAsync(set, type, cultureCode, enabledOnly);
      });
      return this._metaResourceResults;
   }

   // utilities
   protected async WithMetadataClientAsync(codeToExecute: (service: IMetadataService) => Promise<void>): Promise<void> {
      await this.WithClientAsync<IMetadataService>(this._serviceFactory.CreateClient<IMetadataService>(), codeToExecute);
   }
}
