
const fs = require('fs');
const path = require('path')
const ex = ['node_modules', 'assets', '_book', '.git', 'blocks.md', 'foot.md', 'docs', 'app.js'];
const someFileChange = (filepath) => {
    fs.readdir(filepath, 'utf8', (err, files) => {
        files.forEach(e => {
            const isex = ex.some(x => x === e);
            if (!isex) {
                const url = path.join(filepath, e)
                const isdir = fs.lstatSync(url).isDirectory();
                const ismd = (str) => {
                    let result = false;
                    result = ~str.indexOf('.md');

                    return result
                }
                if (isdir) {
                    someFileChange(url)
                } else {
                    const mdfile = ismd(url);
                    if (mdfile) {
                        console.log(url);

                        fs.readFile(url, 'utf8', function (err, ofiles) {
                            // result = ofiles.replace(/"{%  extends \'../blocks.md\'  %}\n{%  block contain  %}"/g, '');
                            let linesExceptFirst = ofiles.split('\n').slice(2).join('\n');
                            linesExceptFirst = linesExceptFirst.replace(/{%  endblock  %}/g, '');
                            fs.writeFile(url, linesExceptFirst, 'utf8', function (err) {
                                if (err) return console.log(err);
                            });


                        })
                    }
                }
            }
        })
    })

}
someFileChange(__dirname)