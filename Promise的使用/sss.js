//需求：取出所有小于100的数字，然后求他们2倍的和
//filter中的回调函数有一个要求：必须返回一个bollean值
//true:当返回true时；函数内部会自动将这次回调的n加入到新的数组中
//false：当返回false时，函数内部会过滤掉这次的n
const nums=[10,20,111,222,444,40,50]
let newNums=nums.filter(function(n){
    return n<100
})
console.log(newNums)
//2、map函数的使用(对数组中的每一个元素进行处理)
let news2Nums=newNums.map(function(n){
    return n*2
})
console.log(news2Nums)
//3、reduce函数的使用：reduce作用对数组中所有的内容进行汇总
let total=news2Nums.reduce(function(preValue,n){
    return preValue+n
},0)
console.log(total)
//第一次：preValue 0 n 20
//第一次：preValue 20 n 40
//第一次：preValue 60 n 80
//第一次：preValue 140 n 100
console.log("以上三个函数的更高级")
let total2=nums.filter(function(n){
    return n<100
}).map(function(n){
    return n*2
}).reduce(function(preValue,n){
    return preValue+n
},0)
console.log(total2)
let total3=nums.filter(n => n < 100).map(n => n*2).reduce((preValue,n) => preValue+n);
console.log(total3)