const fetch = require("node-fetch");
const admin = require("firebase-admin");

admin.initializeApp({
  apiKey: "AIzaSyAyswipt7emld9bASpnernA7F6mKRm7xpY",
  authDomain: "codelab-firebase-b1a97.firebaseapp.com",
  databaseURL: "https://codelab-firebase-b1a97.firebaseio.com",
  projectId: "codelab-firebase-b1a97",
  storageBucket: "codelab-firebase-b1a97.appspot.com",
  messagingSenderId: "918664590933"
});

admin
  .firestore()
  .collection("accounts")
  .get()
  .then(snapshots => {
    const accounts = [];
    snapshots.forEach(data => accounts.push(data.data().handle));
    console.log(accounts);
  });
