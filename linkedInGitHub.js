
var auth = {
  user: "USERNAME",
  pass: "PASSWORD"
};

var page = require("webpage").create();
var names = [];

page.onConsoleMessage = function(msg) {
  console.log(msg);
};

page.open("http://www.linkedin.com/people/connections", function(status) {
  if (status === "success") {
     console.log("successful");
    casper.capture("succes.png");
  } else {
     console.log("unsuccessful");
  }
});

page.

if(!casper.exists('#selector')){
   #selector doesn't exist
}