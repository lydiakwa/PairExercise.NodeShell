const request = require("request");

module.exports.curl = function () {
  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim().split(" ");
    if (cmd[0] === "curl") {
      request(cmd[1], function (err, response, body) {
        if (err) {
          throw err;
        } else {
          process.stdout.write(body);
          process.stdout.write("\nprompt > ");
        }
      });
    }
  });
};

/* const request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
}); */
