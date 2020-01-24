const departmentInitialstate=[]
const departmentsReducer=(state=departmentInitialstate,action)=>{
    switch(action.type){
        case "DEPT_LIST":{
            return [...action.payload]
        }
        case "DEPT_POST":{
          return [...state,action.payload]
        }
        case "DEPT_EDIT":{
            return state.map((dept=>{
                if(dept._id==action.payload._id){
                    return {...action.payload}
                }
                else{
                    return {...dept} 
                }
            }))
        }
        case "REMOVE_DEPT":{
            return state.filter(dept=>dept._id!=action.payload)
        }
        default:{
            return [...state]
        }
    }
}
export default departmentsReducer