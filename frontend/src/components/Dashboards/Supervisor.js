import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import SupervisorHeader from "./Headers/SupervisorHeader";

const Supervisor = () => {

    //THESE STATES ARE USED TO UPDATE THE FORM WITH A NEW COMMENT
// WHEN WE FIGURE OUT HOW WE WANT THE APPROVED OR DENIED TO BE INPUTTED (CHARVAR OR TRUE OR FALSE?) WE CAN MAKE ANOTHER STATE HERE.
    const [newSuperMessage, setNewSuperMessage] = useState("");
    const [newStatus, setNewStatus] = useState("");
    const [newDeptHead, setNewDeptHead] = useState("");

 //THIS STATE WILL GRAB THE DATA THAT WE WANT TO DISPLAY
 const [reimbursementForm, setReimbursementForm] = useState([]);


//THIS GET REQUEST DEFINES THE setReimbursementForm TO GRAB ALL THE DATA THAT THE GET REQUEST MAKES
//THE QUERY FOR THIS GET REQUEST IS 'SELECT * FROM formdetails ' CAN BE CHANGE TO SAY WHERE empid = $1 
//BUT I DONT KNOW HOW TO SEND THE CORRECT empid INTO THE QUERY    

    const getForm = () => {
        Axios.get("http://localhost:3001/supervisor").then((response) => {
          setReimbursementForm(response.data);
        });
      };
  // THIS PUT REQUESTS UPDATES THE REQUEST BASED ON THE id SO FIRST IT GETS THE id ON THE REQUEST YOURE UPDATING 
  //THEN IT UPDATES THE COMMENT SECTION. NOTICT THAT IT SAYS comments: newComments BECAUSE THAT IS THE CHANGE
  //WE CAN ADD ANOTHER CHANGE FOR APPROVE OR DENNIED THE EXACT SAME WAY.
  // THE QUERY IS 'UPDATE formdetails SET comments=$2 WHERE id=$1'
  const updateComments = (id) => {
        Axios.put(`http://localhost:3001/supervisor/${id}`, { id: id ,  supermessage: newSuperMessage, status: newStatus, depthead: newDeptHead,}).then(
          (response) => {
            setReimbursementForm(
                reimbursementForm.map((val) => {
                return val.id === id
                  ? {
                      id: val.id,
                      fullname: val.fullname,
                      dept: val.dept,
                      title: val.title,
                      eventname: val.eventname,
                      facilitator: val.facilitator,
                      startdate: val.startdate,
                      enddate: val.enddate,
                      description: val.description,
                      total: val.total,
                      certificationname: val.certificationname,
                      empmessage: val.empmessage,
                      empsignature: val.empsignature,
                      todaysdate: val.todaysdate,

                      status: newStatus,
                      depthead: newDeptHead,
                      supermessage: newSuperMessage,
                    }
                  : val;
              })
            );
          }
        );
      };






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

        <div className="App">
        <div className="information">
            <h3>Supervisor Zone</h3> 
            
{/* button might want to just have it load automatically with the page or make it a tab? */}
<button onClick={getForm}>Pending Requests</button>
      {/* just a link to not get stuck */}

        {/* THIS IS HOW THE GET REQUEST IS DIPLAYED THEY CAN BE ON THE SAME LINE OR IN A PARAGRAPH FORM I JUST LISTED THEM TO TELL THEM APART*/}
        {reimbursementForm.map((val, key) => {
          return (

            
            <div className="form">
              <div>
              <h3>Full Name: {val.fullname}</h3>
                <h3>dept: {val.dept}</h3>
                <h3>title: {val.title}</h3>
                <h3>eventname: {val.eventname}</h3>
                <h3>facilitator: {val.facilitator}</h3>
                <h3>startdate: {val.startdate}</h3>
                <h3>enddate: {val.enddate}</h3>
                <h3>eventname: {val.eventname}</h3>
                <h3>description: {val.description}</h3>
                <h3>total: {val.total}</h3>
                <h3>certificationname: {val.certificationname}</h3>
                <h3>empmessage: {val.empmessage}</h3>
                <h3>empsignature: {val.empsignature}</h3>
                <h3>todaysdate: {val.todaysdate}</h3>
                <h3>status: {val.status}</h3>
                <h3>supermessage: {val.supermessage}</h3>
                <h3>depthead: {val.depthead}</h3>
                <h3>benefitscoor: {val.benifitscoor}</h3>

                <p>---------------------------------</p>
              </div>
              <div>

            <input
                type="text"
                placeholder="pending"
                onChange={(event) => {
                  setNewStatus(event.target.value);
                }}
              />

            <input
                type="text"
                placeholder="depthead yes or no"
                onChange={(event) => {
                  setNewDeptHead(event.target.value);
                }}
              />

              <input
                type="text"
                placeholder="comments"
                onChange={(event) => {
                  setNewSuperMessage(event.target.value);
                }}
              />
              
              <button
                onClick={() => {
                  updateComments(val.id);
                }}
              >
                {" "}
                Update
              </button>

            </div>



              </div>
              
               );
            })}


</div>

  </div>











        </>
    )
}

export default Supervisor