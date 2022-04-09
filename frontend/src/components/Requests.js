// import "./App.css";
import { Link,Outlet } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

function Reimbursment() {
  const [empid, setEmpid] = useState("");
  const [fullname, setFullname] = useState("");
  const [reason, setReason] = useState("");
  const [amount, setAmount] = useState(0);
  const [summary, setSummary] = useState("");


  const [newComments, setNewComments] = useState("");

  const [reimbursementForm, setReimbursementForm] = useState([]);

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

  const getForm = () => {
    Axios.get("http://localhost:3001/form").then((response) => {
      setReimbursementForm(response.data);
    });
  };

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

  const deleteForm = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setReimbursementForm(
        reimbursementForm.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

  return (
    <div className="App">
      <div className="information">
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
        <button onClick={addForm}>New Request</button>
      </div>
      <div className="form">
        <button onClick={getForm}>Show Requests</button>
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
                <h3>Request #: {val.requestno}</h3>
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
                    setNewComments(event.target.value);
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
  );
}

export default Reimbursment;