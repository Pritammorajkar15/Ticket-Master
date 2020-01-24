import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'

 function CustomerShow(props){
    
        const id=props.match.params.id
        return(

            <div>
                {
                !_.isEmpty(props.customers) && (
                    <div align="center">
                    <h2 className="text-info bg-dark">Customer</h2>
                    <br></br>
                    <li className="list-group-item">Name: {props.customers.name}</li>
                    <li className="list-group-item">Email: {props.customers.email}</li>
                    <li className="list-group-item">Mobile: {props.customers.mobile}</li>
                    
                    <Link to={`/customers/edit/${id}`} className="btn btn-primary">Edit customer</Link>
                    <br></br>
                    <Link to='/customers' className="btn btn-warning">back</Link>
                    </div>
                )
                    }
            </div>
        )
    
}
const mapStateToProps=(state,props)=>{
    return {
        customers:state.customers.find(cust=>cust._id==props.match.params.id)
    }
}

export default connect(mapStateToProps)(CustomerShow)