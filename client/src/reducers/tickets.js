const initialTicketState=[{
    "code":"4544",
    "priority":"high",
    "":"",
    "":"",
    "":"",
    "":"",
    "":""
}]
const ticketsReducer=(state=initialTicketState,action)=>{
    switch(action.type){
        case "SET_LIST":{
            console.log('listing',action.payload)
           return [...action.payload]
        }

        case 'TOGGLE_TASK': 
        {return state.map(ticket=>{
            if(ticket._id == action.payload){
               console.log("ticket reducer",action.payload)
                ticket.isResolved = true
                return ticket
            } else {
                return ticket
            }
            
            })
        }

        case 'TOGGLE_TASK_COMPLETED': 
        {return state.map(ticket=>{
            if(ticket._id == action.payload){
               console.log("ticket reducer",action.payload)
                ticket.isResolved = false
                return ticket
            } else {
                return ticket
            }
            
            })
        }
        case "REMOVE_TICKETS":{
                return state.filter(tickets=>tickets._id!=action.payload._id)
        }
        case "ADD_TICKETS":{
            console.log("in reducer", action.payload)
                return [...state,action.payload]
        }
        case "EDIT_TICKET":{
                return state.map(tickets=>{
                    if(tickets._id==action.payload._id){
                        return {...state}
                    }
                    else{
                        return{...tickets}
                    }
                })
        }
        default:{
            return [...state]
        }
    }
}
export default ticketsReducer