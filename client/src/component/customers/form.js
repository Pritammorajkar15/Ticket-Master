import React from 'react'
export default class CustomerForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:props.name ? props.name:'',
            email:props.email ? props.email:'',
            mobile:props.mobile ? props.mobile:''
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
            mobile:this.state.mobile
        }
        console.log(formData)
        this.props.handleSubmit(formData)
    }
    
    render(){
        return(
            <div className="row">
                <div className="col-md-6 offset-md-3">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <label>Name:
    <input type='text' value={this.state.name} onChange={this.handleChange} name='name' className="form-control form-control-lg"/>
</label>
<br></br>
<label>Email:
    <input type='text' value={this.state.email} onChange={this.handleChange} name='email' className="form-control form-control-lg"/>
</label>
<br></br>
<label>Mobile:
    <input type='text' value={this.state.mobile} onChange={this.handleChange} name='mobile' className="form-control form-control-lg"/>
</label>
<br></br>
<input type='submit'/>

                    </div>
               
                </form>
                </div>
                </div>
        )
    }
}