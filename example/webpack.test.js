const path = require('path');
const InsertGitBranch = require('../dist/main.js')
const config = {
    mode: "production",
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    plugins: [
        new InsertGitBranch()
    ]
};
module.exports = config;