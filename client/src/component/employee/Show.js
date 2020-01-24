import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import _ from 'lodash'
 class EmployeeShow extends React.Component{

    
    render()
    {
        console.log("employe show",this.props.employee)
       const {name,email,mobile,department}=this.props.employee
        
        return(
            <div>
                 {!_.isEmpty(this.props.employee) && (
                     <div>
                <h2 className="text-info bg-dark">Employees</h2>
                 <li className="list-group-item">Name: {name}</li>
                 <li className="list-group-item">Email: {email}</li> 
                 <li className="list-group-item">Mobile: {mobile}</li>
                 <li className="list-group-item">department: {department.name}</li>  
                
   
                        <br></br>
                <Link to={`/employees/edit/${this.props.employee._id}`} className="btn btn-primary">Edit customer</Link>
                <br></br>
                <br></br>
                <Link to='/employees' className="btn btn-warning">back</Link>
                </div>
                 )}
            </div>
        )
    }
}
const mapStateToProps=(state,props)=>{
    console.log("state",state)
return {
 employee:state.employees.find(emp=>emp._id==props.match.params.id)||{}

}
}
export default connect(mapStateToProps)(EmployeeShow)