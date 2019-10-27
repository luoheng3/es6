/**
 * Created by 14486 on 2019/8/23.
 */
/*
 * promise
 *   是异步编程的一种解决方案 比传统的解决方案——回调函数和事件——更合理和更强大。
 *   可以简单的理解为一个容器,里面保存着某个未来才会结束的事件
 *   特点:
 *       对象的状态不受外界影响
 *       一旦状态改变,就不会在变,任何时候都可以得到这个结果
*/
setTimeout(()=>{
    console.log("123")
},0);
console.log("abc");
// 先输出 abc 123
// 需求 123 abc
// 这时：Promise这个为异步编程而生的对象站了出来...
new Promise((resolve,reject) => {
    // 执行异步操作
    setTimeout(() => {
        console.log(123);
        resolve('abc');
    },0)
}).then((res) => {
    console.log(res);
});  // 123 abc

// Promise的精髓是“状态” 所以使用Promise的正确场景是这样的：

runAsync1()
    .then(function(data){
        console.log(data);
        return runAsync2();
    })
    .then(function(data){
        console.log(data);
        return runAsync3();
    })
    .then(function(data){
        console.log(data);
    });
//异步任务1执行完成
//随便什么数据1
//异步任务2执行完成
//随便什么数据2
//异步任务3执行完成
//随便什么数据3

function runAsync1(){
    let p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务1执行完成');
            resolve('随便什么数据1');
        }, 1000);
    });
    return p;
}
function runAsync2(){
    let p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务2执行完成');
            resolve('随便什么数据2');
        }, 2000);
    });
    return p;
}
function runAsync3(){
    let p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务3执行完成');
            resolve('随便什么数据3');
        }, 2000);
    });
    return p;
}
// 在then方法中，你也可以直接return数据而不是Promise对象，在后面的then中也可以接收到数据：
runAsync1()
    .then(function(data){
        console.log(data);
        return runAsync2();
    })
    .then(function(data){
        console.log(data);
        return '直接返回数据';  //这里直接返回数据
    })
    .then(function(data){
        console.log(data);
    });
//异步任务1执行完成
//随便什么数据1
//异步任务2执行完成
//随便什么数据2
//直接返回数据

// Promise.resolve('data') 立即生成一个Promise对象
const p4 = Promise.resolve('Hello');

p4.then(function (s){
    console.log(s)
});
// Hello




new Promise((resolve,reject) =>{
    setTimeout(function () {
        console.log(123);
        resolve("abc");
    },13);
}).then(function (val) {
    console.log(val);
},function (err) {
    console.log(err); // 失败信息
});

// promise.all();
let p = Promise.all([new Promise((resolve,reject) =>{
    resolve("1");
}),new Promise((resolve,reject) =>{
    resolve("2");
}),new Promise((resolve,reject) =>{
    reject("33");
})]);
p.then(val =>{
    console.log(val);
},err =>{
    console.log(err);
    // 打印结果  33 123 abc
});
// Promise.race()  谁先得到结果 p的状态就是他
// Promise.resolve("123")
Promise.resolve("你好").then(val =>{
    console.log(val);
    // 打印结果 你好 33 123 abc
});
