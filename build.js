var fs = require('fs');
var childProcess = require('child_process');

try {
    fs.mkdirSync('./bin');
} catch(e) {
    if ( e.code !== 'EEXIST' ) throw e;
}

childProcess.execSync('gcc force_direct.c -o ./bin/force_direct -lm -O3 -std=gnu99');