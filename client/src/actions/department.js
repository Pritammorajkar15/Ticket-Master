import axios from '../config/axios'


export const departmentList=(departments)=>{
    return {type:"DEPT_LIST",payload:departments}
}
export const StartDepartmentList=()=>{
    return (dispatch)=>{
        axios.get('/departments',{
            headers:{'x-auth':localStorage.getItem('authToken')}
        })
        .then((response)=>{
const departments=response.data
//console.log(response.data)
dispatch(departmentList(departments))
        })
        .catch((error)=>{
            console.log(error)
        })

    }
    }

export const departmentRemove=(id)=>{
return {type:"REMOVE_DEPT",payload:id}
}
export const StartDepartmentRemove=(id)=>{
    return (dispatch)=>{
        axios.delete(`/departments/${id}`,{
            headers:{'x-auth':localStorage.getItem('authToken')}
        })
        .then(response=>{    
            console.log(response.data)
       
        dispatch(departmentRemove(response.data._id))
            
            
        })
    }
}

export const departmentPost=(departments)=>{
    return {type:"DEPT_POST",payload:departments}

}
export const startDepartmentPost=(formData)=>{
    return (dispatch)=>{
         axios.post('/departments',formData,{
                    headers:{
                        'x-auth':localStorage.getItem('authToken')
                    }
                })
                .then((response)=>{
                    console.log(response.data)
                    if(response.data.hasOwnProperty('errors')){
                                        alert(response.data.errors.messages)
                                    }
                                    else{
                                        const departments=response.data
                                        dispatch(departmentPost(departments))
                                       
                                    }
                })
                .catch((err)=>{
                    console.log(err)
                })
    }
}
export const deptEdit=(department)=>{
    return {type:"DEPT_EDIT",payload:department}
}
export const startDeptEdit=(FormData,props)=>{
    return (dispatch)=>{
        axios.put(`/departments/${props.match.params.id}`,FormData,{
            headers:{'x-auth':localStorage.getItem('authToken')}
        })
        .then((response)=>{
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.errors.message)
            }
            else{
                const department=response.data
                dispatch(deptEdit(department))
               props.history.push(`/departments/${department._id}`)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
        
    }
   
}
