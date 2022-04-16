// import "./App.css";
import { Link,Outlet } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";



function Reimbursment() {

  //THIS SECTION HAS THE STATES FOR THE FORM INPUT 
  const [empid, setEmpid] = useState("");
  const [fullname, setFullname] = useState("");
  const [reason, setReason] = useState("");
  const [amount, setAmount] = useState(0);
  const [summary, setSummary] = useState("");

//THESE STATES ARE USED TO UPDATE THE FORM WITH A NEW COMMENT
// WHEN WE FIGURE OUT HOW WE WANT THE APPROVED OR DENIED TO BE INPUTTED (CHARVAR OR TRUE OR FALSE?) WE CAN MAKE ANOTHER STATE HERE.
  const [newComments, setNewComments] = useState("");

  //THIS STATE WILL GRAB THE DATA THAT WE WANT TO DISPLAY
  const [reimbursementForm, setReimbursementForm] = useState([]);


  //THIS POST REQUEST SAYS 'INSERT INTO formdetails (empid, fullname, reason, amount, summary) VALUES ($1,$2,$3,$4,$5) <- THE VALUES THAT USER INPUTS
  //RETURNING id' <-- I LEFT THIS IN BECAUSE I THINK SOMEHOW WE CAN USE THE RETURNING ID TO FILTER THE GET REQUEST LATER.
  
  
  //UNDER THE POST URL THE STATES THAT ARE DEFINED ABOVE ARE LISTED 
  //AFTER THE THEN IS WHERE THE FORM THAT IS SUBMITTED AUTOMATICALLY SHOWS ON THE PAGE *WE MIGHT WANT TO HAVE THE RESULTS SHOW UP ON LOAD*
  const addForm = () => {
    Axios.post("http://localhost:3001/forminfo", {
        empid: empid,
        fullname: fullname,
        reason: reason,
        amount: amount,
        summary: summary,
    }).then(() => {
      setReimbursementForm([
        ...reimbursementForm,
        {
            empid: empid,
            fullname: fullname,
            reason: reason,
            amount: amount,
            summary: summary,
        },
      ]);
    });
  };


//THIS GET REQUEST DEFINES THE setReimbursementForm TO GRAB ALL THE DATA THAT THE GET REQUEST MAKES
//THE QUERY FOR THIS GET REQUEST IS 'SELECT * FROM formdetails ' CAN BE CHANGE TO SAY WHERE empid = $1 
//BUT I DONT KNOW HOW TO SEND THE CORRECT empid INTO THE QUERY
  const getForm = () => {
    Axios.get("http://localhost:3001/form").then((response) => {
      setReimbursementForm(response.data);
    });
  };


  // THIS PUT REQUESTS UPDATES THE REQUEST BASED ON THE id SO FIRST IT GETS THE id ON THE REQUEST YOURE UPDATING 
  //THEN IT UPDATES THE COMMENT SECTION. NOTICT THAT IT SAYS comments: newComments BECAUSE THAT IS THE CHANGE
  //WE CAN ADD ANOTHER CHANGE FOR APPROVE OR DENNIED THE EXACT SAME WAY.
  // THE QUERY IS 'UPDATE formdetails SET comments=$1 WHERE id=$2'
  const updateComments = (id) => {
    Axios.put("http://localhost:3001/update", { comments: newComments, id: id }).then(
      (response) => {
        setReimbursementForm(
            reimbursementForm.map((val) => {
            return val.id === id
              ? {
                  id: val.id,
                  requestno: val.requestno,
                  reason: val.reason,
                  fullname: val.fullname,
                  amount: val.amount,
                  summary: val.summary,
                  comments: newComments,
                }
              : val;
          })
        );
      }
    );
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


  // THIS SECTION IS THE FORM IT CAN BE CHANGED TO ADDED TO HAVE MORE FIELDS 
  //THEY JUST NEED TO BE SET AS A STATE AT THE TOP
  return (

<>

<nav>
  <h1 className="bg-primary1"> Reinbursment Form</h1>
  <nav className="navigate">  
           <Link to="/"> Home</Link>
       </nav>
</nav>


    <div className="container" id="container1">
      <div className="input-container">
        <label>Employee Id:</label>
        <input
          type="text"
          onChange={(event) => {
            setEmpid(event.target.value);
          }}
        />
        
        <label>Full Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setFullname(event.target.value);
          }}
        />
        <label>Reason:</label>
        <input
          type="text"
          onChange={(event) => {
            setReason(event.target.value);
          }}
        />
        <label>Amount:</label>
        <input
          type="number"
          onChange={(event) => {
            setAmount(event.target.value);
          }}
        />
        <label>Summary:</label>
        <input
          type="text"
          onChange={(event) => {
            setSummary(event.target.value);
          }}
        />
           
   
        <button  onClick={addForm}>New Request</button>
      </div>
      <div className="form">
        <button onClick={getForm}>Show Requests</button>
        {/* just a link to not get stuck */}
        <div>
          
            <Outlet />
        </div>

        {/* THIS IS HOW THE GET REQUEST IS DIPLAYED THEY CAN BE ON THE SAME LINE OR IN A PARAGRAPH FORM I JUST LISTED THEM TO TELL THEM APART*/}
        {reimbursementForm.map((val, key) => {
          return (
            <div className="form">
              <div>
                <h3>Request #: {val.requestno}   </h3>
                <h3>Full Name: {val.fullname}</h3>
                <h3>Reason: {val.reason}</h3>
                <h3>Amount: {val.amount}</h3>
                <h3>Summary: {val.summary}</h3>
                <h3>Comments: {val.comments}</h3>
              </div>
              <div>
                <input
                  type="text"
                  placeholder=""
                  onChange={(event) => {
                    // THIS IS CHANGE EVENT WHERE YOU CAN INPUT THE CHANGE YOU WANT IN THE COMMENT
                    setNewComments(event.target.value);
                  }}
                />
                {/*THIS BUTTON TRIGGERS THE PUT REQUEST */}
                <button
                  onClick={() => {
                    updateComments(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>
                  {/*THIS BUTTON TRIGGERS THE DELETE REQUEST */}
                <button
                  onClick={() => {
                    deleteForm(val.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
            
          );
        })}
      </div>
              {/* just a link to not get stuck at the bottom in case theres a long list*/}

      <div>
            <nav>
           
                    <Link to="/"> Home</Link>
           
            </nav>
            <Outlet />
        </div>

    </div>
    </>
  );
}

export default Reimbursment;