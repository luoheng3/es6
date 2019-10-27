/*
Created by 14486 on 2019/8/23.
 */
/*
 * fetch (全局函数) 兼容性不太好*/
fetch("url").then(res =>{
    return res.json();
}).then(data =>{
    console.log(data);
});
fetch("url",{
    method:"post"
}).then(res =>{
    console.log(res.ok);
    console.log(res.ok);
});
