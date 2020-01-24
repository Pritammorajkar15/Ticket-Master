import React from  "react"
import ticket from './ticket.jpg'

export default function Home(props){
    return(
        <div align="center">
            <br></br>
            <h2 className="text-info bg-dark">Welcome To Ticket Master App</h2>
        <div className="row">
            <div className="col-md-6 offset-md-3">
        <img src={ticket} className="img-roundede"/>
            </div>
        </div>


        </div>
    )
}