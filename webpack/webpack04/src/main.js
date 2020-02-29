const {add,mul} =require('./js/mathUtils')
console.log(add(20,30))
console.log(mul(5,6))
require('./css/normal.css')
//2、使用vue进行开发
import Vue from  'vue'
const app=new Vue({
    el:'#app',
    template:`
    <div>
    <h2>{{message}}</h2>
    <button @click="btnClick">点击</button>
    <h2>{{name}}</h2>
    </div>
    `,
    data:{
        message:'Hello webpack',
        name:'刘生涛'
    },
    methods:{
        btnClick(){

        }
    }
})