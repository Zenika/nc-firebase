const functions = require("firebase-functions");

exports.contributions = functions.https.onRequest((request, response) => {
  const result = {
    date: new Date(),
    user: request.query.user,
    tweets: parseInt(request.query.tweets),
    followers: parseInt(request.query.followers),
    following: parseInt(request.query.following)
  };
  response.json(result);
});
