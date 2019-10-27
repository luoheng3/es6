/*
Created by 14486 on 2019/8/23.
    1: 字符串的扩展
        es5只有indexOf用来确定一个字符串是否出现在另一个字符串中而es6又提供了三种方法
        1: includes("search str",index) 返回布尔值 index表示从哪里开始找
        2: startsWith(str,index) 是不是以str开始 返回布尔值 index表示从哪里开始找
        3: endsWith(str,index)  是不是以str结尾 返回布尔值 index表示不一样
        4: repeat(n) 返回新的 n表示重复多少次
        5: str.padStart(length,"str")
            es2017的方法 用于头部补全 length表示补全后的长度 用str头部补全
            x.padStart(5,"ab") // 结果就为 ababx;
        6: str.padEnd(length,"str") 用于尾部补全 和上面差不多
        7: 模板字符串 `${写变量}`
        8: 标签模板 了解一下 没什么卵用
        
    2: 数值的扩展
       1: Number.isFinite(num) 不会进行类型转换 返回布尔值
       2: Number.isNaN(num) 不会进行类型转换
       3: Number.isInteger() 判断是否为整数 JS中整数和浮点数是同样的存储方法所以3 3.0被视为同一个值
       4: Math.trunc(num) 去掉小数部分 返回整数部分 会进行转换 NaN
       5: Math.sign(num) 判断一个数是正数=>+1 负数=>-1 还是 +0=>+0 会进行转换 其他值NaN
       6:Math.cbrt(2) 计算一个数的立方根
       7:Math.hypot(3,4) 5 返回所有参数平方和的平方根 a²+b²
       8:指数运算符 ** **=赋值
           2**3 = 8 === Math.pow(2,3)
           
   3: 函数的扩展
         1: 函数参数有默认值时,默认值写最后面 并且()里面会产生一个临时的作用域
         2: arguments.length // 返回实参的个数
            fn.length  // 返回形参的个数
         3: rest 剩余参数  fn(1,2,...arr) rest 剩余参数必须写在最后一个
         4: es5 类数组转数组
                es5: [].slice.apply(null,arguments);
                es6: [...aBox] 或者 Array.from(arguments)
                
         5: 箭头函数 一般用在回调函数里面
            let f = () => 2 || {}  一个参数不用写圆括号 let f = a => a;
            没有this 没有arguments  不能作为构造函数
            this指向由定义时决定的 被固定指向父级作用域的this
        
            let aBox = document.getElementsByClassName("box");
            let arrBox = [...aBox];
            var num = 10;
            function fn() {
                setTimeout(() => {
                    console.log(this.num);
                },1000)
            }
            fn();
            fn.call({num:5})
         * 1: 带默认值的参数一定要定义在后面
         * 2: es5 arguments.length返回实际参数的个数 es6 fn.length 返回形参的个数
         * 3: 函数参数里面有默认值的时候 这时候圆括号里面会产生一个临时的作用域 
*/

