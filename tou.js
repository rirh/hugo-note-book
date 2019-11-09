const fs = require('fs');
const path = require('path');
const request = require('request');
const url = 'https://v2.jinrishici.com/one.json?client=browser-sdk/1.2&X-User-Token=Vjss1%2FliI2%2FXQ%2BtevC04GB2AvJ4IPJWG';
var file = path.join(__dirname, 'test.json');
const data = require('./test.json');
// console.log(JSON.stringify(Array.from(new Set(data))));
// fs.writeFile(file,JSON.stringify(Array.from(new Set(data))),function(){});

// 发送Get请求
// 第一个参数:请求的完整URL,包括参数
// 第二个参数:请求结果回调函数,会传入3个参数,第一个错误,第二个响应对象,第三个请求数据
var content = [];
function axios() {
    return new Promise((reslove, reject) => {

        request(url, function (err, res, data) {
            if (err) reject(err);
            reslove(data);
        });

    })
};
async function do_tou() {
    var i = 0;
    const read = () => {
        fs.readFile(file, async function (err, res) {
            if (err) reject(err);
            var shiju = res.toString();
            shiju = JSON.parse(shiju);
            var total = shiju.length;
            const data = await axios();
            const con = JSON.parse(data);
            const do_con = con.data.content;
            shiju.push(do_con);
            console.log(do_con);
            console.log(total);
            fs.writeFile(file, JSON.stringify(shiju), function (err) {
                if (err) {
                    return console.log(err);
                }
                i++;
                setTimeout(() => {
                    if (i < 1000) read();
                }, 400)
            });

        })
    }
    read();
}
// do_tou()




