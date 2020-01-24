import React from "react"
import {connect} from 'react-redux'
import {startLoginUser} from '../../actions/users'
class Login extends React.Component{
constructor(props){
super(props)
this.state={

email:"",
password:""
}

}
handleSubmit=(e)=>{
    e.preventDefault()
    const formData={
       
        email:this.state.email,
        password:this.state.password
    }
    console.log("formdata",formData)
    this.props.dispatch(startLoginUser(formData,this.props))
    
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
        <div className="form-group">
            
        <h2>Login</h2>
            <form onSubmit={this.handleSubmit}>
            
                <label>
                    Email:
                    <input type="text" className="form-control form-control-lg" value={this.state.email} onChange={this.handleChange} name="email"/>
                </label>
               <br></br>
                <div className="form-group">
                <label>
                    Password
                    <input type="password" className="form-control form-control-lg" value={this.state.password} onChange={this.handleChange} name="password"/>
                </label>
                </div>
                <br></br>
                <input type="submit" className="btn btn-primary"/>
            </form>

        
    </div>
    </div>
    </div>

)

}
}
export default connect()(Login)