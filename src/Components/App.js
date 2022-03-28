import React  from "react";
import {Link} from "react-router-dom"
import "./app.css"




let App =()=>{
    return(
     <nav className="menu">
         <Link to="/invoices">invoices</Link>|{}
         <Link to="/expenses">Expenses</Link>
     </nav>

    )
}

export default App