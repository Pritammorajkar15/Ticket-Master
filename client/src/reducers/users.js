const userInitialState={}

const usersReducer=(state=userInitialState,action)=>{
    switch(action.type){
        case "SET_USER":{
            return {...action.payload}
        }
        default:{
            return {...state}
        }
    }
}

export default usersReducer