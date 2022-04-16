import React, { useState} from "react";
import { Link,Outlet } from "react-router-dom";

import axios from 'axios';

function UserRegistration() {

    // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState();
  

  const errors = {
    empid: "this eployee id is already registered",
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    
    //Prevent page reload
    event.preventDefault();

    var { empid, firstname,lastname, username,password } = document.forms[0];

    let userDetails ={
        empid: empid.value,
        firstname: firstname.value,
        lastname : lastname.value,
        username: username.value,
        password: password.value

    };
    //TODO -- URL -- http://localhost:3001/registeruser and pass data in request body

    // COULDNT GET THIS TO WORK SO I COMMENTED IT OUT FOR NOW

    axios.get(`http://localhost:3001/userByEmpId/${empid.value}`).then((response) => {
       let  userData=response.data;
       if(userData){
           setErrorMessages({ name :"employeeid", message: errors.empid});
       
        axios.post(`http://localhost:3001/registration`,userDetails).then((response)=>{
            setIsSubmitted(true);
        })
       }
    });
    
  };

  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

    /***/

    const renderForm = (

     
        <div className="container" id="container1">
          <form onSubmit={handleSubmit}>
             <div className="input-container">
              <label>Employee Id # </label>
              <input type="text" name="empid" required />
              {renderErrorMessage("empid")}
            </div>
            <div className="input-container">
              <label>First Name </label>
              <input type="text" name="firstname" required />
            </div>
            <div className="input-container">
              <label>Last Name </label>
              <input type="text" name="lastname" required />
            </div>
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="username" required />
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="pass" name="password" required />
              {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
            <div>
         
                <Outlet />
            </div>
          </form>
        </div>
      );
    return(

    <div className="app">
      <div className="login-form">
     
        <div className="title">User Registration</div>
        <nav className="navigate">  
           <Link to="/"> Home</Link>
       </nav>
        {isSubmitted ? 
                     <div>User Registered successfully </div>   
        : renderForm}
      </div>
    </div>
    );

}



export default UserRegistration;