import React from 'react'
import Form from './DeptForm'
import {connect} from 'react-redux'
import{startDeptEdit} from '../../actions/department'
function DeptEdit(props){
const submit=(FormData)=>{
    props.dispatch(startDeptEdit(FormData,props))
}
    return(
        <div className="row">
            <div className="col-md-6">
            <h2 className="text-info bg-dark">Edit Department</h2>
          {
              Object.keys(props.department).length!==0 &&  <Form  {...props.department} submit={submit} />
          }  
            </div>
           
        </div>
    )
}

const mapStateToProps=(state,props)=>{
    return{
        
       
        department:state.departments.find(dept=>dept._id==props.match.params.id)
    }
}
export default connect(mapStateToProps)(DeptEdit)