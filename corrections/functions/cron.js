const fetch = require("node-fetch");

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const url = "https://twitter.com/";
const functionUrl =
  "https://us-central1-codelab-firebase-b1a97.cloudfunctions.net/contributions";

async function call(user) {
  const page = await fetch(`${url}${user}`);
  const body = await page.text();
  const dom = new JSDOM(body);
  const tweets = dom.window.document
    .querySelector(".ProfileNav-item--tweets .ProfileNav-value")
    .getAttribute("data-count");
  const followers = dom.window.document
    .querySelector(".ProfileNav-item--followers .ProfileNav-value")
    .getAttribute("data-count");
  const following = dom.window.document
    .querySelector(".ProfileNav-item--following .ProfileNav-value")
    .getAttribute("data-count");
  console.log(
    `${functionUrl}?user=${user}&tweets=${tweets}&followers=${followers}&following=${following}`
  );
  /* fetch(
    `${functionUrl}?user=${user}&tweets=${tweets}&followers=${followers}&following=${following}`
  )
    .then(res => res.json())
    .then(body => console.log(body)); */
}

call(process.argv[2]);
