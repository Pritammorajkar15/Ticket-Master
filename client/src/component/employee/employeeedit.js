import React from 'react'
import axios from 'axios'
import EmployeeForm from './form'
import {connect} from 'react-redux'
import {startEmpEdit} from '../../actions/employees'
function EmployeeEdit(props) {

const handleSubmit=(formData)=>{
    props.dispatch(startEmpEdit(formData,props))
   


}

    return(
        <div className="row">
            <div className="col-md-6 offset-md-3">
<h2 className="text-info bg-dark">{props.employee.name}</h2>

{Object.keys(props.employee).length!==0 && <EmployeeForm {...props.employee}
 handleSubmit={handleSubmit}/>} 
        </div>
        </div>

    )
}

const mapStateToProps=(state,props)=>{
    return {employee:state.employees.find(emp=>emp._id==props.match.params.id)}
}
export default connect(mapStateToProps)(EmployeeEdit)