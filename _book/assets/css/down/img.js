
let Ut = require("./common");

(async () => {
    
    try {
        var pub_img_path = 'http://www.ruanyifeng.com/images_pub/';
        for (let index = 1; index < 356; index++) {
            let opts = {
                url: `${pub_img_path}pub_${index}.jpg`,
                'content-type': 'image/jpeg',
                headers: {
                    'content-type': 'image/jpeg',
                    'Referer': 'http://www.ruanyifeng.com/',
                }
            }
            let path = `img/${index}.jpg`;
            let r1 = await Ut.downImg(opts, path);
            console.log(r1==='ok'&&`下载完成:pub_${index}.jpg`);
        }
    }
    catch (e) {
        console.log(e);
    }

})()
