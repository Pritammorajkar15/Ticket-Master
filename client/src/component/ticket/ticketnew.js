import React from 'react'
import {startAddTickets} from '../../actions/tickets'
import TicketForm from './ticket-form'
import {connect} from 'react-redux'
 class TicketNew extends React.Component{
   
    
    
   handleSubmit=(formData)=>{
       console.log('formData', formData)
      this.props.dispatch(startAddTickets(formData,this.props))
    
   }

render(){
    return(
        <div className="row" align="center">
        <div className="col-md-6 offset-md-3">
            <br></br>
            <h2 className="text-info bg-dark">Add Tickets</h2>
            
<TicketForm handleSubmit={this.handleSubmit}/>

        </div>
        </div>
    )

    }
}
export default connect()(TicketNew)