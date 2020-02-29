<template>
    <div>
    <h2>我是profile组件</h2>
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.sex}}</h2>
    <h2>{{$route.query.age}}</h2>

    </div>
</template>
<script>
export default {
    name:'profile',
    created(){
        console.log(" profile created");
    },
    destroyed(){
        console.log("profile destroyed")
    }
}
</script>