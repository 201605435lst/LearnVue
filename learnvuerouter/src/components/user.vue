<template>
    <div>
        <h2>我是用户页面</h2>
        <p>我是用户的相关信息</p>
        <h2>{{userId}}</h2> 
        <button @click="routerClick">获取router</button>
    </div>
</template>
<script>
export default {
    name:'user',
    computed:{
        userId(){
            return this.$route.params.userId
        }
    },
    created(){
        console.log(" user created");
    },
    destroyed(){
        console.log("user destroyed")
    },
    methods:{
        routerClick(){
            console.log(this.$router)
        }
    },
}
</script>