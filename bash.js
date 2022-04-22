process.stdout.write("prompt > ");

// process.stdin.on('data', (data) => {
//   const cmd = data.toString().trim();

//   process.stdout.write('You typed: ' + cmd);
//   process.stdout.write('\nprompt > ')
// })

// const exportsObj = require('./pwd')
// exportsObj.pwd();

// const exportsObj = require('./ls')
// exportsObj.ls();

function done(output) {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
}

require("./pwd").pwd(done);
require("./ls").ls(done);

require("./cat").cat(done);

require("./curl").curl(done);
