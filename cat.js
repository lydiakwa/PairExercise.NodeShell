const fs = require("fs");

module.exports.cat = function () {
  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim().split(" ");
    console.log(cmd);
    if (cmd[0] === "cat") {
      fs.readFile(cmd[1], "utf8", (err, text) => {
        if (err) {
          throw err;
        } else {
          process.stdout.write(text);
          process.stdout.write("\nprompt > ");
        }
      });
    }
  });
};