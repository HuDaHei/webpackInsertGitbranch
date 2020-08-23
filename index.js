const fs = require('fs')
fs.readdir('.git', (err, files) => {
    if( err ) throw err;
    console.log(files)
})