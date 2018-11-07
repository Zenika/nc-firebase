const fetch = require("node-fetch");

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const url = "https://twitter.com/";
const functionUrl =
  "http://localhost:5000/codelab-firebase-b1a97/us-central1/contributions";

async function call(users) {
  let stats = {};

  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const page = await fetch(`${url}${user}`);
    const body = await page.text();
    const dom = new JSDOM(body);
    const tweets = parseInt(
      dom.window.document
        .querySelector(".ProfileNav-item--tweets .ProfileNav-value")
        .getAttribute("data-count")
    );
    const followers = parseInt(
      dom.window.document
        .querySelector(".ProfileNav-item--followers .ProfileNav-value")
        .getAttribute("data-count")
    );
    const following = parseInt(
      dom.window.document
        .querySelector(".ProfileNav-item--following .ProfileNav-value")
        .getAttribute("data-count")
    );
    const likes = parseInt(
      dom.window.document
        .querySelector(".ProfileNav-item--favorites .ProfileNav-value")
        .getAttribute("data-count")
    );

    stats = {
      ...stats,
      [user]: {
        name: user,
        followers,
        following,
        tweets,
        likes
      }
    };
  }
  console.log(stats);
  fetch(functionUrl, { method: "POST", body: JSON.stringify(stats) })
    .then(res => res.json())
    .then(body => console.log(body));
}

call(["EmmanuelDemey", "AurelienLoyer"]);
