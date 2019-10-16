const spawn = require('child_process').spawn;

const asyncGit = async () => {
    return new Promise((rsolve, reject) => {
        const git = require('simple-git')();
        git.add('./*')
            .commit("await")
            .push('origin', 'master', () => {
                console.log('done')
            });
    })

};
asyncGit();