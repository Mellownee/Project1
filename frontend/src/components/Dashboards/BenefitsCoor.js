import { Link,Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
// import { Link,Outlet } from "react-router-dom";
import Axios from "axios";
import moment from "moment";
import BenefitsCoorHeader from "./Headers/BenefitsCoorHeader";
import Header from "../Header";
import Footer from "../Footer";
import Archive from "./Archive";




const BenefitsCoor= () => {



    const [newSuperMessage, setNewSuperMessage] = useState("");
    const [newStatus, setNewStatus] = useState("");

    
    const [reimbursementForm, setReimbursementForm] = useState([]);



    

    useEffect(() =>{
      Axios.get("http://localhost:3001/benefitscoor").then((response) => {
          setReimbursementForm(response.data);
        });
      });
    
      const updateComments = (id) => {
        Axios.put(`http://localhost:3001/benefits/${id}`, { id: id ,  supermessage: newSuperMessage, status: newStatus}).then(
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
        <BenefitsCoorHeader />

        <div className= "container" id="container1">
       <h3> Hello and Welcome To Your Benefits Coordinator Dashboard </h3>
       <p>GUIDELINES FOR RESPONDING TO REIMBURSMENT REQUESTS</p>
         
       <p>Ensure that forms are field out entirely or push them back to the employee.
           Reference the current contract for a thorough explanation of course/ job title 
           authorization. Follow all guidelines as explained under the contract. 
           Any rejection should include an explanation why.</p>
     </div>

        <div className="App">
        <div className="information">
            
  
      {/* <button className="pending" onClick={getForm}>Pending Requests</button> */}
      {/* just a link to not get stuck */}


  {reimbursementForm.map((val, key) => {
          return (

            
            <div className="form">
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
                <p>-------------------------------------------------------------------------------------------------</p>
                <b>Status: {val.status}</b><br></br>
                Supervisor Review: Yes <br></br>
                Manager Review: {val.depthead}<br></br>
                Benefits Coordinator Review: {val.benefitscoor} <br></br>
                <b>Comments: {val.supermessage}</b>
                </p>
                <p>-------------------------------------------------------------------------------------------------</p>
              </blockquote>
              <div className= "containersml3">

              <div>
              <h6>Enter Pending, Approved or Denied?</h6>

            <input className="update"
                type="text"
                placeholder="REQUIRED"
                required
                onChange={(event) => {
                  setNewStatus(event.target.value);
                }}
              />

            <h6>Leave a Comment</h6>
              <textarea rows="3" cols="50"
                type="text"
                placeholder="REQUIRED"
                required
                onChange={(event) => {
                  setNewSuperMessage(event.target.value);
                }}
              />
              
              <button className="button" 
                onClick={() => {
                  updateComments(val.id);
                }}
              >
                Update
              </button>

            </div>
</div>


              </div>
              
               );
            })}


</div>

  </div>
  <h3 className="card-header bg-dark text-light p-2 m-0"></h3>
  <Archive />
  <Footer />

  </>






);










}

export default BenefitsCoor;