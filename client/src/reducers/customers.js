const customerInitialState=[]
const customersReducers=(state=customerInitialState,action)=>{
    switch(action.type){
        case "SET_CUSTOMER_LIST":{
            return [...action.payload]
        }
        case "CUSTOMER_REMOVE":{
            return state.filter(cust=>cust._id!=action.payload)
        }
        case "ADD_CUSTOMER":{
            return [...state,action.payload]
        }
        case "EDIT_CUSTOMER":{
            return state.map(customer=>
                {
                    if(customer._id==action.payload.id)
                    {
                        return {...action.payload}
                    }
                    else{
                        return {...customer}
                           
                        
                    }
                    
                })
        }

        default:{
            return [...state]
        }
    }
}

export default customersReducers