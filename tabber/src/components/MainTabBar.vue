<template>
  <tab-bar>
  <tab-bar-item path='/home' activeColor="red">
    <img slot="item-icon" src="~@/assets/img/home.png">
    <img slot="item-icon-active" src="~@/assets/img/home_active.png">
    <div slot="item-text">首页</div>
  </tab-bar-item>
    <tab-bar-item path='/category' activeColor="black">
    <img slot="item-icon" src="~@/assets/img/category.png">
     <img slot="item-icon-active" src="~@/assets/img/category_active.png">
    <div slot="item-text">分类</div>
  </tab-bar-item>
    <tab-bar-item path='cart'>
    <img slot="item-icon" src="~@/assets/img/cart.png">
     <img slot="item-icon-active" src="~@/assets/img/cart_active.png">
    <div slot="item-text">购物车</div>
  </tab-bar-item>
    <tab-bar-item path='/profile'>
    <img slot="item-icon" src="~@/assets/img/profile.png">
    <img slot="item-icon-active" src="~@/assets/img/profile_active.png">
    <div slot="item-text">我的</div>
  </tab-bar-item>
</tab-bar>
</template>

<script>
import TabBar from './tabbar/TabBar'
import TabBarItem from './tabbar/TabBarItem'
export default { 
name:'MainTabBar',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>