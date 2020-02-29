const {add,mul} =require('./js/mathUtils')
console.log(add(20,30))
console.log(mul(5,6))
require('./css/normal.css')
//2、使用vue进行开发
import Vue from  'vue'
// import App from './vue/vue'
import App from './vue/App.vue'
const app=new Vue({
    el:'#app',
    template:'<App/>',
    components:{
        App
    }
})