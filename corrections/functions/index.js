const functions = require("firebase-functions");
// const admin = require("firebase-admin");

// admin.initializeApp({
//   apiKey: "AIzaSyAyswipt7emld9bASpnernA7F6mKRm7xpY",
//   authDomain: "codelab-firebase-b1a97.firebaseapp.com",
//   databaseURL: "https://codelab-firebase-b1a97.firebaseio.com",
//   projectId: "codelab-firebase-b1a97",
//   storageBucket: "codelab-firebase-b1a97.appspot.com",
//   messagingSenderId: "918664590933"
// });
exports.contributions = functions.https.onRequest((request, response) => {
  const result = {
    timestamp: new Date(),
    twitters: JSON.parse(request.body)
  };
  // admin
  //   .firestore()
  //   .collection("stats")
  //   .add(result);

  response.json(result);
});
