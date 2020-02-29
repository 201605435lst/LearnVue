import Vue from 'vue'
export default {
     //方法
     increment(state){
        state.counter ++
      },
      decrement(state){
       state.counter --
      },
       // incrementcount(state,count){
       // return state.counter += count
       // },
       incrementcount(state,payload){
           console.log(payload);
       state.counter += payload.count
       },
       addstudent(state,stu){
           state.students.push(stu)
       },
       addinfo(state){
           Vue.set(state.studentinfo,'address','甘肃省')
       },
      updateinfo(state){
          state.studentinfo.name='coderwhy'
      } 
}