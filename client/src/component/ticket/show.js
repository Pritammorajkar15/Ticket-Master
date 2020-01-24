import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
export default class TicketShow extends React.Component{
    constructor(){
        super()
        this.state={
            ticket:{},
           
        }
    }
    componentDidMount(){
       

    }
  
   
    render()
    {
       
        const id=this.props.match.params.id
        const {message,code,priority}=this.state.ticket
       
        return(
            <div>
                <br></br>
              
                <h2 className="text-info bg-dark">Ticket information</h2>
       
                <ul>
                    <li>{message}</li>
                    <li>{code}</li>
                    <li>{priority}</li>
                    </ul>
                
                <Link to={`/tickets/edit/${id}`}>Edit customer</Link>
                <br></br>
                <Link to='/tickets'>back</Link>
            </div>
        )
    }
}