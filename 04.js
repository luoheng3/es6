/**
 * Created by 14486 on 2019/8/23.
 */
/*
 symbol数据类型
    为什么要有他
        es5里面对象都是字符串,如果你要用一个别人提供的对象,但是你对这个对象下面的属性
        并不是很清楚,又想为这个对象新增一些属性,那么就很有可能会发生冲突,所以我们需要一个独一无二的值
    作为属性名时只能[] 不能用点, .就报错
        Object[s] = 3;

    let s3 = Symbol.for("1") 有登记信息
    Symbol.keyfor(s3)  => 1;
* */
//  不能加 new 加了就报错
let s = Symbol(123); // 123只是一个描述,便于区分;
console.log(s);  // Symbol(123)
var t = typeof s; // Symbol

//
let s1 = Symbol(123);
let s2 = Symbol(123);
//  s1 === s2  不等于
let s3 = Symbol.for("s1");
let s4 = Symbol.for("s1");
// s3 === s4 true

/*
set数据结构
    es5用的最多的数据结构就是[]和{}
 *  set数据结构
 *       类似于数组,但是他的成员值都是唯一的,没有重复的值 (数组去重)
 *       let s = new Set()
 *       s.add(1) 添加数据 返回set本身可以;链式操作
 *       s.delete(1) 删除数据 返回布尔值
 *       s.has(1) 判断是否有1这个成员 返回布尔值
 *       s.clear() 清除所有值
 *       遍历
 *       s.keys() s.values() s.entries() 输出都是一样的 键值都是一样的
 *       数组去重
 *          Array.from(set);  将类数组转化为数组
 *          let arr = [1,2,3,2,1];
            let s = [...new Set(arr)];
    WeakSet 也是不重复的数据 ,但是他的值必须是引用型,
        let ws = new WeakSet([[1],[2],{})
        弱引用; (垃圾回收机制不会考虑他的引用,不会增加引用记录)
*/
/*
map数据结构
    属性是对象
**/
const map = new Map();
const o = {
    name:"罗恒"
};
map.set(o,"o属性,当前这个是值");
map.get(o); // o属性,当前这个是值
map.has(o); // true
map.size(); // 返回成员数量
map.delete(o);// 返回布尔值
map.clear(); // 清空所有成员

// proxy 代理对象

 //proxy (代理)
 //功能: 可以监听对一个对象的操作
 let obj = {
 age:18,
 name:"罗恒",
 wife:"范雨菲"
 };
 let obj2 = new Proxy(obj,{
 get (target,key) {
 // target === obj
 // 这里的key就是访问时候的key
 return 232;
 },
 set (target,key,value) {
 // value表示 设置时候的值
 return true;  // 表示设置成功
 }
 });
 console.log(obj2.age); // 打印 232;
 console.log(obj.age); //  打印 18;
 obj2.arr = []; // 这时 obj 也有了 obj.arr = []

// reflect和 proxy一样 都是为了操作对象的API
// 将 Object.defineProperty() 放到 reflect对象上去