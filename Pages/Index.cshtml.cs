using FirebaseAdmin.Messaging;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirebaseMessagingASPCore.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;
        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }

        public async Task OnPostAsync()
        {
            await SendNotification();
        }

        public async Task SendNotification()
        {
            // This registration token comes from the client FCM SDKs.
            var registrationToken = "cGFAV2VzxUrcthLA6X5fLr:APA91bHVkY9kPHSyCkzBOvm1jka1LBCCl_7XKeHN6mtJ-7sIWObwUC0cSUSBimVYAFNNPjJMrjIYNEKEDzbJqn86-TUzQ9CHd8CLEdemqOujUf5nmWrfWLaQfYBm_0NN7Yhhux_ZvZ6O";

            // See documentation on defining a message payload.
            var message = new Message()
            {
                Notification = new Notification()
                {
                    Title = "ASP.Net Core 5.0",
                    Body = "Firebase Messaging Notification",
                },
                Topic="all"
                //Token = registrationToken,
            };

            // Send a message to the device corresponding to the provided
            // registration token.
            string response = await FirebaseMessaging.DefaultInstance.SendAsync(message);
            // Response is a message ID string.
            Console.WriteLine("Successfully sent message: " + response);
        }
    }
}
