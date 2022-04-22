const fs = require("fs");

module.exports.ls = function (done) {
  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
    if (cmd === "ls") {
      fs.readdir("./", "utf8", (err, files) => {
        if (err) {
          throw err;
        } else {
          done(files.join("\n"));
        }
      });
    }
  });
};
