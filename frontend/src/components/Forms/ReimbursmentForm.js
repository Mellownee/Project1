// import "./App.css";
import { Link} from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router";
import Footer from "../Footer";
import Header from "../Header";





function ReimbursmentForm() {
  const [empid, setEmpid] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [dept, setDept] = useState(0);
  const [title, setTitle] = useState("");
  const [eventname, setEventname] = useState("");
  const [facilitator, setFacilitator] = useState("");
  const [startdate, setStartdate] = useState("");
  const [enddate, setEnddate] = useState("");
  const [description, setDescription] = useState("");
  const [total, setTotal] = useState("");
  const [certificationname, setCertificationname] = useState("");
  const [empmessage, setEmpmessage] = useState("");
  const [empsignature, setEmpsignature] = useState("");
  const [todaysdate, setTodaysdate] = useState("");



// HOW TO NAVIGATE ON CLICK
  const navigate = useNavigate();



  const addForm = (event) => {
    event.preventDefault();


      Axios.post("http://localhost:3001/reimbursmentform", {
          empid: empid,
          password:password,
          fullname: fullname,
          dept: dept,
          title: title,
          eventname: eventname,
          facilitator: facilitator,
          startdate: startdate,
          enddate: enddate,
          description: description,
          total: total,
          certificationname: certificationname,
          empmessage: empmessage,
          empsignature: empsignature,
          todaysdate: todaysdate,
        
        }).then((res) => {
          console.log(res);
          navigate("/Employee");
          
        });
      };
    
// ADD THE CONST TO THE ADD FORM FUNCTION










  return (

<>
<Header /> 

     

 <div className= "container" id="container1">
          <h3> Reimbursment Request Form </h3>
          
          <p>Guidelines for filling out the form....
            
            You are responsible for keeping track of the amounts previously approved. 
            Complete form entirely. For more information, see Education section of current contract,
            contact your direct supervisor or contact the Benefits Coordination Team via email at benefits@audacity.com.
            Please allow up to 72 hours for response from the Benefits Coordination Team. </p>
        </div>
        <h5 className="backlink"> <Link to="/Employee"> Back to Dashboard</Link> </h5>


    <div className="containermed1" id="container1">

    {/* THEN I PUT THE FUNCTION IN THE FORM INSTEAD OF THE BUTTON BUT IT STILL WORKED IN THE BUTTON
    ALSO THE REQUIED ONLY WORKS WHEN THE SUBMIT IS INPUT NOT BUTTON */}
      <div className="information">
      <form onSubmit={addForm}>

        <div>
        <label class="col-sm-2">Employee Id: </label> 
        <input className="rf"
          type="text" name="pass" required
          onChange={(event) => {
            setEmpid(event.target.value);
          }}
        />
</div>

<div>
        <label class="col-sm-2" > Password: </label>
        <input  className="rf"
          type="password" name="pass" required 
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        </div>

        <div>
        <label class="col-sm-2">Employee Name: </label>
        <input className="rf"
          type="text" name="pass" required
          onChange={(event) => {
            setFullname(event.target.value);
          }}
        />
        </div>

<div>
        <label class="col-sm-2">Department:  </label>
        <input className="rf"
          type="text" name="pass" required
          onChange={(event) => {
            setDept(event.target.value);
          }}
        />
        </div>

        <div>
        <label class="col-sm-2">Title: </label>
        <input className="rf"
          type="text" name="pass" required
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        </div>


        <div>
        <label class="col-sm-2">Course/Event Name: </label>
        <input className="rf"
          type="text" name="pass"required
          onChange={(event) => {
            setEventname(event.target.value);
          }}
        />
        </div>

        <div>
        <label class="col-sm-2">Instructor/Group:  </label>
        <input className="rf"
          type="text" name="pass" required
          onChange={(event) => {
            setFacilitator(event.target.value);
          }}
        />
        </div>


        <div>
        <label class="col-sm-2">Start Date:  </label>
        <input className="rf"
          type="date" name="pass" required
          onChange={(event) => {
            setStartdate(event.target.value);
          }}
        />
        </div>

        <div>
        <label class="col-sm-2">End Date:  </label>
        <input className="rf"
          type="date" name="pass" required
          onChange={(event) => {
            setEnddate(event.target.value);
          }}
        />
        </div>

        <div>
        <label class="col-sm-2"> Course/Event Name:  </label>
        <input className="rf"
          type="text"
          
        />
        </div>

<div>
        <label class="col-sm-2"> Course/Event Description: </label>
        <textarea rows="5" cols="50" className="date"
          type="text" name="pass" required
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
</div>

<div>
        <label class="col-sm-2"> Cost: </label>
        <input className="rf"
          type="number"
          
        />
        </div>

        <div>
        <label class="col-sm-2"> Total: </label>
        <input className="rf"
          type="number" name="pass" required
          onChange={(event) => {
            setTotal(event.target.value);
          }}
        />
        </div>

        <div>
        <label class="col-sm-2">Certification Name: </label>
        <input className="rf"
          type="text" name="pass" 
          onChange={(event) => {
            setCertificationname(event.target.value);
          }}
        />
        </div>

        <div>
        <label class="col-sm-2">Comments:  </label>
        <textarea rows="5" cols="50" className="rf"
          type="text" name="pass" required
          onChange={(event) => {
            setEmpmessage(event.target.value);
          }}
        />
        </div>



        <div>
        <label class="col-sm-2">Enter full name to sign: </label>
        <input className="rf"
          type="text" name="pass" required
          onChange={(event) => {
            setEmpsignature(event.target.value);
          }}
        />
      </div>

<div>
        <label class="col-sm-2"> Today's Date:  </label>
        <input className="rf"
          type="date" name="pass"required
          onChange={(event) => {
            setTodaysdate(event.target.value);
          }}
        />
        </div>



        <button className="button" type="submit" class="button"> Submit </button>
        </form>
      </div>









        {/* just a link to not get stuck */}

   </div>
   <Footer />


        
          
   

  

    </>


  );
  
}

export default ReimbursmentForm;