import Vue from "vue"
import Vuex from "vuex"
//1、安装插件
Vue.use(Vuex)
//2、创建对象
const moduleA={
    state:{
        name:'老虎'
    },
    mutations:{
        updatename(state,payload){
            state.name=payload
        }
    },
    getters:{
        getfullname(state){
          return  state.name+'111'
        },
        getfullname1(state,getters){
            return getters.getfullname+'aaa'
        },
        getfullname2(state,getters,rootstate){
            return getters.getfullname1+rootstate.counter
        }
    },
    actions:{
        aupdatename(context){
            setTimeout(()=>{
                context.commit('updatename','wangwu')
            },1000)
        }
    }
}
const store =new Vuex.Store({
    state:{
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
    },
    mutations:{
       //方法
       increment(state){
         state.counter ++
       },
       decrement(state){
        state.counter --
       },
        // incrementcount(state,count){
        // return state.counter += count
        // },
        incrementcount(state,payload){
            console.log(payload);
        state.counter += payload.count
        },
        addstudent(state,stu){
            state.students.push(stu)
        },
        addinfo(state){
            Vue.set(state.studentinfo,'address','甘肃省')
        },
       updateinfo(state){
           state.studentinfo.name='coderwhy'
       } 
    },
    actions:{ 
        // aupdateinfo(context,payload){
        //     setTimeout(() =>{
        //         context.commit('updateinfo');
        //         console.log(payload)
        //     },1000)
        // }   
        aupdateinfo(context,payload){
            return new Promise((resolve,reject) =>{
                setTimeout(()=>{
                    context.commit('updateinfo');
                    console.log(payload);
                    resolve('1111')
                },1000)
            })
        }
    },
    getters:{
        powerCounter(state){
            return state.counter*state.counter
        },
        more20student(state){
            return state.students.filter(s =>s.age >=18)
        },
        more20studentlength(state,get){
           return get.more20student.length
        },
        moreagestu(state){
            // return function (age){
            //    return state.students.filter( s =>s.age >=age)
            // }
            return  age =>{
                return  state.students.filter( s =>s.age >=age)
            }
        }
    },
    modules:{
        a:moduleA
    }
})
export default store



