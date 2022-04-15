import { Link } from "react-router-dom"
import ManagerHeader from "./ManagerHeader"

const Manager = () => {
    return (
        <>
        <ManagerHeader/>
        <section>
            <h1>Manager Page</h1>
            <br />
            <p>You must have been assigned an Manager role.</p>
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
        </>
    )
}

export default Manager