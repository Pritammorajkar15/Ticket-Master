import React from 'react'
import axios from 'axios'
import EmployeeForm from './form'
import {connect} from 'react-redux'
import {startAddEmp} from '../../actions/employees'
 class EmployeeNew extends React.Component{
    
    handleSubmit=(formData)=>{
        this.props.dispatch(startAddEmp(formData,this.props))

    }
    render(){
        return(
            <div className="row">
                <div className="col-md-6 offset-md-3">
                <h2 className="text-info bg-dark">Add Employee</h2>
                <EmployeeForm handleSubmit={this.handleSubmit}/>
                </div>
            </div>
        )
    }
}
export default connect()(EmployeeNew)