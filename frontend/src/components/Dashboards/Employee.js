import { Link,Outlet } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";







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

  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );


return (
    <div className="App">

    <div className="form">
    <form onSubmit={getForm}>
      <div className="input-container">
        <label>EmployeeId </label>
        <input type="text" name="employid" required />
        {renderErrorMessage("uname")}
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="password" name="pass" required />
        {renderErrorMessage("pass")}
      </div>
      <div className="button-container"> 
        <input type="submit" />
      </div>
     
    </form>
  </div>
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
                <p>---------------------------------</p>



              </div>
              </div>
              
               );
            })}




  </div>







);


}


export default Employee;



