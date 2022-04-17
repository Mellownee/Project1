import React, { useState} from "react";


import { Link,Outlet,useNavigate} from "react-router-dom";
// import "../styles.css";

import axios from 'axios';

function Login() {
    /**
     * 1. Declare React States for error messages and isSubmitted
        	We will declare two React states as follows:

		        errorMessages: Store an object with an error message and the name of the field.
		        isSubmitted: boolean value to indicate if the form is successfully submitted or not.
     */
  // React States
  const [errorMessages, setErrorMessages] = useState({});

  const navigate = useNavigate();

// function BenefitsCoor() {
// this.props.location('/BenefitsCoor')
// }

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
   /**
   * 
   * Add function to handle form submit
        To achieve login functionality, we need to create a JS function to handle form submission with validations. 
        The handleSubmit() function accesses the event object of the form element, event.preventDefault() code 
        avoids default form submit action which includes reloading of the page.} event 
   */
  const handleSubmit = (event) => {
    
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    let userData = null;
    let roleData = null;
    // Find user login info
  
  const baseURL =`http://localhost:3001/login/${uname.value}`;
  //console.log('Results before call ------'+uname.value+'-----'+pass.value);

  axios.get(baseURL).then((response) => {
        userData=response.data[0];
        //console.log(userData);
    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
          //console.log('Checking role');
          //Check role 
          axios.get(`http://localhost:3001/roleById/${userData.roleid}`).then((res)=>{
                roleData= res.data[0];
                if(roleData){
                    if(roleData.role === 'supervisor'){
                      navigate("/Supervisor");
                    }
                    if (roleData.role === 'manager'){
                      navigate("/Manager");
                    }
                    if (roleData.role === 'benefitscoor'){
                     navigate("/BenefitsCoor");
                    
                    }
                    if (roleData.role === 'employee'){
                      navigate("/Employee");
                    }
                }
                
          })
         
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
    });
  };


  

  // Generate JSX code for error message
  //The renderErrorMessage function returns JSX code for displaying the error message associated with the field name.
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  // We will add JSX code for the HTML form with input type=”text” for both user name and password along with 
  // input type=”submit” to allow users to submit the form.
  // Additionally, we will also add error messages below every form input element.
  const renderForm = (
   <>

<nav className="navigate">  
          <Link to="/"> Home</Link> 
      </nav>
            <Outlet />

    <div className="container" id="container1">
    
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
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
        {/* Remove home change to registration page? */}
        <div>
       
     
        </div>
      </form>
    </div>
    </>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {renderForm}
      </div>
    </div>

  );
}

export default Login;
