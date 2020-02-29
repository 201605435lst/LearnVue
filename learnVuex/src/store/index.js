import Vue from "vue"
import Vuex from "vuex"
import mutations from './mutations'
import getters from "./getters"
import actions from "./actions"
import moduleA from "./modules/moduleA"
//1、安装插件
Vue.use(Vuex)
//2、创建对象
const state={
    counter:1000,
        students:[
            {name:'刘生涛',age:18,sex:'男'},
            {name:'刘生涛1',age:19,sex:'男'},
            {name:'刘生涛2',age:12,sex:'男'},
            {name:'刘生涛3',age:15,sex:'男'}
        ],
        studentinfo:{
            name:'刘生涛',
            age:20
        }
}
const store =new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
        a:moduleA
    }
})
export default store



