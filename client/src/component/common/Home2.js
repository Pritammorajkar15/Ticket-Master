import React from  "react"
import {Link} from 'react-router-dom'
export default function Home2(){
    return(
        <div align="center">
            <br></br>
            {/* <h4 className="text-info bg-dark">Ticket Master</h4> */}
<h2><Link to="/customers">customers</Link></h2>
<h2><Link to="/departments">departments</Link></h2>
<h2><Link to="/employees">employees</Link></h2>
<h2><Link to="/tickets">tickets</Link></h2>

        </div>
    )
}