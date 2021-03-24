using MimeKit;
using MailKit.Net.Smtp;
using System.Threading.Tasks;
using TeachAndTest.BusinessLogic;
using Google.Apis.Auth.OAuth2;
using System.IO;
using Google.Apis.Gmail.v1;
using System.Threading;
using Google.Apis.Util.Store;
using Google.Apis.Services;
using Google.Apis.Gmail.v1.Data;
using System.Buffers.Text;
using System.Net.Mail;
using SmtpClient = System.Net.Mail.SmtpClient;
using System.Net;

namespace TeachAndTest.Worker
{
    [ServiceImplementationAttribute(typeof(IEmailService))]
    public class GmailService : IEmailService
    {
        public async Task SendMailAsync(string email, string subject, string body)
        {
            //ToDo security
            var fromAddress = new MailAddress("sergeygoodgood@gmail.com", "Teach&Test");
            var toAddress = new MailAddress(email, "confirm");
            const string fromPassword = "seR1686386serGGe";

            var smtp = new SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                Credentials = new NetworkCredential(fromAddress.Address, fromPassword),
                Timeout = 20000
            };
            using(var message = new MailMessage(fromAddress, toAddress)
            {
                Subject = subject,
                Body = body
            })
            {
                smtp.Send(message);
            }
        }
    }
}
