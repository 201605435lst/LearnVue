export default {
    powerCounter(state){
        return state.counter*state.counter
    },
    more20student(state){
        return state.students.filter(s =>s.age >=18)
    },
    more20studentlength(state,get){
       return get.more20student.length
    },
    moreagestu(state){
        // return function (age){
        //    return state.students.filter( s =>s.age >=age)
        // }
        return  age =>{
            return  state.students.filter( s =>s.age >=age)
        }
    }
}