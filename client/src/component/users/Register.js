import React from "react"
import {StartRegisterUser} from '../../actions/users'
import {connect} from 'react-redux'
 class Register extends React.Component{
constructor(props){
super(props)
this.state={
userName:"",
email:"",
password:"",
userNameError:"",
emailError:"",
passwordError:""


}

}
validate=()=>{
   let userNameError=""
let emailError=""
let passwordError=""
    
    if(!this.state.userName){
        userNameError="this field cannot be blank"
    }
    
    if(!this.state.email.includes('@')){
        emailError='invalid email'
    }
    if(!this.state.password){
        passwordError='this field is required'
    }
    
    if(emailError||userNameError||passwordError){
        this.setState({emailError,userNameError,passwordError})
        return false
    }
    return true

}
handleSubmit=(e)=>{
    e.preventDefault()
    const formData={
        userName:this.state.userName,
        email:this.state.email,
        password:this.state.password
    }
    this.props.dispatch(StartRegisterUser(formData,this.props))
    
}
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

render(){
return(
    <div className="row">
        <div className="col-md-6 offset-md-3">
           
        <h2> Register</h2>
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>
                    Username:
                    <input type="text" className="form-control form-control-lg" value={this.state.userName} onChange={this.handleChange} name="userName"/>
<div style={{fontSize:12,color:"red"}}>{this.state.userNameError}</div>
                </label>
                </div>
                <br></br>
                <div className="form-group">
                <label>
                    Email:
                    <input type="text" className="form-control form-control-lg" value={this.state.email} onChange={this.handleChange} name="email"/>
                    <div style={{fontSize:12,color:"red"}}>{this.state.emailError}</div>
                </label>
                </div>
                <br></br>
                <div className="form-group">
                <label>
                    Password:
                    <input type="password" className="form-control form-control-lg"  value={this.state.password} onChange={this.handleChange} name="password"/>
                    <div style={{fontSize:12,color:"red"}}>{this.state.passwordError}</div>
                </label>
                </div>
                <br></br>
                <div className="form-group">
                <input type="submit" className="btn btn-primary"/>
                </div>
            </form>

    
    </div>
    </div>
)

}
}

export default connect()(Register)