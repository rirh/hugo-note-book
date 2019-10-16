const exec = require('child_process').spawn;
const git = require('simple-git')();
const CFonts = require('cfonts');

const clg = (str) => {
    CFonts.say(str, {
        font: 'block', // define the font face
        align: 'left', // define text alignment
        colors: ['#fff', '#ff8344'], // define all colors
        background: 'transparent', // define the background color, you can also use `backgroundColor` here as key
        letterSpacing: 1, // define letter spacing
        lineHeight: 1, // define the line height
        space: true, // define if the output text should have empty lines on top and on the bottom
        maxLength: '0', // define how many character can be on one line
    });
}
git
    .add('./*', () => {
        console.log('add done')
        clg('add done!')
    })
    .commit("await", () => {
        console.log('commit done')
        clg('commit done!')
    })
    .push('origin', 'master', () => {
        clg('push done!')
        console.log('push done');
        exec('ssh blog> /dev/null 2>&1 << eeooff');
        exec('cd NoteBook/');
        exec('git pull --no-edit;');

    });
