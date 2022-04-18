import { Link,Outlet } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import moment from "moment";



function Archive(){

//THIS STATE WILL GRAB THE DATA THAT WE WANT TO DISPLAY
const [reimbursementForm, setReimbursementForm] = useState([]);




//THIS GET REQUEST DEFINES THE setReimbursementForm TO GRAB ALL THE DATA THAT THE GET REQUEST MAKES
//THE QUERY FOR THIS GET REQUEST IS 'SELECT * FROM formdetails ' CAN BE CHANGE TO SAY WHERE empid = $1 
//BUT I DONT KNOW HOW TO SEND THE CORRECT empid INTO THE QUERY
const getForm = () => {
    Axios.get("http://localhost:3001/archive").then((response) => {
      setReimbursementForm(response.data);
    });
  };



  return (

    <>


        <button className="pending" onClick={getForm}>Show Archive</button>
        {/* just a link to not get stuck */}
        <div>
         

   
        </div>

        {/* THIS IS HOW THE GET REQUEST IS DIPLAYED THEY CAN BE ON THE SAME LINE OR IN A PARAGRAPH FORM I JUST LISTED THEM TO TELL THEM APART*/}
        {reimbursementForm.map((val, key) => {
          return (

           
            <div className="my-3" >
                   <div className= "container10" id="container1">
                    <h6> The Archive... </h6>
                  </div>

                    <div>
               
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
           
              </div>
                  </div>
                  </div>

          );
          

      
        })}


    </>
    

  );



}



export default Archive;