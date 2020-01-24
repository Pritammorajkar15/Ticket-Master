import React from 'react'
import TicketForm from './ticket-form'
import {connect} from 'react-redux'
import {startTicketEdit} from '../../actions/tickets'
function TicketEdit(props) {

    const handleSubmit=(formData)=>{
        this.props.dispatch(startTicketEdit(formData,props))
    }
    return(
        <div>
            <div className="row" align="center">
            <div className="col-md-6 offset-md-3">

{Object.keys(props.ticket).length!==0 && <TicketForm {...props.ticket}
 handleSubmit={handleSubmit}/>} 
        </div>
        </div>
        </div>
    )

}
const mapStateToProps=(state,props)=>{
    console.log("tickets edit",state.tickets)
    return {ticket:state.tickets.find(t=>t._id==props.match.params.id)}
}
export default connect(mapStateToProps)(TicketEdit)
