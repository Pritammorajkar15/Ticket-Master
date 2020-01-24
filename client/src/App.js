import React from 'react';
import Home from './component/common/Home'
import Home2 from './component/common/Home2'
import Register from './component/users/Register'
import Login from './component/users/Login'
import {BrowserRouter, Route, Link,Switch} from 'react-router-dom'
import CustomerList from './component/customers/List'
import CustomerShow from  './component/customers/Show'
import CustomerNew from './component/customers/New'
import CustomerEdit from './component/customers/Edit'
import DepartmentList from './component/departments/DeptList'
import EmployeeList from './component/employee/List'
import EmployeeShow from './component/employee/Show'
import EmployeeNew from './component/employee/New'
import TicketList from  './component/ticket/TicketList'
import TicketNew from './component/ticket/ticketnew'
import TicketShow from './component/ticket/ticketshow'
import EmployeeEdit from './component/employee/employeeedit'
import DepartmentShow from './component/departments/deptshow'
import DeptEdit from './component/departments/departmentedit'
import TicketEdit from './component/ticket/ticketsedit'
import Completed from './component/ticket/completed'
import 'bootstrap/dist/css/bootstrap.css'
import _ from 'lodash'
 import {connect} from 'react-redux'
 import {startRemove} from './actions/users'


function App(props) {
  const logout=()=>{
    props.dispatch(startRemove())
  }
  console.log(props.user)
  return (
    <BrowserRouter>
   
   
     <div className="container">
      
<ul>
  
      
       {/* <Link to="/">Home</Link> */}
        {
          //localStorage.getItem('authToken')?
         (localStorage.authToken)?
          // !_.isEmpty(props.users)?
         
          (
            <div>    
               <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <Link to="/" className="navbar-brand text-info">Ticket Master</Link>
 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    {/* <span className="navbar-toggler-icon"></span> */}
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    <li className="nav-item ">
      <Link to="/" className="nav-link active text-info">Home</Link>
        
      </li>     
     
      <li className="nav-item ">
      <Link to="/customers" className="nav-link active text-info">Customer</Link>
        
      </li>
      <li className="nav-item ">
      <Link to="/departments" className="nav-link active text-info">Department</Link>
     </li>

      <li className="nav-item ">
      <Link to="/employees" className="nav-link active text-info">Employee</Link>
      </li>
     
      <li className="nav-item ">
      <Link to="/tickets" className="nav-link active text-info">Ticket</Link>
      </li>

      <li className="nav-item ">
      <Link to="#" onClick={logout} className="nav-link active text-info">Logout</Link>
      </li>
    </ul>
  </div>
  </nav>
 
{/* <li><Link to="/customers">Customers</Link></li>
<li><Link to="/departments">Department</Link></li>
<li><Link to="/employees">Employees</Link></li>
<li><Link to="/tickets">TicketList</Link></li>
<li><Link to="#" onClick={logout}>Logout</Link></li> */}


            </div>
          ):( 
          
          
          
          <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <Link to="/" className="navbar-brand text-info">Ticket Master</Link>
 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    {/* <span className="navbar-toggler-icon"></span> */}
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">

     
      <li className="nav-item ">
      <Link to="/register" className="nav-link active text-info">Register</Link>
        
      </li>
      <li className="nav-item ">
      <Link to="/login" className="nav-link active text-info">Login</Link>
     </li>

     
    </ul>
  </div>
  </nav>

          {/* <div className="collapse navbar-collapse" id="navbarNav">    
     <nav className="navbar navbar-expand-lg navbar-light bg-light"></nav>
    <ul className="navbar-nav">
 <li className="nav-item active"> */}
 {/* <Link to="/register" className="nav-link active">Register</Link>
 {/* </li> */}
 {/* <br></br> */}
 {/* <li className="nav-item active"> */}
        {/* <Link to="/login" className="nav-link active">Login</Link> */}
        {/* </li>
        </ul>
        </nav> */} 
            </div>
           
            )
          }
         
         
         

      <Switch>
        <Route path='/home2' component={Home2} exact={true}/>
      <Route path='/' component={Home} exact={true}/>
      <Route path='/register' component={Register}/>
      <Route path='/login' component={Login}/>
      <Route path='/customers' component={CustomerList} exact={true}/>
      <Route path='/employees' component={EmployeeList} exact={true}/>
      
      <Route path='/departments' component={DepartmentList} exact={true}/>
      <Route path='/employees/new' component={EmployeeNew} />
      <Route path='/customers/new' component={CustomerNew} />
      <Route path='/tickets' component={TicketList} exact={true}/>
      <Route path='/ticketnew' component={TicketNew}  /> 

     <Route path='/employees/edit/:id' component={EmployeeEdit}/>
      <Route path='/customers/edit/:id' component={CustomerEdit} />
      <Route path='/customers/:id' component={CustomerShow} />
      <Route path='/employees/:id' component={EmployeeShow} />
      <Route path='/ticketsshow/:id' component={TicketShow} exact={true}/>
      <Route path='/tickets/:id' component={TicketEdit}/>
      <Route path='/departments/:id' component={DepartmentShow} exact={true}/>
      <Route path='/departments/:id' component={DeptEdit}/>
      <Route path='/completed' component={Completed}/>


</Switch>
</ul>
  

   </div>
    </BrowserRouter>
  );
}
const mapStateToProps=(state)=>{
  return{users:state.users}
}
export default connect(mapStateToProps)(App)