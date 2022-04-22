module.exports.pwd = function (done) {
  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
    if (cmd === "pwd") {
      done(process.cwd());
    }
  });
};
