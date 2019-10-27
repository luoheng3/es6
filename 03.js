/*
Created by 14486 on 2019/8/23.
     es5取数组最大值: Math.max.apply(null,arr)  es6: Math.max(...arr);
     3: Array.from()  将类数组转化为数组
     4: Array.of() 创建数组
     5:arr.copyWithIn("开始填充的位置","从哪里开始",结束)
     6: arr.find(function(value,index,arr){}) 返回第一个满足条件的值
     7: arr.findIndex()
     8: for(var key of arr){console.log(key就是arr的值);}
     arr.keys 那么key就是下标  arr.entries key = [index,val] 打印
 */
// 数组的扩展

// 1: 扩展运算符 ... 不在函数里面 就要有个数组结构
let arr1 = [1,2,3];
let arr2 = [5,6,7];
console.log(...arr1);   // 1 2 3
console.log( [...arr1] ); // [1,2,3]

//2: 数组合并
let arr3 = [...arr1,...arr2];
console.log(arr3); // [1,2,3,5,6,7]

// 对象的扩展
/*
对象的简洁表示法
    let a = "hello";
    let json = {
        a:a, // 当属性名和变量名一样的时候可以简写 a,
        fn:function () {
    },
 // 简写
 fn1 () {}
 }
 Object.is(NaN,NaN) true 相当于 ===
 Object.assign(obj1,obj2) 合并对象obj1上 合并对象 相同属性的后面覆盖前面
 Object.keys(obj) 返回一个数组 将对象上所有的属性放入一个数组
 Object.keys({a:1,b:2})  key = [a,b];
 Object.values()
 Object.entries() 与上面相同

 */
let a = "hello";
let json1 = {
    a:a, // 当属性名和变量名一样的时候可以简写 a,
    fn:function () {

    },
    // 简写
    fn1 () {}
};
var json2 = {
    a:[1,2],
    b:{
        c:1
    },
    c:function () {
    }
};
// 如果对象里面没有函数的话可以这样简单快捷
let obj1 = JSON.parse(JSON.stringify(json));
//
var extend = function (obj,deep) {
    // 判断传进来的是数组还是json
    var o;
    o = (obj instanceof Array) ?[]:{};
    for (var key in obj){
        var val = obj[key];
        if(deep && (typeof val === "object")){
            o[key] = extend(val,deep);
        }else{
            o[key] = val;
        }
    }
    return o;
};
var ob = extend(json,true);
ob.a.push(3);
console.log(ob,json);