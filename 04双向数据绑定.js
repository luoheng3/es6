/*
Created by 14486 on 2019/8/23.
*/
// 创建虚拟DOM
function Vue(obj) {
    Vue.vm = this;
    this.el = document.getElementById(obj.el.slice(1));
    this.data = this.proxyData(obj.data);
    this.init();
    for (var key in obj.data){
        this.data[key] = obj.data[key];
    }
}
Vue.prototype = {
    constructor: Vue,
    proxyData (obj) {
        return new Proxy(obj,{
            set(target,key,value){
                for (var i = 0,length = Vue.vm._value.length; i < length; i++) {
                    if(Vue.vm._value[i].getAttribute(":value") === key){
                        Vue.vm._value[i]._value = value;
                    }
                }
                for (var j = 0,length = Vue.vm._text.length; j < length; j++) {
                    if(Vue.vm._text[j].getAttribute(":text") === key){
                        Vue.vm._text[j]._text = value;
                    }
                }
            }
        })
    },
    init (){
        // 存储所有子节点;
        let _ele = [];
        // 绑定value属性的
        this._value = [];
        // 绑定 text属性的
        this._text = [];
        element(this.el);
        // 获取根标签下面所有的子节点;
        function element(el) {
            let child = el.children;
            for (var i = 0,length = child.length; i < length; i++) {
                _ele.push(child[i]);
                // 这时候我们还需要确定 child[i]里面是否还有子节点
                if(child[i].children.length !== 0){
                    element(child[i]);
                }
            }
        }
        getEle.call(this,_ele);
        function getEle(ele) {
            for (var i = 0,length = ele.length; i < length; i++) {
                // 获取每个节点所有的属性集合
                var attrs = ele[i].attributes;
                for (var j = 0,len = attrs.length; j < len; j++) {
                    // attrs[j].nodeName 获取属性
                    // attrs[j].nodeValue 获取属性值
                    var attr = attrs[j].nodeName;
                    if(/^:/.test(attr)){
                        this["_"+ attr.slice(1)].push(ele[i]);
                    }
                }
            }
        }
        changeValue(this._value);
        function changeValue(el) {
            for (var i = 0,length = el.length; i < length; i++) {
                el[i].addEventListener("input",function () {
                    Vue.vm.data[this.getAttribute(":value")] = this.value;
                })
            }
        }
    }
    
};

let app = new Vue({
    el: "#app",
    data: {
        name:"罗恒"
    }
});