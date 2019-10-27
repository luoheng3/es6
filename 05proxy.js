/*
Created by 14486 on 2019/10/27.
 Proxy 可以理解成，在目标对象之前架设一层“拦截”，
 外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，
 可以对外界的访问进行过滤和改写。Proxy
*/
let proxy = new Proxy({name: '罗恒'}, {
    get (target,key) {
        // this 指向proxy
        console.log(target);
        console.log(key);
    },
    set (target,key,value) {
        console.log(target);
        console.log(key);
        console.log(value);
    }
});
// handler`如果是一个空对象，没有任何拦截效果，访问`proxy`就等同于访问`target`