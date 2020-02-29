<template>
  <div id="app">
    <h2>APP内容</h2>
    <h2>{{$store.state.studentinfo}}</h2>
     <button @click="addinfo">增加一个属性</button>
    <h2>-----------------modules里面的内容---------------------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <h2>{{$store.getters.getfullname}}</h2>
    <button @click="aupdatename">修改moduleA里面的异步</button>
    <h2>{{$store.getters.getfullname2}}</h2>
    <button @click="updatename">修改moduleA里面的名字</button>
     <h2>--------------------------------------</h2>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20student}}</h2>
    <h2>{{$store.getters.more20studentlength}}</h2>
    <h2>{{$store.getters.moreagestu(10)}}</h2>
    <button @click="addition">+</button>
    <button @click="subtration">-</button>
    <button @click="incrementcount(5)">+5</button>
    <button @click="incrementcount(10)">+10</button>
    <button @click="addstudent">增加一个学生</button>
    <button @click="aupdateinfo">异步修改信息</button>
    <h2>Hellovuex内容</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>
<script>
import HelloVuex from "./components/HelloVuex"
export default {
  name: 'App',
  components:{
    HelloVuex
  },
  methods:{
    aupdatename(){
      this.$store.dispatch('aupdatename')
    },
    updatename(){
      this.$store.commit('updatename','lisi')
    },
    aupdateinfo(){
      // this.$store.dispatch('aupdateinfo','我是异步操作信息')
      this.$store
      .dispatch('aupdateinfo','我是异步操作的信息')
      .then((res)=>{
        console.log('里面完成了');
        console.log(res)
      })
    },
    addition(){
      this.$store.commit('increment')
    },
    subtration(){
      this.$store.commit("decrement")
    },
    incrementcount(count){
      // 1、比较普通的一种提交风格
      // this.$store.commit("incrementcount",count)
      // 2、比较特殊的一种提交风格
      this.$store.commit({
        type:'incrementcount',
        count
      })
    },
    addstudent(){
      const stu ={name:'战三',age:45,sex:'男'}
      this.$store.commit("addstudent",stu)
    },
    addinfo(){
      this.$store.commit('addinfo')
    }
  }
}
</script>

<style>
</style>
