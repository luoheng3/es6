/*
Created by 14486 on 2019/10/26.
 Module 模块
 ES6的模块自动采用严格模式  (不管你有没有加 "use strict")
    功能: 主要由两个命令构成
    export 模块的导出 (让其他模块可以用里面的功能)
        导出的值是动态的,可以实时获取到改变后的值;
        import 用于输入其他模块提供的功能
        import obj from "./06.js"  => export default
        import {num1,num2} from "./06.js" export function foo(){} 这样结构赋值;
    一个模块就是一个独立的文件,改文件内部的所有变量, 外部无法获取;
    common.js 执行到才会加载  同步加载
    AMD       异步加载 (现阶段作为了解)
 */
// 不能直接 export json; export 后面不能是一个值
export let json = {
    name: "罗恒",
    age: 25
};
export default {
    "name": "范雨菲"
}
// 面试题 统计一个字符串出现字符最多的字符的出现次数

var str = "hfahfuhznjvnauehfiudsjkvnwehnfuoi";
function fn(str) {
    var num = 0;
    var arr = str.split("");
    var obj = arr.reduce(function (a,b) {
        a[b]++ || (a[b] =1);
        return a
    },{});
}
fn(str);
function fn1(str) {
    var arr = str.split("");
    var obj = {};
    arr.forEach(function (val) {
        !obj[val] && (obj[val] = 1,1) || obj[val]++;
    });
    var num = 0;
    var res = "";
    for (var key in obj){
        if(obj[key] >=num){
            num = obj[key];
            res = key;
        }
    }
    return "出现最多的字符是"+res+"出现次数为"+num;
}