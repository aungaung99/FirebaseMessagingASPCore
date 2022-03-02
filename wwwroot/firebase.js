firebase.initializeApp({
    apiKey: "AIzaSyDQs51qqcp_v2nd-FizNad3jA_cDCgt0T8",
    authDomain: "testfirebasenoti-a8fff.firebaseapp.com",
    projectId: "testfirebasenoti-a8fff",
    storageBucket: "testfirebasenoti-a8fff.appspot.com",
    messagingSenderId: "103338253557",
    appId: "1:103338253557:web:7efcb9662ca6be08f3b9bc",
    measurementId: "G-1WD96HTRK1"
});
// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

Notification.requestPermission().then(function (permission) {
	if (permission == "granted") {
        console.log('Notification Permission Granted');
        getDeviceToken();
	}
	else if (permission == "denied") {
		console.log('Notification Permission Denied');
	}
}).catch(function (err) { });

function getDeviceToken() {
    // Get registration token. Initially this makes a network call, once retrieved
    // subsequent calls to getToken will return from cache.
    messaging.getToken({ vapidKey: 'BH35UnsNCVCTpQhvjAAMYUfahPKRpwC0LyQwbAPAIqsk1oykxgS0hikxrME7vqp5Q5XwhHKxxHXU3ixnUwdhZgc' }).then((currentToken) => {
        if (currentToken) {
            // Send the token to your server and update the UI if necessary
            console.log(currentToken);
        } else {
            // Show permission request UI
            console.log('No registration token available. Request permission to generate one.');
            // ...
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
    });
}

messaging.onMessage((payload) => {
    console.log('Message received. ', payload);
    const title = JSON.parse(JSON.stringify(payload)).notification.title;
    const body = JSON.parse(JSON.stringify(payload)).notification.body;
    document.getElementById('exampleModalLabel').innerHTML = title;
    document.getElementById('exampleModalText').innerHTML = body;
    $('#exampleModal').modal('show');
    // ...
});