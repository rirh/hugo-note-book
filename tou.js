const fs = require('fs');
const path = require('path');
const request = require('request');
const url = 'https://v2.jinrishici.com/one.json?client=mini-progrram-sdk/1.0';

const AR = {
    content: [],
    file: path.join(__dirname, 'test.json'),
    axios: function () {
        return new Promise((reslove, reject) => {
            request({
                method: 'GET',
                url,
                headers: {
                    'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
                    'content-type': 'application/json;charset=UTF-8;q=0.8',
                    'date': new Date(),
                    // 'cookie': 'X-User-Token=Vjss1/liI2/XQ+tevC04GB2AvJ4IPJWG',
                    // 'accept-encoding':'gzip, deflate, br',
                    'accept-language':'zh-CN,zh;q=0.9,en;q=0.8,de;q=0.7',
                    'cache-control':'max-age=0',
                    'sec-fetch-mode':'navigate',
                    'X-User-Token':'Vjss1/liI2/XQ+tevC04GB2AvJ4IPJWG'
                    // ':authority': 'v2.jinrishici.com',
                    // ':path': '/one.json?client=browser-sdk/1.2&X-User-Token=Vjss1%2FliI2%2FXQ%2BtevC04GB2AvJ4IPJWG',
                    // ':method': 'GET',
                    // ':scheme': 'https'
                }

            }, function (err, res, data) {
                if (err) reject(err);
                // console.log(data);
                reslove(data);

            });

        })
    },
    do_tou: async function () {
        var i = 0;
        const read = () => {
            fs.readFile(this.file, async (err, res) => {
                if (err) reject(err);
                var shiju = res.toString();
                shiju = JSON.parse(shiju);
                var total = shiju.length;
                const data = await this.axios();
                const con = JSON.parse(data);
                const do_con = con.data.content;
                const is_alive = shiju.some(e => e === con);
                console.log(is_alive);
                
                if (!is_alive) {
                    shiju.push(do_con);
                    console.log(con);
                    console.log(do_con);
                    console.log(total);
                };


                fs.writeFile(this.file, JSON.stringify(shiju), function (err) {
                    if (err) {
                        return console.log(err);
                    }
                    i++;
                    setTimeout(() => {
                        if (i < 1000) read();
                    }, 1000)
                });

            })
        }
        read();
    },
    uniq: function () {
        const data = require('./test.json');
        console.log(Array.from(new Set(data)).length);
        fs.writeFile(this.file, JSON.stringify(Array.from(new Set(data))), function () { });
    }
}
AR.uniq();
// AR.do_tou()


