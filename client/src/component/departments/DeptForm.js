import React from 'react'
export default class Form extends React.Component{
    constructor(){
        super()
        this.state={
            name:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
       
    }
    submit=(e)=>{
        e.preventDefault()
        const FormData={
            name:this.state.name
        }
        this.props.submit(FormData)

    }
    
    


render(){
    return(
        <div className="row form-group">
            <div className="col-md-6 offset-md-3">
            <form onSubmit={this.submit}>
                <label>name:
                    <input type='text' className="form-control form-control-lg" name="name" value={this.state.name} onChange={this.handleChange}/>
                </label>
                <br></br>
                <input type='submit' className="form-control form-control-lg" className="btn btn-primary"/>
            </form>
            </div>
            </div>

    )
}
}