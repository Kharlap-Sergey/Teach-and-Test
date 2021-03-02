using System.Threading.Tasks;

namespace TeachAndTest.Worker
{
    public interface IEmailService
    {
        public Task SendMailAsync(string email, string subject, string message);

    }
}
