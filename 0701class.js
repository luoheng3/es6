/**
 * Created by 14486 on 2019/10/25.
 */
// es5
function Fn1(x,y) {
    this.x = x;
    this.y = y;
}
Fn1.prototype.add = function () {
    return this.x + this.y
};
Fn1.prototype = {
    constructor () {},
    show () {}
};

// es6
class Fn {
    // 相当于es5里面的私有属性
    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.a = 1;
        this.arr = []
    } // 可以不写,要写就只能写分号
    // 相当于es5里面的原型方法
    // 这里面只能写方法 ,不能写属性
    add () {
        console.log(this.x);
    }
    static show () { // 没有静态属性
        console.log("Fn的静态方法show");
    }
    // 存取值函数
    get xxx () {
        return this.arr
    }
    set xxx (val) {
        this.arr.push(val)
    }
}
let obj = new Fn(2,3);
// 存取值函数
console.log(obj.xxx);  // 取值 []
obj.xxx = 1;  // 存值
obj.xxx = 2;
console.log(obj.xxx); // [1,2]
// 解决不能写属性的方法
Fn.prototype.show = true; // 第一种方法
Object.assign(Fn.prototype, { // 第二种方法更方便,因为可以扩展多个
    flag: true,
    add () {
        console.log(this.show)
    }
});
Object.getPrototypeOf(Fn); // 第三种 获取原型，再来扩展

// 类的内部所有定义的方法，都是不可枚举的（non-enumerable），这与es5不同。
console.log(Object.keys(Fn1.prototype)); // es5获取属性的方法 [show,constructor]
console.log(Object.getOwnPropertyNames(Fn1.prototype)); // es6获取属性的方法 [show,constructor]
console.log(Object.keys(Fn.prototype)); // es5获取属性的方法 [flag,show]
console.log(Object.getOwnPropertyNames(Fn.prototype)); // es6获取属性的方法 [flag,show,add,constructor]

// es6的继承 所有都会被继承 包括静态方法
class Son extends Fn{
    constructor (x,y,a) {
        super(x, y); // 不写就报错 相当于父类constructor里面的
        // super.a = 1 => this.a = 1 这时的super是this
        this.a = a;
    }
    _add () {
        // 这里的super相当于整个父类原型
        console.log(1);
    }
}
