const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const app = express();
app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", (req, res) => {
  const emailAddress = req.body.email;
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const data = {
    members: [
      {
        email_address: emailAddress,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };
  const jsonData = JSON.stringify(data);
  const url = "https://us17.api.mailchimp.com/3.0/lists/b5aabe843f";

  const options = {
    method: "POST",
    auth: "mahesh1:ed38d49cff22e7315811a07edd1bd0ed-us17",
  };
  const request = https.request(url, options, function (response) {
    response.on("data", function (data) {
      if (response.statusCode === 200) {
        res.sendFile(__dirname + "/success.html");
      } else {
        res.sendFile(__dirname + "/failure.html");
      }
    });
  });
  request.write(jsonData);
  request.end();
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, function (res) {
  console.log(`The port is running at ${PORT}`);
});

// api key
// ed38d49cff22e7315811a07edd1bd0ed-us17
//unique id
//b5aabe843f
