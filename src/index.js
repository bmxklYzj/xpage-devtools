#!/usr/bin/env node

'use strict';
var spawnSync = require('child_process').spawnSync;
var path = require('path');

var userParams = process.argv.slice(2);

if (userParams[0] === 'init' && userParams[1] === 'block' && userParams[2]) {
    if (!/src\/materials\/blocks$/.test(process.cwd())) {
        console.log('Please go to src/materials/blocks to init a block');
        process.exit(1);
    }

    var myScript = `vue init bmxklYzj/template-test ${userParams[2]}`;
    spawnSync('sh', ['-c', myScript], {stdio: 'inherit', stdin: 'inherit'});
}
else {
    console.log('Command is wrong.');
    process.exit(1);
}