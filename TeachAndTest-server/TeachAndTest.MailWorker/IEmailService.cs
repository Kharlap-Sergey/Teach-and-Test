using System.Threading.Tasks;

namespace TeachAndTest.Worker
{
    public interface IEmailService
    {
        public Task SendNotificationAsync(string email, string subject, string message);

    }
}
