import produce from 'immer'

const initState={
    token:null,
    userInfo:{},
    accessRoutes:[]

}
function user_reducer(preState=initState,action) {

    return produce(preState,(newState)=>{

    })
    
}

export default user_reducer