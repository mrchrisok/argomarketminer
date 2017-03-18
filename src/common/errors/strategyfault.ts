using System.Runtime.Serialization;

namespace MarketMiner.Common.Faults
{
   [DataContract]
   public class StrategyFault
   {
      public StrategyFault(string message)
      {
         Message = message;
      }

      [DataMember]
      public string Message { get; set; }
   }
}
