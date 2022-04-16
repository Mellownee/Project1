import { Link } from "react-router-dom";

import Home from './Home';
import Admin from './Dashboards/Admin'
import Manager from './Manager';
import Supervisor from './Supervisor';
import Reimbursment from '../../not used but still Useful/Requests';



function Dashboard(){
    return (
<>
<div className="title">Dashboard </div>

     
     <nav className="navigate">  
          <Link to="/"> Home</Link> 
      </nav>

     

<div class="card text-center" >
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <Link to="/Manager" class="btn btn-primary">Go to the Manager page</Link>
    
  </div>
</div>

<div class="card " >
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <Link to="/Admin" class="btn btn-primary">Go to the Admin page</Link>
  
  </div>
</div>

<div class="card text-center" >
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <Link to="/Supervisor" class="btn btn-primary">Go to the Supervisor page</Link>
   
  </div>
</div>

<div class="card text-end">
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <Link to="/reimbursment" class= "btn btn-primary">Reimbursment</Link>
  </div>
</div>




 
     
    




</>
    )}

export default Dashboard;

