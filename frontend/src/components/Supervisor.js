import { Link } from "react-router-dom";
import SupervisorHeader from "./SupervisorHeader";

const Supervisor = () => {
    return (
        <>
        <SupervisorHeader/>
        <section>
            <h1>Supervisor Page</h1>
            <br />
            <p>You must have been assigned an Supervisor role.</p>
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
        </>
    )
}

export default Supervisor