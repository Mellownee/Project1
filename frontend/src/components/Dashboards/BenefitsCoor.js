import { Link,Outlet } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import moment from "moment";


function BenefitsCoor(){



    const [newSuperMessage, setNewSuperMessage] = useState("");
    const [newStatus, setNewStatus] = useState("");
    const [newBenefitsCoor, setNewBenefitsCoor] = useState("");

    
    const [reimbursementForm, setReimbursementForm] = useState([]);



    

    const getForm = () => {
        Axios.get("http://localhost:3001/benefitscoor").then((response) => {
          setReimbursementForm(response.data);
        });
      };
    
      const updateComments = (id) => {
        Axios.put(`http://localhost:3001/benefits/${id}`, { id: id ,  supermessage: newSuperMessage, status: newStatus, benefitscoor: newBenefitsCoor,}).then(
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
                      benefitscoor: newBenefitsCoor,
                      supermessage: newSuperMessage,
                    }
                  : val;
              })
            );
          }
        );
      };






      return (
        <div className="App">
        <div className="information">
            <h3>BenefitsCoor Zone</h3> 
            
  
      <button onClick={getForm}>Pending Requests</button>
      {/* just a link to not get stuck */}
      <div>
          <nav>
         
                  <Link to="/"> Home</Link>
         
          </nav>
          <Outlet />
      </div>


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
                <b>Status: {val.status}</b>
                {val.supermessage}
                </p>
                <p>-------------------------------------------------------------------------------------------------</p>
              </blockquote>
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
                placeholder="benefitcoor? yes or no"
                onChange={(event) => {
                    setNewBenefitsCoor(event.target.value);
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







);










}

export default BenefitsCoor;