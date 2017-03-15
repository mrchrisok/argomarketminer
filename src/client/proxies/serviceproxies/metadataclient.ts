using MarketMiner.Client.Contracts;
using MarketMiner.Client.Entities;
using N.Core.Common.ServiceModel;
using P.Core.Common.Meta;
using System;
using System.ComponentModel.Composition;
using System.Threading.Tasks;

namespace MarketMiner.Client.Proxies
{
   [Export(typeof(IMetadataService))]
   [PartCreationPolicy(CreationPolicy.NonShared)]
   public class MetadataClient : UserClientBase<IMetadataService>, IMetadataService
   {
      #region Operations
      public void ClearCache()
      {
         Channel.ClearCache();
      }

      public void ClearCacheItem(string key)
      {
         Channel.ClearCacheItem(key);
      }

      public void ClearCacheSets(string[] entitySets)
      {
         Channel.ClearCacheSets(entitySets);
      }

      public MetaSetting GetSetting(string type, string code, bool enabledOnly = true)
      {
         return Channel.GetSetting(type, code, enabledOnly);
      }

      public MetaSetting[] GetSettings(string type, bool enabledOnly = true)
      {
         return Channel.GetSettings(type, enabledOnly);
      }
      public MetaLookup GetLookup(string type, string code, bool enabled = true)
      {
         return Channel.GetLookup(type, code, enabled);
      }

      public MetaLookup[] GetLookups(string type, bool enabledOnly = true)
      {
         return Channel.GetLookups(type, enabledOnly);
      }

      public MetaResource GetResource(string set, string type, string key, string cultureCode = "en-US", bool enabled = true)
      {
         return Channel.GetResource(set, type, key, cultureCode, enabled);
      }

      public MetaResource[] GetResources(string set, bool enabledOnly = true)
      {
         return Channel.GetResources(set, enabledOnly);
      }

      public MetaResource[] GetResourcesByType(string set, string type, bool enabledOnly = true)
      {
         return Channel.GetResourcesByType(set, type, enabledOnly);
      }

      public MetaResource[] GetResourcesByCulture(string set, string cultureCode = "en-US", bool enabledOnly = true)
      {
         return Channel.GetResourcesByCulture(set, cultureCode, enabledOnly);
      }

      public MetaResource[] GetResourcesByTypeAndCulture(string set, string type, string cultureCode = "en-US", bool enabledOnly = true)
      {
         return Channel.GetResourcesByTypeAndCulture(set, type, cultureCode, enabledOnly);
      }
      #endregion

      #region Operations.Async
      public async Task ClearCacheAsync()
      {
         await Channel.ClearCacheAsync();
      }

      public async Task ClearCacheItemAsync(string key)
      {
         await Channel.ClearCacheItemAsync(key);
      }

      public async Task ClearCacheSetsAsync(string[] entitySets)
      {
         await Channel.ClearCacheSetsAsync(entitySets);
      }

      public async Task<MetaSetting> GetSettingAsync(string type, string code, bool enabledOnly = true)
      {
         return await Channel.GetSettingAsync(type, code, enabledOnly);
      }

      public async Task<MetaSetting[]> GetSettingsAsync(string type, bool enabledOnly = true)
      {
         return await Channel.GetSettingsAsync(type, enabledOnly);
      }

      public async Task<MetaLookup> GetLookupAsync(string type, string code, bool enabled = true)
      {
         return await Channel.GetLookupAsync(type, code, enabled);
      }

      public async Task<MetaLookup[]> GetLookupsAsync(string type, bool enabledOnly = true)
      {
         return await Channel.GetLookupsAsync(type, enabledOnly);
      }

      public async Task<MetaResource> GetResourceAsync(string set, string type, string key, string cultureCode = "en-US", bool enabled = true)
      {
         return await Channel.GetResourceAsync(set, type, key, cultureCode, enabled);
      }

      public async Task<MetaResource[]> GetResourcesAsync(string set, bool enabledOnly = true)
      {
         return await Channel.GetResourcesAsync(set, enabledOnly);
      }

      public async Task<MetaResource[]> GetResourcesByTypeAsync(string set, string type, bool enabledOnly = true)
      {
         return await Channel.GetResourcesByTypeAsync(set, type, enabledOnly);
      }

      public async Task<MetaResource[]> GetResourcesByCultureAsync(string set, string cultureCode = "en-US", bool enabledOnly = true)
      {
         return await Channel.GetResourcesByCultureAsync(set, cultureCode, enabledOnly);
      }

      public async Task<MetaResource[]> GetResourcesByTypeAndCultureAsync(string set, string type, string cultureCode = "en-US", bool enabledOnly = true)
      {
         return await Channel.GetResourcesByTypeAndCultureAsync(set, type, cultureCode, enabledOnly);
      }
      #endregion
   }
}
