import axios from '../config/axios'
import {startSetCustomerList} from './customers'
import {StartDepartmentList} from './department'
import {startEmpList} from './employees'
import {startSetTickets} from './tickets'
export const setUser=(user={})=>{
        return{type:"SET_USER" ,payload:user}
}
export const StartRegisterUser=(formData,props)=>{
    return (dispatch)=>{
        axios.post('/users/register',formData)
        .then((response)=>{
            if(response.data.hasOwnProperty('error'))
            {
                alert(response.data.message)
            }
            else{
                console.log('register',formData, response.data)
                alert('succesfully registered')
                dispatch(setUser())
                props.history.push('/login')
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
export const startLoginUser=(formData,props)=>{
    return (dispatch)=>{

        console.log("heyy there")
        console.log('formdata', formData)
        axios.post('/users/login',formData)
        .then((response)=>{
            console.log("heyaa" ,response.data)
            if(response.data.errors)
            {
                alert(response.data.error)
            }
            else{
               
                
                const authToken=response.data.token
                localStorage.setItem('authToken',authToken)
                
                Promise.all([axios.get('/users/account',{
                    headers:{'x-auth':authToken}
                }),axios.get('/customers',{
                    headers:{'x-auth':authToken}
                }),
                    axios.get('/departments',{
                        headers:{'x-auth':authToken}
                    }),
                    axios.get('/employees',{headers:{
                        'x-auth':authToken
                    }}),
                    axios.get('/tickets',{headers:{'x-auth':authToken}})
            ])
                .then((values)=>{
                    const [userResponse,customerResponse,employeeResponse,departmentResponse,ticketResponse]=values
                    dispatch(setUser(userResponse.data))
                    dispatch(startSetCustomerList(customerResponse.data))
                    dispatch(StartDepartmentList(departmentResponse))
                    dispatch(startEmpList(employeeResponse))
                    dispatch(startSetTickets(ticketResponse))
                    props.history.push('/')
                })
    // props.history.push('/')
    //             window.location.reload(true)
            }
        })
        .catch((err)=>{
            console.log('catch', err)
        })
    }
}
export const startGetUser=()=>{
    return(dispatch)=>{
        axios.get('/users/account',{
           headers:{'x-auth':localStorage.getItem('authToken')}
        })
        .then(response=>{
            console.log("within startgetuser response.data",response.data)
         const user=response.data
         console.log("within startgetuser",user)
         dispatch(setUser(user))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
export const startRemove=()=>{
    return(dispatch)=>{
        axios.delete('/user/logout',{
            headers:{'x-auth':localStorage.getItem('authToken')}
        })
        .then((response)=>{
            if(response.data.hasOwnProperty('notice')){
                localStorage.removeItem('authToken')
                dispatch(setUser({}))
                window.location.href='/login'
            }
        })
    }
}