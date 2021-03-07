// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");
exports.firebase = firebase;

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
 var firebaseConfig = {
    apiKey: "AIzaSyCWiPUe-0xaDRUI1oT4jPi3ZWqyvd4k8t8",
    authDomain: "oral-capabilities.firebaseapp.com",
    projectId: "oral-capabilities",
    storageBucket: "oral-capabilities.appspot.com",
    messagingSenderId: "130456476055",
    appId: "1:130456476055:web:5221e827cf63ce9644ccd2"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);