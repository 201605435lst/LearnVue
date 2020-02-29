export default {
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
}