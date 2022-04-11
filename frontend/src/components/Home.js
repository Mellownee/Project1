
import { Link,Outlet } from "react-router-dom";
/**
 * Link is used to set the URL and keep track of brwosing history
 * Outlet - renders the current route selected
 */
function Home(){
    return (
        <>
            <nav>
            <ul>
                <li>
                    <Link to="/login"> Login</Link>
                    <Link to="/userregistration"> UserRegistration</Link>
                    {/* <Link to="/form"> Form</Link> */}
                    <Link to="/reimbursment">Reimbursment</Link>

                </li>
               
            </ul>
            </nav>
            <Outlet />
        </>
    );
}


export default Home;