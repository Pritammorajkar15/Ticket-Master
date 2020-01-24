import React from 'react'
import {connect} from 'react-redux'
 class EmployeeForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:props.name ? props.name:'',
            email:props.email ? props.email:'',
            mobile:props.mobile ?props.mobile:'',
            department:props.department ? props.department:'',
           departments:[]
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile,
         department:this.state.department
        }
        console.log(formData)
        this.props.handleSubmit(formData)
    }
    componentDidMount(){
        


    }
    
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
            
        })
        console.log(e.target.name,e.target.value)
    }
        
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
<label>Name:
    <input type='text' value={this.state.name} onChange={this.handleChange} name='name' className="form-control form-control-lg"/>
</label>
<br></br>
<label>Email:
    <input type='text' value={this.state.email} onChange={this.handleChange} name='email'  className="form-control form-control-lg"/>
</label>
<br></br>
<label>Mobile:
    <input type='text' value={this.state.mobile} onChange={this.handleChange} name='mobile'  className="form-control form-control-lg"/>
</label>


<br></br>
<label>Department
    <select name='department' onChange={this.handleChange}  className="form-control form-control-lg">
        <option value='select'>select</option>
        {
            this.props.departments.map((department)=>{
                return <option key={department._id} value={department._id}>{department.name}</option>
            })
        }
    </select>
</label>
<br></br>
<input type='submit'  className="form-control form-control-lg" className="btn btn-primary"/>
</div>
                </form>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
   return{
    departments:state.departments
   } 
}
export default connect(mapStateToProps)(EmployeeForm)