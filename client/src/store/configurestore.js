import {createStore,applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import customersReducer from '../reducers/customers'
import departmentsReducer from '../reducers/department'
import employeesReducer from '../reducers/employees'
import ticketsReducer from '../reducers/tickets'
import usersReducer from '../reducers/users'
const configureStore=()=>{
    const store=createStore(combineReducers({
        customers:customersReducer,
        departments:departmentsReducer,
        employees:employeesReducer,
        tickets:ticketsReducer,
        users:usersReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore