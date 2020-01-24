import React from 'react'
import axios from 'axios'
import CustomerForm from './form'
import {startCustomerEdit} from '../../actions/customers'
import {connect} from 'react-redux'
function CustomerEdit(props){
    
const handleSubmit=(formData)=>{
   props.dispatch(startCustomerEdit(formData,props))

}

    return(
        <div className="row">
        <div className="col-md-6 offset-md-3">
<h2>{props.customers.name}</h2>

{Object.keys(props.customers).length!==0 && <CustomerForm {...props.customers}
 handleSubmit={handleSubmit}/>} 
        </div>
</div>
    )
}

const mapStateToProps=(state,props)=>{
    return {customers:state.customers.find(cust=>cust._id==props.match.params.id)}
}
export default connect(mapStateToProps)(CustomerEdit)