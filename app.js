const spawn = require('child_process').spawn;

const asyncGit = async () => {
    return new Promise((rsolve, reject) => {
        const git = require('simple-git')();
        git.add('./*', () => {
            console.log('add done')
        })
            .commit("await", () => {
                console.log('commit done')

            })
            .push('origin', 'master', () => {
                console.log('push done')

            });
    })

};
asyncGit();