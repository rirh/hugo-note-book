#!/usr/bin/env node
const { exec } = require('shelljs');
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
    })
    .commit("await", () => {
        console.log('commit done')
    })
    .push('origin', 'master', () => {
        exec(`
        ssh blog> /dev/null 2>&1 << eeooff
        cd NoteBook/;
        git fetch --all;
        git reset --hard origin/master;
        git pull;
        `);
        clg('push done!')
        console.log('push done');
        exec('say push done');
    });
