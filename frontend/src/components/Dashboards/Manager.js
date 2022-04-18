import { Link } from "react-router-dom"
import { useState } from "react";
import Axios from "axios";
import ManagerHeader from "./Headers/ManagerHeader"
import moment from "moment";
import Header from "../Header";
import Footer from "../Footer";


const Manager = () => {

//THESE STATES ARE USED TO UPDATE THE FORM WITH A NEW COMMENT
// WHEN WE FIGURE OUT HOW WE WANT THE APPROVED OR DENIED TO BE INPUTTED (CHARVAR OR TRUE OR FALSE?) WE CAN MAKE ANOTHER STATE HERE.
    const [newSuperMessage, setNewSuperMessage] = useState("");
    const [newStatus, setNewStatus] = useState("");
    const [newBenifitsCoor, setNewBenifitsCoor] = useState("");

 //THIS STATE WILL GRAB THE DATA THAT WE WANT TO DISPLAY
    const [reimbursementForm, setReimbursementForm] = useState([]);


    
//THIS GET REQUEST DEFINES THE setReimbursementForm TO GRAB ALL THE DATA THAT THE GET REQUEST MAKES
//THE QUERY FOR THIS GET REQUEST IS 'SELECT * FROM formdetails ' CAN BE CHANGE TO SAY WHERE empid = $1 
//BUT I DONT KNOW HOW TO SEND THE CORRECT empid INTO THE QUERY

    const getForm = () => {
        Axios.get("http://localhost:3001/departmenthead").then((response) => {
          setReimbursementForm(response.data);
        });
      };
  // THIS PUT REQUESTS UPDATES THE REQUEST BASED ON THE id SO FIRST IT GETS THE id ON THE REQUEST YOURE UPDATING 
  //THEN IT UPDATES THE COMMENT SECTION. NOTICT THAT IT SAYS comments: newComments BECAUSE THAT IS THE CHANGE
  //WE CAN ADD ANOTHER CHANGE FOR APPROVE OR DENNIED THE EXACT SAME WAY.
  // THE QUERY IS 'UPDATE formdetails SET comments=$2 WHERE id=$1'

      const updateComments = (id) => {
        Axios.put(`http://localhost:3001/manager/${id}`, { id: id ,  supermessage: newSuperMessage, status: newStatus, benifitscoor: newBenifitsCoor,}).then(
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
                      depthead: val.depthead,

                      status: newStatus,
                      benifitscoor: newBenifitsCoor,
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
        <Header />
        <ManagerHeader/>     
     <div className= "container" id="container1">
       <h3> Hello and Welcome To Your Manager Dashboard </h3>
       <p>GUIDELINES FOR RESPONDING TO REIMBURSMENT REQUESTS
         
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
         nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
         velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
         sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
     </div>        
        <div className="App">
        <div className="information">
            
{/* button might want to just have it load automatically with the page or make it a tab? */}
      <button onClick={getForm}>Pending Requests</button>
      {/* just a link to not get stuck */}

        {/* THIS IS HOW THE GET REQUEST IS DIPLAYED THEY CAN BE ON THE SAME LINE OR IN A PARAGRAPH FORM I JUST LISTED THEM TO TELL THEM APART*/}
        {reimbursementForm.map((val, key) => {
          return (

            
            <div className="form">

                <br></br>
                
                <blockquote
                className="p-4"
                style={{
                  fontSize: '1.0rem',
                  fontStyle: 'italic',
                  border: '2px dotted #1a1a1a',
                  lineHeight: '1.5',
                }}
              >
                <h5>Date Submitted: {moment(val.todaysdate).format("MM/DD/YYYY")}</h5>
                <p><b>{val.fullname}: </b>{val.dept}, {val.title} <br></br>
                <b>Details of course/event:</b> <br></br>
                Dates Attended: {moment(val.startdate).format("MM/DD/YYYY")}-{moment(val.enddate).format("MM/DD/YYYY")} <br></br>
                <b>{val.eventname}</b> by. <b>{val.facilitator}</b>: <br></br>
                "{val.description}"<br></br>
                {val.certificationname} <b>Total: ${val.total}</b><br></br>
                Employee Comments: {val.empmessage} <br></br>
                <b>Status: {val.status}</b><br></br>
                <b>Admin Comments: {val.supermessage}</b>
                </p>
                <p>-------------------------------------------------------------------------------------------------</p>
              </blockquote>
              <div>
              <h6>Enter Pending Aproved or Denied?</h6>
            <input
                type="text"
                placeholder="REQUIRED"
                required
                onChange={(event) => {
                  setNewStatus(event.target.value);
                }}
              />
                <h6>Does The Benefits Coordinator Need to Review?</h6>
            <input
                type="text"
                placeholder="YES or NO"
                required
                onChange={(event) => {
                    setNewBenifitsCoor(event.target.value);
                }}
              />
                <h6>Leave a Comment</h6>
              <input
                type="text"
                placeholder="REQUIRED"
                required
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
  <Footer />

  </>



    )
}

export default Manager