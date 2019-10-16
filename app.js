const spawn = require('child_process').spawn;

const asyncGit = async () => {

};
require('simple-git')()
     .init()
     .add('./*')
     .commit("await")
     .push('origin', 'master');