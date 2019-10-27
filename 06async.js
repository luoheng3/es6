/*
Created by 14486 on 2019/8/23.
    async函数,使得异步操作变得更加方便
    async函数的执行与普通函数一模一样 只需要在前面加上 async就行了;
        async 表示函数里面有异步操作
        await 表示紧跟在后面的表达式需要等待结果
        正常情况下,await后面是一个promise对象,如果不是会被转成一个立即resolve的promise对象
 */
// 当我们进行某些异步操作的时候,但是我们后面的逻辑代码又需要这次异步返回的结果 就可以 await

function fn3 () {
    console.log(1);
    new Promise((resolve,reject) => {
        console.log(2);
        resolve(3);
    }).then((res) => {
        console.log(res);
    });
    console.log(4);
}
fn3(); // 1 2 4 3

async function fn1 () {
    console.log(1);
    await new Promise((resolve,reject) => {
        console.log(2);
        resolve(3);
    }).then((res) => {
        console.log(res);
    });
    console.log(4);
}
fn1(); // 1 2 3 4

async function f2() {
    let data = await new Promise((res,rej) =>{
        // 比如利用ajax获取后台返回的数据;
        // 由于这里是异步的,外面是同步的  所以 data始终拿不到
        // await 就可以让异步操作结束等待执行
        setTimeout(function(){
            res(3);
        },16)
    });
    console.log(data);  // 拿到3;
}
let fn = function (time) {
    return new Promise(function (resolve, reject) {
        console.log("开始处理异步");
        setTimeout(function () {
            resolve();
            console.log(time);
            console.log("异步处理完成");
        }, time);
    })
};

let start = async function () {
    // 在这里使用起来就像同步代码那样直观
    console.log('start');
    await fn(3000);
    await fn(500);
    await fn(1000);
    console.log('end');
};

start();