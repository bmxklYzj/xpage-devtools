#!/usr/bin/env node

var program = require('commander');
var spawnSync = require('child_process').spawnSync;
var path = require('path');

program
    .version(require('../package').version)
    .usage('block <block-name>');

program.on('--help', function () {
    console.log('Example:');
    console.log('');
    console.log('   # generate new block from github template');
    console.log('   xpage init block my-block');
    console.log('');
});

program.parse(process.argv);
if (program.args.length < 2) {
    return program.help();
}

var dirPath = path.join('src', 'materials', 'blocks') + '$';
if (!(new RegExp(dirPath)).test(process.cwd())) {
    console.log('Please go to src/materials/blocks to init a block');
    process.exit(1);
}

var myScript = `vue init bmxklYzj/xpage-block-template ${program.args[1]}`;
spawnSync('sh', ['-c', myScript], {stdio: 'inherit', stdin: 'inherit'});
