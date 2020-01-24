import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import configureStore from './store/configurestore'
import {startSetCustomerList} from './actions/customers'
import {StartDepartmentList} from './actions/department'

import {startEmpList} from './actions/employees'
import {startSetTickets} from './actions/tickets'
import {startGetUser} from './actions/users'

// import {startLoginUser} from './actions/users'
// import {StartRegisterUser} from './actions/users'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';

const store=configureStore()
store.subscribe(()=>{
    console.log(store.getState())
})
if(localStorage.getItem('authToken'))

{
    store.dispatch(startSetCustomerList())
    store.dispatch(startGetUser())
    store.dispatch(StartDepartmentList())
    store.dispatch(startEmpList())
    store.dispatch(startSetTickets())
    // store.dispatch(startLoginUser())
    // store.dispatch(StartRegisterUser())

}
// if(localStorage.getItem('authToken')){
   
// }

// if(localStorage.getItem('authToken')){
    
// }
// if(localStorage.getItem('authToken')){
    
// }
const ele=(
<Provider store={store}>
    <App/>
</Provider>
)

ReactDOM.render(ele, document.getElementById('root'));

