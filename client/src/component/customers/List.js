import React from "react"
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import swal from 'sweetalert'
import {StartCustomerRemove} from '../../actions/customers'

 class CustomerList extends React.Component{
    constructor(){
        super()
        this.state={
            customers:[]
        }
    }
   
    handleRemove=(id)=>
     {
        this.props.dispatch(StartCustomerRemove(id))
        
    
}



    render(){
        return(
            <div align="center">
                <h2 className="text-info bg-dark">Listing Customers-{this.props.customers.length}</h2>
                <table className="table-dark table-bordered table hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.customers.map((customer)=>{
                                return(
                                <tr key={customer._id}>
                                    <td><Link to={`/customers/${customer._id}`} className="btn btn-primary">{customer.name}</Link></td>
                                    <td>{customer.email}</td>
                                    <td>{customer.mobile}</td>
                                   
                                  <td>  <button  className="btn btn-danger" onClick={()=>{

                                   
                                    swal({
                                        title: "Are you sure?",
                                        text: "Once deleted, you will not be able to recover this imaginary file!",
                                        icon: "warning",
                                        buttons: true,
                                        dangerMode: true,
                                      })
                                      .then((willDelete) => {
                                        if (willDelete) {
                                            this.handleRemove(customer._id)
                                          swal("Poof! Your imaginary file has been deleted!", {
                                            icon: "success",
                                          });
                                        } else {
                                          swal("Your imaginary file is safe!");
                                        }
                                      });

                                      }} 
                                      
                                      >remove</button></td>

                                      
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
                <Link to='/customers/new' className="btn btn-primary" >Add Customer</Link>
            </div>
        )
    }
}

const mapStateToProps=(state,props)=>{
    return {
        customers:state.customers
    }
}
export default connect(mapStateToProps)(CustomerList)