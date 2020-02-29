//1、配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'

// import Home from '../components/Home.vue's
// import About from '../components/About.vue'
// import User from '../components/user'
const Home = () =>import('../components/Home.vue')
const User = () =>import('../components/user.vue')
const About = () =>import('../components/About.vue')
const HomeMessage = () =>import('../components/HomeMessage.vue')
const HomeNews = () =>import('../components/HomeNews.vue')
const Profile = () =>import('../components/profile.vue')
//2、通过Vue.use(插件)，安装路由插件
Vue.use(VueRouter)
//4、配置路由和组件的关系
const routes=[
     {
        path:'/',
        redirect:'/home'
     },
    {
        path:'/home',
        component:Home,
        children:[
        //     {
        //    path:'',
        //       redirect:'news'
        //   },
            {
                path:'news',
                component:HomeNews
            },
            {
                path:'message',
                component:HomeMessage
            }
        ],
        meta:{
            title:'首页'
        },
    },
    {
        path:'/about',
        component:About,
        meta:{
            title:'关于'
        }
    },
    {
        path:'/user/:userId',
        component:User,
        meta:{
            title:"用户"
        }
    },
    {
        path:'/profile',
        component:Profile,
        meta:{
            title:'文件'
            }
        
    }
]
//3、创建VueRouter对象
const router=new VueRouter({
    routes,
    mode:'history',
    // linkActiveClass:'active'
})
router.beforeEach((to,from,next)=>{
    document.title=to.matched[0].meta.title;
    next()
})
//4、将router对象传入到Vue实例中
export default router