const EmployeesInitialstate=[]

const employeesReducer=(state=EmployeesInitialstate,action)=>{
        switch(action.type){
            case "EMP_LIST":{
                return [...action.payload]
            }
            case "REMOVE_EMP":{
                return state.filter(emp=>emp._id!=action.payload)
            }
            case "ADD_EMP":{
                return [...state,action.payload]
            }
            case "EMP_EDIT":{
                return state.map(emp=>{
                    if(emp._id==action.payload._id){
                        return {...state}
                    }
                    else{
                        return{...emp}
                    }
                })
            }
            default:{
                return [...state]
            }
        }
}
export default employeesReducer