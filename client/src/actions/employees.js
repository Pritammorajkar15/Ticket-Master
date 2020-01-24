import axios from '../config/axios'
export const empList=(employees)=>{
return {type:"EMP_LIST",payload:employees}
}
export const startEmpList=()=>{
    return (dispatch)=>{
        axios.get('/employees',{
            headers:{'x-auth':localStorage.getItem('authToken')}})
 
       
        .then((response)=>{
            const employees=response.data
           dispatch(empList(employees))
           
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const removeEmp=(id)=>{
return{type:"REMOVE_EMP",payload:id}
}
export const startRemoveEmp=(id)=>{
    return (dispatch)=>{
        axios.delete(`/employees/${id}`,{headers:{
            'x-auth':localStorage.getItem('authToken')
        }})
        .then((response)=>{
           const employee=response.data
            dispatch(removeEmp(employee._id))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
export const addEmp=(employee)=>{
return{type:"ADD_EMP",payload:employee}
}
export const startAddEmp=(formData,props)=>{
return (dispatch)=>{
    axios.post('/employees',formData,{
                    headers:{
                        'x-auth':localStorage.getItem('authToken')
                    }
                })
                .then((response)=>{
                    console.log("hello i am in emp add",response.data)
                    if(response.data.hasOwnProperty('errors')){
                        alert(response.data.message)
                    }
                    else{
                       
                        const employee=response.data
                        dispatch(addEmp(employee))
                        props.history.push(`/employees/${employee._id}`)
                    }
                    //console.log(response)
                })
        .catch((err)=>{
            console.log(err)
        })

        

}
}
export const EmpEdit=(employee)=>{
    return{type:"EMP_EDIT",payload:employee}

}
export const startEmpEdit=(formData,props)=>{
    return(dispatch)=>{
        axios.put(`/employees/${props.match.params.id}`,formData,
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
        const  employee=response.data
        dispatch(EmpEdit(employee))
        props.history.push(`/ employees/${ employee._id}`)
    }
})
.catch((err)=>{
    console.log(err)
})
    }
}