
    import React from 'react'
   
    import {Link} from 'react-router-dom'
    import swal from 'sweetalert'
    import Form from './DeptForm'
    import {connect} from 'react-redux'
    import {startDepartmentPost} from '../../actions/department'
    import { StartDepartmentRemove}  from '../../actions/department'
    
    class DeptList extends React.Component{
        submit=(formData)=>{
           this.props.dispatch(startDepartmentPost(formData)) 
        }
        remove=(id)=>{
           this.props.dispatch(StartDepartmentRemove(id))
        }
       
     render(){
         return (
             <div>
                <h2 className="text-info bg-dark">Listing {this.props.departments.length} departments</h2>
                <table className="table table-dark table-bordered table hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th colSpan='2'>Actions</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.departments.map((dept)=>{
                                return(
                                    <tr key={dept._id}>
                                        <td><Link to={`/departments/${dept._id}`} className="btn btn-primary">{dept.name}</Link></td>
                                        
                                        {/* <td><button onClick={()=>{this.remove(dept._id)}}>Remove</button></td> */}

                                        <td>  <button onClick={()=>{

                                    //   const confirmRemove=window.confirm('Are You Sure?')
                                    //   if(confirmRemove){
                                    //    this.remove(dept._id)
                                    //   }
                                    swal({
                                        title: "Are you sure?",
                                        text: "Once deleted, you will not be able to recover this imaginary file!",
                                        icon: "warning",
                                        buttons: true,
                                        dangerMode: true,
                                      })
                                      .then((willDelete) => {
                                        if (willDelete) {
                                            this.remove(dept._id)
                                          swal("Poof! Your imaginary file has been deleted!", {
                                            icon: "success",
                                          });
                                        } else {
                                          swal("Your imaginary file is safe!");
                                        }
                                      });

                                      }} className="btn btn-danger">remove</button></td>

                                       
                                    </tr>
                                )
                            })
    
                        }
    
                    </tbody>
    
                </table>
                <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h2>Add department</h2>
                <Form submit={this.submit}/>
                        </div>
                            </div>
                       
            </div>
         )
     }
    }
    const mapStateToProps=(state)=>{
        return {
            departments:state.departments
        }
    }
    
    export default connect(mapStateToProps)(DeptList)

