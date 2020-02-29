<template>
  <div id="app">
  <router-link to="/home" tag='button' replace active-class='active'>首页</router-link>
  <router-link to="/about" tag='button' replace active-class='active'>关于</router-link>
  <!-- <router-link :to="'/user/'+userId" tag='button' replace active-class='active'>用户</router-link>
  <router-link 
  :to="{
      path:'/profile',
      query:{
        name:201605435,
        age:18,
        sex:'男'
      }
    }" tag="button">档案</router-link> -->
    <button @click="userClick" replace active-class='active'>用户</button>
    <button @click="profileClick" replace active-class='active'>档案</button>
<keep-alive exclude="user,profile">
   <router-view/>
</keep-alive>
   <!-- <button @click="homeClick">首页</button>
   <button @click="aboutClick">关于</button> -->
      
  </div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return {
      userId:'201605435'
    }
  },
  methods:{
    userClick(){
      this.$router.push('/user/'+this.userId)
  },
    profileClick(){
       this.$router.push({
          path:'/profile',
           query:{
               name:'201605435',
               age:45
                 }
     })
  }
}
  // methods:{
  //   homeClick(){
  //     // this.$router.push('/home')
  //     this.$router.replace('/home')
  //   },
  //   aboutClick(){
  //     // this.$router.push('/about')
  //     this.$router.replace('/about')
  //   }

  // }

}

</script>

<style  scoped>
  .active{
    color:red;
  }
</style>>


