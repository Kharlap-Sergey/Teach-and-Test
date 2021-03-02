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

namespace TeachAndTest.Worker
{
    [ServiceImplementationAttribute(typeof(IEmailService))]
    public class GmailService : IEmailService
    {
        const string ApplicationName = "Teach-and-Test";
        static string[] Scopes = { Google.Apis.Gmail.v1.GmailService.Scope.GmailReadonly };
        public async Task SendNotificationAsync(string email, string subject, string message)
        {
            UserCredential credential;

            using(var stream =
                new FileStream("credentials.json", FileMode.Open, FileAccess.Read))
            {
                // The file token.json stores the user's access and refresh tokens, and is created
                // automatically when the authorization flow completes for the first time.
                string credPath = "token.json";
                credential = GoogleWebAuthorizationBroker.AuthorizeAsync(
                    GoogleClientSecrets.Load(stream).Secrets,
                    Scopes,
                    "user",
                    CancellationToken.None,
                    new FileDataStore(credPath, true)).Result;
            }

            // Create Gmail API service.
            var service = new Google.Apis.Gmail.v1.GmailService(new BaseClientService.Initializer()
            {
                HttpClientInitializer = credential,
                ApplicationName = ApplicationName,
            });

            // Define parameters of request.
            //UsersResource.LabelsResource.ListRequest request = service.Users.Labels.List("me");

           

            var emailMessage = new MimeMessage();

            emailMessage.From.Add(new MailboxAddress("Администрация сайта", "sergeygoodgood@gmail.com"));
            emailMessage.To.Add(new MailboxAddress("", email));
            emailMessage.Subject = subject;
            emailMessage.Body = new TextPart(MimeKit.Text.TextFormat.Html)
            {
                Text = message
            };

            var gmailMessage = new Message();
            gmailMessage.Snippet = "hello";
            service.Users.Messages.Send(gmailMessage, email);
            //using(var client = new SmtpClient())
            //{
            //    await client.ConnectAsync("smtp.gmail.com", 587);
            //    await client.AuthenticateAsync("sergeygoodgood@gmail.com", "seR1686386serGGe");
            //    await client.SendAsync(emailMessage);

            //    await client.DisconnectAsync(true);
            //}
        }
    }
}
