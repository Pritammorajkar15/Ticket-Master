import React from "react"
import swal from 'sweetalert'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startRemoveEmp} from '../../actions/employees'
class EmployeeList extends React.Component{
    
    remove=(id)=>{
        this.props.dispatch(startRemoveEmp(id))
        
    }
    render(){
        return(
            <div align="center">
                <h2 className="text-info bg-dark">Listing Employees-{this.props.employees.length}</h2>
                <table className="table-bordered table hover table-dark">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            
                            <th>Department</th>
                            <th>Mobile</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.employees.map((employee)=>{
                                return(
                                <tr key={employee._id}>
                                    <td><Link to={`/employees/${employee._id}`} className="btn btn-primary">{employee.name}</Link></td>
                                    <td>{employee.email}</td>
                                    <td>{employee.department?employee.department.name:''}</td>

                                    <td>{employee.mobile}</td>
                                    
                                    <td><button button onClick={()=>{
                                         swal({
                                            title: "Are you sure?",
                                            text: "Once deleted, you will not be able to recover this imaginary file!",
                                            icon: "warning",
                                            buttons: true,
                                            dangerMode: true,
                                          })
                                          .then((willDelete) => {
                                            if (willDelete) {
                                                this.remove(employee._id)
                                              swal("Poof! Your imaginary file has been deleted!", {
                                                icon: "success",
                                              });
                                            } else {
                                              swal("Your imaginary file is safe!");
                                            }
                                          });
                                        
                                        
                                        }} className="btn btn-danger">Remove</button></td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
                <Link to='/employees/new' className="btn btn-primary">Add Employee</Link>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        employees:state.employees
    }
}
export default connect(mapStateToProps)(EmployeeList)