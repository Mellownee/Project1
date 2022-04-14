import { Link,Outlet } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";


function Supervisor(){


    const [newSuperMessage, setNewSuperMessage] = useState("");
    const [newStatus, setNewStatus] = useState("");
    const [newDeptHead, setNewDeptHead] = useState("");

    
    const [reimbursementForm, setReimbursementForm] = useState([]);



    

    const getForm = () => {
        Axios.get("http://localhost:3001/supervisor").then((response) => {
          setReimbursementForm(response.data);
        });
      };
    
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
        <div className="App">
        <div className="information">
            <h3>Supervisor Zone</h3> 
            
  
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







);


}

export default Supervisor;
