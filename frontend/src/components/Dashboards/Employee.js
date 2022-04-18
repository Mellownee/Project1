import { Link,Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import moment from "moment";
import Footer from "../Footer";
import Header from "../Header";






function Employee(){

    const [reimbursementForm, setReimbursementForm] = useState([]);
    const [employid, setEmployid] = useState("");
    const [password, setPassword] = useState("");

    const [errorMessages, setErrorMessages] = useState({});
    const errors = {
        employid: "invalid employeeId",
        pass: "invalid password"
      };
    




  const getForm = (event) => {
    event.preventDefault();

    var { employid, pass } = document.forms[0];
    let employData = null;
  


    Axios.get(`http://localhost:3001/reimbursmentform/${employid.value}`).then((response) => {
    employData=response.data[0];
      console.log(employData);     
      if (employData) {
        if (employData.password !== pass.value) {
          // Invalid password
          setErrorMessages({ name: "pass", message: errors.pass });
        }  
    }; setReimbursementForm(response.data);
        }).then((res) => {
          setEmployid("");
          setPassword("");

    });

    
  };



    //THE DELETE SECTION IS ATTACHED TO A BUTTON. I THINK THE .FILTER RELOADS THE PAGE SO THAT THE DELETE IS SHOWN
  //THE DELETE QUERY IS 'DELETE FROM formdetails WHERE id=$1'

  const deleteForm = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setReimbursementForm(
        reimbursementForm.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };


  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

  
//   getBackgroundColor(val.status) {
//     if (val.status === 'approved') {
//         return 'blue';
//     }
//     if (val.status === 'pending') {
//         return 'red';
//     }
//     return 'black';
// };





return (
  <>
  <Header /> 
  <div className="title"> Employee Dashboard</div>
     
        <div className= "container" id="container1">
          <h4> Hello and Welcome To Your Employee Dashboard </h4>
          <h6><Link to="/ReimbursmentForm"> Click To Fill Out A Reimbursment Request</Link></h6>
          <p>Reasons why your request may be in pending status...
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>





    <div className= "containersml1" id="container1">
    <div className="form">
    <p>Enter your employee ID and password to see your reimbursment history. </p>

    <form onSubmit={getForm}>
      <div className="input-container">
        <label>Employee Id:   </label>
        <input type="text" name="employid" required 
        value={employid}
        onChange={(e) => setEmployid(e.target.value)}/>
        
        {renderErrorMessage("uname")}
      </div>
      <div className="input-container">
        <label>Password: </label>
        <input type="password" name="pass" required 
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
        {renderErrorMessage("pass")}
        
      </div>
      <br></br>
      <div className="button-container"> 
        <input class="button" type="submit" />
      </div>
     
    </form>
  </div>

  </div>

  {reimbursementForm.map((val, key) => {
    




          return (
            


            <div className= "container" id="container1">

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
                <div key={val.id}>
                <h6>Date Submitted: {moment(val.todaysdate).format("MM/DD/YYYY")}</h6>
                <p><b>{val.fullname}: </b>{val.dept}, {val.title} <br></br>
                <b>Details of course/event:</b> <br></br>
                Dates Attended: {moment(val.startdate).format("MM/DD/YYYY")}-{moment(val.enddate).format("MM/DD/YYYY")} <br></br>
                <b>{val.eventname}</b> by. <b>{val.facilitator}</b>: <br></br>
                "{val.description}"<br></br>
                {val.certificationname} <b>Total: ${val.total}</b><br></br>
                Comments: {val.empmessage} <br></br>
                <b>Status: {val.status}</b>
                {val.supermessage}

                 </p>
                <p>-------------------------------------------------------------------------------------------------</p>
                <button class="del"
                  onClick={() => {
                    deleteForm(val.id);
                  }}
                >
                  Delete
                </button>
                </div>
              </blockquote>
              </div>
              </div>
              
               );
            })}




<Footer />


</>





);


}


export default Employee;


