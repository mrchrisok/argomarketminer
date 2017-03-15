import { MetaSetting, MetaLookup, MetaResource } from "../../../core/common/meta/index";
import { IServiceContract } from "../../../core/index";

export interface IMetadataService extends IServiceContract {
   ClearCacheAsync(): Promise<void>;
   ClearCacheItemAsync(key): Promise<void>;
   ClearCacheSetsAsync(entitySets: string[]): Promise<void>;
   GetSettingAsync(type: string, code: string, enabledOnly: boolean): Promise<MetaSetting>;
   GetSettingsAsync(type, enabledOnly: boolean): Promise<MetaSetting[]>;
   GetLookupAsync(type, code: string, enabled: boolean): Promise<MetaLookup>;
   GetLookupsAsync(type: string, enabledOnly: boolean): Promise<MetaLookup[]>;
   GetResourceAsync(set: string, type: string, key: string, cultureCode: string, enabled: boolean): Promise<MetaResource>;
   GetResourcesAsync(set: string, enabledOnly: boolean): Promise<MetaResource[]>;
   GetResourcesByTypeAsync(set: string, type: string, enabledOnly: boolean): Promise<MetaResource[]>;
   GetResourcesByCultureAsync(set: string, cultureCode: string, enabledOnly: boolean): Promise<MetaResource[]>;
   GetResourcesByTypeAndCultureAsync(set: string, type: string, cultureCode: string, enabledOnly: boolean): Promise<MetaResource[]>;
}
