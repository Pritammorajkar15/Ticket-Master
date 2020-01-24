import axios from '../config/axios'
export const setTickets=(tickets)=>{
return{type:"SET_LIST",payload:tickets}
}
export const startSetTickets=()=>{
    return (dispatch)=>{
        axios.get('/tickets',{
            headers:{'x-auth':localStorage.getItem('authToken')}})
 
       
        .then((response)=>{
            const  tickets=response.data
            // console.log(tickets)
             console.log('hey from listing',response.data)
           dispatch(setTickets(tickets))
           
        })
        .catch((err)=>{
            console.log(err)
        })

    }
}

export const removeTicket=(tickets)=>{
    return {type:"REMOVE_TICKETS",payload:tickets}
}
export const startRemoveTicket=(id)=>{
    return (dispatch)=>{
        axios.delete(`/tickets/${id}`,
        {headers:{'x-auth':localStorage.getItem('authToken')}}
        )
        .then((response)=>{
            const tickets=response.data
            dispatch(removeTicket(tickets))
            
        })

    }
}

export const addTickets=(tickets)=>{
    console.log('tick', tickets)
    return {type:"ADD_TICKETS" ,payload:tickets}
}
export const startAddTickets=(formData,props)=>{

return (dispatch)=>{
    axios.post('/tickets',formData, {
        headers:{
            'x-auth':localStorage.getItem('authToken')
        }
    })
    .then((response)=>{
        if(!response.data.hasOwnProperty('errors')){
           const ticket=response.data
           dispatch(addTickets(ticket))
           props.history.push(`/tickets`)
        }
        else{
             window.alert(response.data.message)
           // swal(`${response.data.message}`)
        }
       
    })
    .catch((err)=>{
        console.log(err)
    })
}



    
}

export const editTickets=(ticket)=>{
    return{type:"EDIT_TICKET",payload:ticket}

}
export const startTicketEdit=(formData,props)=>{
    return(dispatch)=>{
        axios.put(`/tickets/${props.match.params.id}`,formData,
{
    headers:{
        'x-auth':localStorage.getItem('authToken')
    }
})
.then((response)=>{
    if(response.data.hasOwnProperty('errors')){
        alert(response.data.errors.message)
    }
    else{
        const ticket=response.data
        dispatch(editTickets(ticket))
        props.history.push('/tickets')
    }
})
.catch((err)=>{
    console.log(err)
})
    }
}

export const toggleTask = (ticket) => {
    return {
        type: 'TOGGLE_TASK',
        payload: ticket
    }
}

export const startToggleTask = (id,isResolved) => {
    console.log('inside toggle task')
    return(dispatch) => {
        axios.put(`/tickets/${id}`,{"isResolved":true},{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        console.log("starttoggletask",id)
            dispatch(toggleTask(id))
        
    }
}

export const toggleTaskCompleted = (ticket) => {
    return {
        type: 'TOGGLE_TASK_COMPLETED',
        payload: ticket
    }
}

export const startToggleTaskCompleted = (id,isResolved) => {
    console.log('inside toggle task')
    return(dispatch) => {
        axios.put(`/tickets/${id}`,{"isResolved":false},{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        console.log("starttoggletask",id)
            dispatch(toggleTask(id))
            window.location.reload(true)
        
    }
}