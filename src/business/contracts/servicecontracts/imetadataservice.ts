   // [ServiceContract]
   export interface IMetadataService
   {
      // [OperationContract]
      // [FaultContract(typeof(NotFoundFault))]
      // [FaultContract(typeof(AuthorizationValidationFault))]
      ClearCache(): void;

      // [OperationContract]
      // [FaultContract(typeof(NotFoundFault))]
      // [FaultContract(typeof(AuthorizationValidationFault))]
      ClearCacheItem(key: string): void;

      // [OperationContract]
      // [FaultContract(typeof(NotFoundFault))]
      // [FaultContract(typeof(AuthorizationValidationFault))]
      ClearCacheSets(entitySets: string[]): void;

      // [OperationContract]
      // [FaultContract(typeof(NotFoundFault))]
      // [FaultContract(typeof(AuthorizationValidationFault))]
       GetSetting(type: string, code: string, enabledOnly: boolean): MetaSetting;

      // [OperationContract]
      // [FaultContract(typeof(NotFoundFault))]
      // [FaultContract(typeof(AuthorizationValidationFault))]
      GetSettings(type: string, enabledOnly: boolean): MetaSetting[];

      // [OperationContract]
      // [FaultContract(typeof(NotFoundFault))]
      // [FaultContract(typeof(AuthorizationValidationFault))]
      GetLookup(string type :string, string code, bool enabled = true): MetaLookup;

      // [OperationContract]
      // [FaultContract(typeof(AuthorizationValidationFault))]
      MetaLookup[] GetLookups(string type, bool enabledOnly = true);

      // [OperationContract]
      // [FaultContract(typeof(NotFoundFault))]
      // [FaultContract(typeof(AuthorizationValidationFault))]
      MetaResource GetResource(string set, string type, string key, string cultureCode = "en-US", bool enabled = true);

      // [OperationContract]
      // [FaultContract(typeof(AuthorizationValidationFault))]
      MetaResource[] GetResources(string set, bool enabledOnly = true);

      // [OperationContract]
      // [FaultContract(typeof(AuthorizationValidationFault))]
      MetaResource[] GetResourcesByType(string set, string type, bool enabledOnly = true);

      // [OperationContract]
      // [FaultContract(typeof(AuthorizationValidationFault))]
      MetaResource[] GetResourcesByCulture(string set, string cultureCode = "en-US", bool enabledOnly = true);

      // [OperationContract]
      // [FaultContract(typeof(AuthorizationValidationFault))]
      MetaResource[] GetResourcesByTypeAndCulture(string set, string type, string cultureCode = "en-US", bool enabledOnly = true);
   }
}
