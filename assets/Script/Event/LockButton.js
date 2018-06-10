// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

/**
 * 拦截button点击事件
 */
cc.Class({
    extends: cc.Component,

    properties: {
        buttonGroup : cc.Node

    },

    // LIFE-CYCLE CALLBACKS:

    lockButtonGroup()
    {
        cc.eventManager.pauseTarget(this.buttonGroup, true);//true 是否递归子节点
    },

    unlockButtonGroup()
    {
        cc.eventManager.resumeTarget(this.buttonGroup, true);
    },

    button1()
    {
        console.log('button 1');
    },

    button2()
    {
        console.log('button 2');
    },

    onLoad () {



    },

    start () {

    },

    // update (dt) {},
});
