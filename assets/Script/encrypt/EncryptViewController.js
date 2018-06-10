// Learn

//使用npm库文件npm install --save js-base64
const Base64 = require('js-base64').Base64;

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        this._base64Demo();

    },


    _base64Demo()
    {
        let name = "cesclong";
        name = Base64.encode(name);
        cc.sys.localStorage.setItem('name', name);

        console.log(`local storage :${cc.sys.localStorage.getItem('name')}`);
        console.log(`local storage decode:${Base64.decode(cc.sys.localStorage.getItem('name'))}`);

        // let str1 = Base64.encode('dankogai');  // ZGFua29nYWk=
        // console.log(`encrypt:${str1}`);
        // let nameCrypt = Base64.encode('我的芬宝宝');
        // console.log(`encode:${nameCrypt}`);
        // let decodeStr = Base64.decode(nameCrypt);
        // console.log(`decode:${decodeStr}`);
        // Base64.encode('小飼弾');    // 5bCP6aO85by+
        // Base64.encodeURI('小飼弾'); // 5bCP6aO85by-

        // console.log(`decode:${Base64.decode('ZGFua29nYWk=')}`)

    },

    start () {

    },


});
