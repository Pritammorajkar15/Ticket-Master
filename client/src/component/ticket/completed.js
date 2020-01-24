import React from "react"
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { Container, Row, Col } from 'reactstrap'
import Chart from 'react-google-charts'
import {startRemoveTicket} from '../../actions/tickets'
import {Nav,NavItem,NavLink} from 'reactstrap'
import {startToggleTaskCompleted} from '../../actions/tickets'
import swal from 'sweetalert'
import _ from 'lodash'


class Completed extends React.Component{
    remove=(id)=>{
    this.props.dispatch(startRemoveTicket(id))
    }
    onCheck=(id)=>{
        
         for(let ticket of this.props.tickets){
            
                 if(ticket._id==id){
                   
                     console.log("inside if loop",ticket._id,id)
                     return this.props.dispatch(startToggleTaskCompleted(id,{"isResolved":false}))
                 }
            
             
                 
         }
             
        
     console.log("value inside checkbox",id) 
         
     }
    empNames=(emp)=>{
        const e=emp.map(e=>e.name)
        return e.join()
    }
    
    render(){
        console.log(this.props.tickets)
        const pendingTickets = this.props.tickets.filter(ticket=>ticket.isResolved)
        console.log("pending tickets",pendingTickets)
        const high = pendingTickets.filter(ticket=>ticket.priority == 'high').length
        console.log("high",high)
        const medium = pendingTickets.filter(ticket=>ticket.priority == 'medium').length
        console.log("medium",medium)
        const low = pendingTickets.filter(ticket=>ticket.priority == 'low').length
        console.log("low",low)
        const data = [
            ["Priority", "Tickets per Category"],
            ["High", high],
            ["Medium",medium],
            ["Low", low]
          ]
// const data2 = []
//         const Header = ["Departments", "Tickets", { role: "style" }]
//         data2.push(Header)
//             this.props.departments.map(dept=>{
//                     const temp = []
//                     temp.push(`${dept.name}`)
//                     temp.push(pendingTickets.filter(ticket=>(ticket.department.name? ticket.department.name : this.findDepartment(ticket.department).name) == dept.name).length)
//                     temp.push("blue")
//                     data2.push(temp)
//             })          
        const options = {
            title: "Ticket Priority",
            pieHole: 0.4,
            is3D: false
          }
        console.log(this.props.tickets)
    return(
        <div>
             <br/>
             <Nav tabs>
             <NavItem>
            <NavLink href="/tickets">Pending</NavLink>
            </NavItem>
           
        
            </Nav>


           <br/><br/>
            <table className=" table-bordered table-dark table hover">
                <thead>
                    <tr>
                        <th>CodeNo</th>
                        <th>Customer</th>
                        <th>Department</th>
                        <th>Employees</th>
                        <th>Message</th>
                        <th>Priority</th>
                        <th>Complete</th>
                        <th colSpan='2'>Actions</th>
                    </tr>
                </thead>
               <tbody>
                   {
                       this.props.tickets.map((ticket)=>{
                           if(ticket.isResolved==true){
                            return (
                                <tr key={ticket._id}>
                                <td>{ticket.code}</td>
                                <td>{ticket.customer.name}</td>
                                <td>{ticket.department.name}</td>
                               {!_.isEmpty(ticket.employee)?<td>{this.empNames(ticket.employee)}</td>: <td>-</td>}
                                <td>{ticket.message}</td>
                                <td>{ticket.priority}</td>
                                <td><input type="checkbox" onChange={()=>{this.onCheck(ticket._id)}}/> </td>
                               
                                <td><Link className="btn btn-secondary" to={`/ticketsshow/${ticket._id}`}>show</Link></td>
                                <td><button className="btn btn-danger" onClick={()=>{
                                    
                                    swal({
                                        title: "Are you sure?",
                                        text: "Once deleted, you will not be able to recover this imaginary file!",
                                        icon: "warning",
                                        buttons: true,
                                        dangerMode: true,
                                      })
                                      .then((willDelete) => {
                                        if (willDelete) {
                                            this.remove(ticket._id)
                                          swal("Poof! Your imaginary file has been deleted!", {
                                            icon: "success",
                                          });
                                        } else {
                                          swal("Your imaginary file is safe!");
                                        }
                                      });
                                    
                                    
                                    }}>remove</button></td> 
                            </tr>
                        )
                           }
                           else{
                               return (
                                   <h2></h2>
                               )
                           }
                          
                       })
                   }
               </tbody>

                </table>
                <Link className="btn btn-primary" to='/ticketnew'>Add Ticket</Link>

                <Container>
                    <Row>
                    <Col md="6">
                    <Chart
                    chartType="PieChart"
                    width="100%"
                    height="400px"
                    data={data}
                    options={options}
                    />
                    </Col>

                    {/* <Col md="6">
                    <Chart
                    chartType="Bar"
                    width="100%"
                    height="400px"
                    data={data2}
                    options={{
                        chart: {
                            title: 'Tickets By Department',
                        }
                    }}
                     />
                    </Col>  */}
                </Row>
            </Container>
        </div>
    )
}
}
const mapStateToProps=(state)=>{
    return {
        tickets:state.tickets,
        customers:state.customers,
        employees:state.employees,
        departments:state.departments
    }
}
export default connect(mapStateToProps)(Completed)