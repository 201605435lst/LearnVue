<template>
    <div>
        <h1>我是cpn组件的标题</h1>
        <p>我是cpn组件的内容</p>
        <h2>{{name}}</h2>
    </div>
</template>
<script>
export default {
    name:'Cpn',
    data(){
        return{
            name:'Cpn组件的name'
        }
    }
}
</script>