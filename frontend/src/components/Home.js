
import { Link,Outlet } from "react-router-dom";
import images from "../assets/images/traveling.jpg"
import expenses from "../assets/images/expenses.jpg";
import education from "../assets/images/education.jpg"

import Footer from "./Footer";

/**
 * Link is used to set the URL and keep track of brwosing history
 * Outlet - renders the current route selected
 */
function Home(){
    return (
        <>

<div className="title">Welcome</div>
< nav  className="bg-primary1 text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        

<Link className="text-light" to="/UserRegistration">
          <h1 className="m-0">UserRegistration</h1>
        </Link>

        <Link className="text-light" to="/Login">
          <h1 className="m-0">Login</h1>
        </Link>

        
         
        <Link className="text-light" to="/Archive">
          <h1 className="m-0">Archive</h1>
        </Link>


        <Link className="text-light" to="/ReimbursmentForm">
          <h1 className="m-0">ReimbursmentForm</h1>
        </Link>
        
       
        </div>

</nav>
            
              
<<<<<<< HEAD
=======
            <ul>
                <li>
                    
                    <Link to="/login"> Login</Link>
                    <br/>
                    <Link to="/Admin">Go to the Admin page</Link>
                    <br/>
                    <Link to="/BenefitsCoor">BenefitsCoor</Link>
                    <br/>
                    <Link to="/Employee">Employee</Link>
                    <br/>
                    <Link to="/Manager">Go to the Manager page</Link>
                    <br/>
                    <Link to="/Supervisor">Go to the Supervisor page</Link>
                    <br/>
                    <Link to="/Archive">Archive</Link>



                    <br/>
                    <Link to="/userregistration"> UserRegistration</Link>
                    <br/>
                    {/* <Link to="/form"> Form</Link> */}
                    <Link to="/ReimbursmentForm">Reimbursment Form</Link>
                   

                </li>
               
            </ul>

            <h1>kjnsdcjkndkckc</h1>
            <h1>kjadjhSD</h1>

            <h1>kjnsdcjkndkckc</h1>
            <h1>kjadjhSD</h1>

            <h1>kjnsdcjkndkckc</h1>
            <h1>kjadjhSD</h1>


            <h1>kjnsdcjkndkckc</h1>
            <h1>kjadjhSD</h1>
>>>>>>> main

<div class="card" >
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <img className="mb-5"  src={education} />
  
  </div>
</div>
<div class="card" >
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <img className="mb-5"  src={expenses} />
  </div>
</div>
<div class="card" >
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <img className="mb-5"  src={images} />
  </div>
</div>
           
            
         
            
  

     

            <Footer/>
              
            
        </>
    );
}


export default Home;