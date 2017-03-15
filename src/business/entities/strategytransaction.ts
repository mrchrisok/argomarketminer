using MarketMiner.Common.Contracts;
using N.Core.Common.Core;
using P.Core.Common.Contracts;
using System;
using System.Runtime.Serialization;

namespace MarketMiner.Business.Entities
{
   [DataContract]
   public class StrategyTransaction : EntityBase, IIdentifiableEntity, ITransaction
   {
      [DataMember]
      public int StrategyTransactionID { get; set; }
      [DataMember]
      public int StrategyID { get; set; }
      [DataMember]
      public int BrokerID { get; set; }
      [DataMember]
      public string AccountID { get; set; }
      [DataMember]
      public string BrokerTransactionID { get; set; }
      [DataMember]
      public string BrokerOrderID { get; set; }
      [DataMember]
      public string BrokerTradeID { get; set; }
      [DataMember]
      public string Instrument { get; set; }
      [DataMember]
      public string Type { get; set; }
      [DataMember]
      public DateTime? Time { get; set; }
      [DataMember]
      public string Side { get; set; }
      [DataMember]
      public double Price { get; set; }
      [DataMember]
      public double? TakeProfit { get; set; }
      [DataMember]
      public double? StopLoss { get; set; }

      public virtual Strategy Strategy { get; set; }
      public virtual Broker Broker { get; set; }

      #region Members.IIdentifiableEntity
      int IIdentifiableEntity.EntityID
      {
         get { return StrategyTransactionID; }
         set { StrategyTransactionID = value; }
      }
      #endregion
   }
}
