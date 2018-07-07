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

require('child_process').exec('vue -V', function (err, cb) {
    if (err) {
        console.log('You may not have installed "vue-cli", use `npm i -g vue-cli`');
        process.exit(1);
    }
});

var dirPath = path.join('src', 'materials', 'blocks');
if (process.cwd().lastIndexOf(dirPath) !== (process.cwd().length - dirPath.length)) {
    console.log('Please go to src/materials/blocks to init a block');
    process.exit(1);
}

var myScript = `vue init bmxklYzj/xpage-block-template ${program.args[1]}`;
spawnSync('sh', ['-c', myScript], {stdio: 'inherit', stdin: 'inherit'});
