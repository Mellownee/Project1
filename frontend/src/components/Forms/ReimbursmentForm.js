// import "./App.css";
import { Link} from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router";





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

<div className="title">Dashboard </div>

     
<nav className="navigate">  
     <Link to="/Employee"> Back to Dashboard</Link> 


 </nav>

    <div className="container" id="container1">

    {/* THEN I PUT THE FUNCTION IN THE FORM INSTEAD OF THE BUTTON BUT IT STILL WORKED IN THE BUTTON
    ALSO THE REQUIED ONLY WORKS WHEN THE SUBMIT IS INPUT NOT BUTTON */}
      <div className="information">
      <form onSubmit={addForm}>

        <div>
        <label>Employee Id: </label>
        <input
          type="text" name="pass" required
          onChange={(event) => {
            setEmpid(event.target.value);
          }}
        />

        <label> Password: </label>
        <input
          type="password" name="pass" required 
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        </div>

        <div>
        <label>Employee Name: </label>
        <input
          type="text" name="pass" required
          onChange={(event) => {
            setFullname(event.target.value);
          }}
        />
        </div>

        <div>
        <label>Department:  </label>
        <input
          type="text" name="pass" required
          onChange={(event) => {
            setDept(event.target.value);
          }}
        />
        </div>

        <div>
        <label>Title: </label>
        <input
          type="text" name="pass" required
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        </div>


        <div>
        <label>Course/Event Name: </label>
        <input
          type="text" name="pass"required
          onChange={(event) => {
            setEventname(event.target.value);
          }}
        />
        </div>

        <div>
        <label>Instructor/Facilitator:  </label>
        <input
          type="text" name="pass" required
          onChange={(event) => {
            setFacilitator(event.target.value);
          }}
        />
        </div>


        <div>
        <label>Start Date:  </label>
        <input
          type="date" name="pass" required
          onChange={(event) => {
            setStartdate(event.target.value);
          }}
        />
        </div>

        <div>
        <label>End Date:  </label>
        <input
          type="date" name="pass" required
          onChange={(event) => {
            setEnddate(event.target.value);
          }}
        />
        </div>

        <div>
        <label> Course/Event Name:  </label>
        <input
          type="text"
          
        />
        <label> Course/Event Description: </label>
        <input
          type="text" name="pass" required
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />

        <label> Cost: </label>
        <input
          type="number"
          
        />
        </div>

        <div>
        <label> Total: </label>
        <input
          type="number" name="pass" required
          onChange={(event) => {
            setTotal(event.target.value);
          }}
        />
        </div>

        <div>
        <label>Certification Name: </label>
        <input
          type="text" name="pass" required
          onChange={(event) => {
            setCertificationname(event.target.value);
          }}
        />
        </div>

        <div>
        <label>Comments:  </label>
        <input
          type="text" name="pass" required
          onChange={(event) => {
            setEmpmessage(event.target.value);
          }}
        />
        </div>



        <div>
        <label>Enter full name to sign: </label>
        <input
          type="text" name="pass" required
          onChange={(event) => {
            setEmpsignature(event.target.value);
          }}
        />
      
        <label> Today's Date:  </label>
        <input
          type="date" name="pass"required
          onChange={(event) => {
            setTodaysdate(event.target.value);
          }}
        />
        </div>



        <button type="submit"> Submit </button>
        </form>
      </div>









        {/* just a link to not get stuck */}


   </div>



        
          
   

  

    </>


  );
  
}

export default ReimbursmentForm;