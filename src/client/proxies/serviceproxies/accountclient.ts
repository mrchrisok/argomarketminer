using N.Core.Common.ServiceModel;
using System.ComponentModel.Composition;
using System.Threading.Tasks;
using MarketMiner.Client.Entities;
using MarketMiner.Client.Contracts;

namespace MarketMiner.Client.Proxies
{
   [Export(typeof(IAccountService))]  // MefDI: interface mapping
   [PartCreationPolicy(CreationPolicy.NonShared)] // MEfDI: non-singleton
   public class AccountClient : UserClientBase<IAccountService>, IAccountService
   {
      #region Operations
      public Account GetAccount(string loginEmail)
      {
         return Channel.GetAccount(loginEmail);
      }

      public Account UpdateAccount(Account account)
      {
         return Channel.UpdateAccount(account);
      }
      #endregion

      #region Operations.Async
      public Task<Account> GetAccountAsync(string loginEmail)
      {
         return Channel.GetAccountAsync(loginEmail);
      }

      public Task<Account> UpdateAccountAsync(Account account)
      {
         return Channel.UpdateAccountAsync(account);
      }
      #endregion
   }
}
