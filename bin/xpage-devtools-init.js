#!/usr/bin/env node

var program = require('commander');
var spawnSync = require('child_process').spawnSync;

program
    .version(require('../package').version)
    .usage('<block-name>');

program.on('--help', function () {
    console.log('Example:');
    console.log('   # generate new block from github template');
    console.log('   xpage-devtools init my-block');
    console.log('');
});

program.parse(process.argv);
if (program.args.length < 1) {
    return program.help();
}

if (!/src\/materials\/blocks$/.test(process.cwd())) {
    console.log('Please go to src/materials/blocks to init a block');
    process.exit(1);
}

var myScript = `vue init bmxklYzj/template-test ${program.args[0]}`;
spawnSync('sh', ['-c', myScript], {stdio: 'inherit', stdin: 'inherit'});
