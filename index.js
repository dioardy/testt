const writeJSON = () => {
    const fs = require('fs');

    fs.writeFile("/tmp/test", "Hey there!", function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
};

const createDirectoryIfNotExists = () => {
    var fs = require('fs');
    var dir = './tmp';

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
};

module.exports = {
    // Do not modify the names of the exports
    writeJSON: writeJSON,
    createDirectoryIfNotExists: createDirectoryIfNotExists
};
