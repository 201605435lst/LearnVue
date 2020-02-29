export default {
    template:`
    <div>
    <h2>{{message}}</h2>
    <button @click="btnClick">点击</button>
    <h2>{{name}}</h2>
    </div>
    `,
    data(){
        return{
            message:'Hello webpack',
            name:'刘生涛终极'
        }
    },
    methods:{
        btnClick(){
        }
    }
}