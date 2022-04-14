import { Link,Outlet } from "react-router-dom";
/**
 * Link is used to set the URL and keep track of browsing history
 * Outlet - renders the current route selected
 */
function Home(){
    return (
        <>
            <nav>
            <ul>
              
                     {/* USER LINK SECTION */}
                     <li>
                    <Link to="/Admin">Admin</Link>
                    </li>
                    <li>
                    <Link to="/BenefitsCoor">BenefitsCoor</Link>
                    </li>

                     <li>
                    <Link to="/Employee">Employee</Link>
                    </li>
                    <li>
                    <Link to="/Manager">Manager</Link>
                    </li>

                    <li>
                    <Link to="/Supervisor">Supervisor</Link>
                    </li>
                    <li>
                    <Link to="/Archive">Archive</Link>
                    </li>


                    
                    
                    <br></br>



                     {/* FORM LINK SECTIONS */}

                     <li>
                    <Link to="/login"> Login</Link>
                    </li>
                    <li>
                    <Link to="/userregistration"> UserRegistration</Link>
                    </li>
                    <li>
                    <Link to="/ReimbursmentForm">Reimbursment Form</Link>
                    </li>


                     {/* <Link to="/form"> Form</Link> */}
              
               
            </ul>
            </nav>
            <Outlet />
        </>
    );
}


export default Home;