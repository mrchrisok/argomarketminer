using System.Runtime.Serialization;

namespace MarketMiner.Common.Faults
{
   [DataContract]
   public class AuthorizationValidationFault
   {
      public AuthorizationValidationFault(string message)
      {
         Message = message;
      }

      [DataMember]
      public string Message { get; set; }
   }
}
