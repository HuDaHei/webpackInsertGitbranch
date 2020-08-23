class InsertGitBranch {
    constructor(options) {
        
    }
    apply(compiler) {
        console.log(compiler, "insernt")
    }
}
module.exports = InsertGitBranch