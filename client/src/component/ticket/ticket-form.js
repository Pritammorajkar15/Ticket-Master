import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
 class TicketForm extends React.Component{
constructor(props){
    super(props)
        this.state={
            employee:'',
            customer:'',
            department:'',
       employees:[],
            code:'',
            customers:[],
            departments:[],
            message:'',
            priority:'',
            data:[],
            emp:[]
    }
    
}



handleChange=(e)=>{
    
    this.setState({
        [e.target.name]:e.target.value
       
    })
    if(e.target.name=='employee'){

        
        const value=e.target.value
       // console.log('idk',value)
        this.setState((prevState)=>{
            return{employees:prevState.employees.concat(value)}
        })
    
    }


}






handleSubmit=(e)=>{
    e.preventDefault()
    

    const formData={
        code:this.state.code,
        customer:this.state.customer,
        employee:this.state.employees,
        department:this.state.department,
        message:this.state.message,
        priority:this.state.priority,
       
    }
    console.log('ticket formData',formData)
    this.props.handleSubmit(formData)
}

render(){
   // console.log(this.state.customer)
    return(
        
            <div className="row">
                <div className="col-md-6  offset-md-3">
                <div align="center">
               
       
            
            <form onSubmit={this.handleSubmit}>
<div className="form-group">
<label>Code:
    <br></br>
    <input type='text' className="form-control form-control-lg" value={this.state.code} onChange={this.handleChange} name='code'/>
</label>
</div>


<div className="form-group">
<label>Customer
    <br></br>
    <select name='customer' className="form-control form-control-lg" onChange={this.handleChange}>
        <option value='select'>select</option>
        {
            this.props.customers.map((cust)=>{
                return <option key={cust._id} value={cust._id}>{cust.name}</option>
            })
        }
    </select>
</label>
</div>



<div className="form-group">
<label>Employees:
<br></br>
    <ul>
        {
            this.props.employees.map((employee,index)=>{
               
           return <li key={index}>{employee.name}</li>
            })
        }
    </ul>
    <select name='employee' className="form-control form-control-lg" onChange={this.handleChange}>
    <option>select</option>
       
       {
           this.props.employees.map((emp)=>{
               return(
               <option key={emp._id} value={emp._id}>{emp.name}</option> 
               )
           })
       }
      
    </select>
</label>
</div>


<div className="form-group">
<label>Department:
<br></br>
<select name='department' className="form-control form-control-lg"  onChange={this.handleChange}>
    <option>select</option>
      
       {
           this.props.departments.map((dept)=>{
              // console.log("department",dept)
               return(
                   
           <option key={dept._id} value={dept._id}>{dept.name}</option> 
               )
           })
       }
      
    </select>
</label>
</div>
<br></br>

<div className="form-group">
<label>Message
<br></br>
    <textarea value={this.state.mobile}  className="form-control form-control-lg" onChange={this.handleChange} name='message'></textarea>
</label>
</div>


<div className="form-group">
<label>Priority:
<br></br>
    <input type='radio' className="form-control form-control-lg" name="priority" value="high" onChange={this.handleChange}/>High
    <br></br>
    <input type='radio' className="form-control form-control-lg" name="priority" value="medium" onChange={this.handleChange}/>Medium
    <br></br>
    <input type='radio' className="form-control form-control-lg" name="priority" value="low" onChange={this.handleChange}/>Low
    </label>  
</div> 
<div className="form-group">

<input type='submit' className="form-control form-control-lg" className="btn btn-primary"/>
</div>
</form>
       
</div>
</div>
</div>
    )
}
}
const mapStateToProps=(state)=>{
return{
    customers:state.customers,
    employees:state.employees,
    departments:state.departments

}
}
export default connect(mapStateToProps)(TicketForm)