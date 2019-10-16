const spawn = require('child_process').spawn;

const asyncGit = async () => {

};
require('simple-git')()
     .init()
     .add('./*')
     .commit("first commit!")
     .addRemote('origin', 'https://github.com/Ctleryes/NoteBook.git')
     .push('origin', 'master');