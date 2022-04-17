import { Link,Outlet } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import moment from "moment";







function Employee(){

    const [reimbursementForm, setReimbursementForm] = useState([]);


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
  
        setReimbursementForm(response.data);

    
        };

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
return (
  <>
  <div className="title"> Employee Dashboard</div>
     
     <nav className="navigate">  
          <Link to="/"> Home</Link>
      </nav>
        <div className= "container" id="container1">
          <h3> Hello and Welcome To Your Employee Dashboard </h3>
          <h5><Link to="/ReimbursmentForm"> Click To Fill Out A Reimbursment Request</Link></h5>
          <p>Reasons why your request may be in pending status...
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>





    <div className= "container" id="container1">
    <div className="form">
    <h5>Enter your employee ID and password to see your reimbursment history. </h5>

    <form onSubmit={getForm}>
      <div className="input-container">
        <label>Employee Id:   </label>
        <input type="text" name="employid" required />
        {renderErrorMessage("uname")}
      </div>
      <div className="input-container">
        <label>Password: </label>
        <input type="password" name="pass" required />
        {renderErrorMessage("pass")}
      </div>
      <div className="button-container"> 
        <input type="submit" />
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
                <h5>Date Submitted: {moment(val.todaysdate).format("MM/DD/YYYY")}</h5>
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
                <button
                  onClick={() => {
                    deleteForm(val.id);
                  }}
                >
                  Delete
                </button>

              </blockquote>
              </div>
              </div>
              
               );
            })}




  

</>





);


}


export default Employee;



