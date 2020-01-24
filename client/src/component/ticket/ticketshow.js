import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

 class TicketShow extends React.Component{
    constructor(props){
        super(props)
        this.state={
           
        }
    }
    
   
    render()
    {
       console.log("ticket show",this.props.ticket)
        
       
        return(
            <div className="row" align="center">
                <div className="col-md-6 offset-md-3">
               
                <h2 className="text-info bg-dark">Ticket information</h2>
                <ul className="list-group">
        <li className="list-group-item">Customer Name:- {this.props.ticket.customer.name}</li>
        <li className="list-group-item">Employee Name:- {this.props.ticket.employee.name}</li>
        <li className="list-group-item">Department Name:- {this.props.ticket.department.name}</li>
        <li className="list-group-item">Message:- {this.props.ticket.message}</li>
        <li className="list-group-item">Priority:- {this.props.ticket.priority}</li>
        <li className="list-group-item">Task Completion:- {this.props.ticket.isResolved}</li>
        
                </ul>
      
                
                
                <br></br>
                <Link to='/tickets' className="btn btn-warning">back</Link>
            </div>
            </div>
        )
    }
}
const mapStateToProps=(state,props)=>{
    console.log('oi', state, props.match.params.id)
    return{
        ticket:state.tickets.find(ticket=>ticket._id==props.match.params.id)
    }
}
export default connect(mapStateToProps)(TicketShow)