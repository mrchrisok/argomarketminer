using System.Runtime.Serialization;

namespace MarketMiner.Common.Faults
{
   [DataContract]
   public class FundFault
   {
      public FundFault(string message)
      {
         Message = message;
      }

      [DataMember]
      public string Message { get; set; }
   }
}
