import axios from '../config/axios'
export const setCustomerList=(customers)=>{
    return {type:"SET_CUSTOMER_LIST",payload:customers}

}
export const startSetCustomerList=()=>{
    return (dispatch)=>{
        axios.get('/customers',{
        headers:{'x-auth':localStorage.getItem('authToken')}})
            
       
    
    .then((response)=>{
        const customers=response.data 
        dispatch(setCustomerList(customers))
       
    })
    .catch((err)=>{
        console.log(err)

    })
}
    

}
export const CustomerRemove=(id)=>{
return {type:"CUSTOMER_REMOVE",payload:id}
}
export const StartCustomerRemove=(id)=>{
    return (dispatch)=>{
       
        axios.delete(`/customers/${id}`,
    {headers:{'x-auth':localStorage.getItem('authToken')}}
    )
    .then((response)=>{
        dispatch(CustomerRemove(response.data._id))
       
        
        })
    }
    
}
export const customerNew=(customer)=>{
return {type:"ADD_CUSTOMER",payload:customer}
}
export const startCustomerNew=(formData,props)=>{
    return (dispatch)=>{
        axios.post('/customers',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.errors.messages)
            }
            else{
                const customer=response.data
               dispatch(customerNew(customer))
                props.history.push(`/customers/${customer._id}`)
            }
            
        })
.catch((err)=>{
    console.log(err)
})
        
    }
}

export const customerEdit=(customer)=>{
return {type:"EDIT_CUSTOMER",payload:customer}
}
export const startCustomerEdit=(formData,props)=>{
 return (dispatch)=>{
    axios.put(`/customers/${props.match.params.id}`,formData,
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
            const customer=response.data
            dispatch(customerEdit(customer))
           props.history.push(`/customers/${customer._id}`)
        }
    })
    .catch((err)=>{
        console.log(err)
    })
    
 }
}