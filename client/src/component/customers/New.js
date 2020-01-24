import React from 'react'
//import axios from 'axios'
import CustomerForm from './form'
import {connect} from 'react-redux'
import {startCustomerNew} from'../../actions/customers'
 class CustomerNew extends React.Component{
   
    handleSubmit=(formData)=>{
        this.props.dispatch(startCustomerNew(formData,this.props))

    }
    render(){
        return(
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <br></br>
                <h2 className="text-info bg-dark">Add Customer</h2>
                <CustomerForm handleSubmit={this.handleSubmit}/>
                </div>

               
            </div>
        )
    }
}
export default connect()(CustomerNew)