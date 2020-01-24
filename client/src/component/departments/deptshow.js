import React from 'react'
import {Jumbotron} from 'reactstrap'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'

 function DepartmentShow(props){
    
       
        console.log("in dept show",props.employees)
        return(

            <div>
                {
               
                    <div align="center">
                    <h2 className="text-info bg-dark"> Employees In Department</h2>
                    <br></br>
                    
                    <Jumbotron style={{"backgroundColor":"rgb(149,125,173)"}}>
                        {
                            (props.employees.length>0) && props.employees.map((emp)=>{
                                return <h6>{emp.name}</h6>
                            
                            })
                        }
                    
                  
                    <br></br>
                    <Link to='employees/new' className="btn btn-success">Add Employees</Link>
                   
                    <br></br>
                    <Link to='/departments' className="btn btn-warning">back</Link>
                    </Jumbotron>
                    </div>
              
                    }
            </div>
        )
 
}
const mapStateToProps=(state,props)=>{
    console.log("state value",state.employees,props.match.params.id)
    return {
      
        employees:state.employees.filter(e=>e.department==props.match.params.id)
    }
}

export default connect(mapStateToProps)(DepartmentShow)