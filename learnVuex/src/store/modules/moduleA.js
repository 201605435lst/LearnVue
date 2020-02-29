export default {
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