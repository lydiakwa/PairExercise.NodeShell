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

require("./pwd").pwd();
require("./ls").ls();

require("./cat").cat();

require("./curl").curl();
