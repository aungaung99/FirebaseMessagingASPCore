console.log('ON backgrouond');

importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');
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

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    //const notificationTitle = 'Background Message Title';
    //const notificationOptions = {
    //    body: 'Background Message body.',
    //    icon: '/firebase-logo.png'
    //};

    //self.registration.showNotification(notificationTitle,
    //    notificationOptions);
});