
import { Link,Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./Header";
import Footer from "./Footer";

/**
 * Link is used to set the URL and keep track of brwosing history
 * Outlet - renders the current route selected
 */
function Home(){
    return (
        <>

<Header/>
< nav  className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        

<Link className="text-light" to="/UserRegistration">
          <h1 className="m-0">UserRegistration</h1>
        </Link>

        <Link className="text-light" to="/Login">
          <h1 className="m-0">Login</h1>
        </Link>

        <Link className="text-light" to="/Reimbursment">
          <h1 className="m-0">Requests</h1>
        </Link>
        </div>

</nav>
            
              
            <ul>
                <li>
                    
                    <Link to="/login"> Login</Link>
                    <br/>
                    <Link to="/Admin">Go to the Admin page</Link>
                    <br/>
                    <Link to="/Manager">Go to the Manager page</Link>
                    <br/>
                    <Link to="/Supervisor">Go to the Supervisor page</Link>
                    <br/>
                    <Link to="/userregistration"> UserRegistration</Link>
                    <br/>
                    {/* <Link to="/form"> Form</Link> */}
                    <Link to="/reimbursment">Reimbursment</Link>
                   

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

           
            
            <Outlet />
            
  

     

            <Footer/>
              
            
        </>
    );
}


export default Home;