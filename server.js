// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

// our default array of dreams
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// make all the files in 'public' available
// https://expressjs.com/en/stares,rter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html

app.get('/invite', async (req, res) => {
res.redirect('https://discord.com/api/oauth2/authorize?client_id=782197715098009609&permissions=8&redirect_uri=https%3A%2F%2Fxfos.glitch.me%2F&response_type=code&scope=bot%20email')
});

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/cmd", (request, response) => {
  response.sendFile(__dirname + "/commands.html");
});

app.get("/cmd/nsfw", (request, response) => {
  response.sendFile(__dirname + "/nsfw.html")
})

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
