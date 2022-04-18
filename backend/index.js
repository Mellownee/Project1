//IMPORTED MODULES
//express writes handlers for requests with different HTTP verbs at different URL paths (routes)
const express = require('express');
const app = express();

//processes data sent through an HTTP request body
const bodyParser = require('body-parser');
//port #
const port = 3001;
//connects to dbconnections
const poolconn = require('./dbconnections');
//Cross-Origin Resource Sharing . It allows us to relax the security applied to an API
const cors = require('cors');

//PARSE SECTION 
//parses incoming JSON requests and puts the parsed data in req. body 
//urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json())
//cors enables the express server to respond to preflight requests basically a OPTION request
app.use(cors());


// simple get request (i put the name of the file so i know the right terminal is running)
app.get("/", (req, res) => {
    res.json({ message: 'Hello, the index.js file is running. Stay calm and drink water' });
  });



//GET SECTION

//http://localhost:3001/login/
app.get('/login/:Uname',(req,res)=> {
    const username =req.params.Uname
    poolconn.query('SELECT * FROM users WHERE username=$1',[username], (error,results)=>{
        if(error){
            throw error;
        }
        res.status(200).json(results.rows);
    })
}); 

//http://localhost:3001/roleById/1
app.get('/roleById/:roleid',(req,res)=>{
    const role_id = req.params.roleid;
    poolconn.query('SELECT * FROM roleid WHERE roleid=$1',[role_id],(error,results)=>{
        if(error){
            throw error;
        }
        res.status(200).json(results.rows);
    })
});





//checks to make sure the same employee id doesnt register again.
//http://localhost:3001/userByName/user1
app.get('/userByEmpId/:empId',(req,res)=>{

    const empid =req.params.empId;
    poolconn.query('SELECT * FROM users WHERE empid=$1',[empid],(error,results)=>{
        if(error){
            throw error;
        }
        res.status(200).json(results.rows);
    })
});



//THIS COULB BE USED IF YOU WANT A PLACE WHERE THEY CAN SEE ALL PREVIOUS REQUESTS

http://localhost:3001/archive
app.get('/archive',(req,res)=> {
    poolconn.query('SELECT * FROM reimbursmentform ORDER BY todaysdate ASC', (error,results)=>{
        if(error){
            throw error;
        }

        res.status(200).json(results.rows);
    })

}); 

//http://localhost:3001/reimbursmentform/:employid
app.get('/reimbursmentform/:employid',(req,res)=> {
    const empid = req.params.employid
    poolconn.query('SELECT * FROM reimbursmentform WHERE empid=$1 ORDER BY status Desc, id asc',[empid], (error,results)=>{
        if(error){
            throw error;
        }

        res.status(200).json(results.rows);
    })

}); 

//http://localhost:3001/supervisor
app.get('/supervisor',(req,res)=> {
    poolconn.query(`SELECT * FROM reimbursmentform WHERE status = 'pending' ORDER BY id asc`, (error,results)=>{
        if(error){
            throw error;
        }

        res.status(200).json(results.rows);
    })

}); 

//http://localhost:3001/departmenthead

app.get('/departmenthead',(req,res)=> {
    poolconn.query(`SELECT * FROM reimbursmentform WHERE status = 'pending' AND depthead = 'yes' ORDER BY id asc`, (error,results)=>{
        if(error){
            throw error;
        }

        res.status(200).json(results.rows);
    })

}); 

//http://localhost:3001/benefitscoor

app.get('/benefitscoor',(req,res)=> {
    poolconn.query(`SELECT * FROM reimbursmentform WHERE status = 'pending' AND benefitscoor = 'yes' ORDER BY id asc`, (error,results)=>{
        if(error){
            throw error;
        }

        res.status(200).json(results.rows);
    })

}); 




//POST SECTION

//http://localhost:3001/registration
app.post('/registration',(req,res)=>{
    let {empid, firstname, lastname, username, password} = req.body;
    poolconn.query('INSERT INTO userdetails (empid, firstname, lastname, username, password) VALUES ($1,$2,$3,$4,$5) RETURNING id',
    [empid, firstname, lastname, username, password], (error,results)=>{
        if(error){          
            throw error;
        }
        let id =results.rows[0].id;
        poolconn.query('INSERT INTO users (empid, username, password, roleid) VALUES ($1,$2,$3,$4)',
        [empid, username, password, 1], (error,results)=>{
        if(error){          
            throw error;
        }
        res.status(201).send(`Form added with ID: ${id}`);
    });  
    }); 
});

//http://localhost:3001/forminfo
// app.post('/forminfo',(req,res)=>{
//     let {empid, fullname, reason, amount, summary} = req.body;
//     poolconn.query('INSERT INTO formdetails (empid, fullname, reason, amount, summary) VALUES ($1,$2,$3,$4,$5) RETURNING id',
//     [empid, fullname, reason, amount, summary], (error,results)=>{
//         if(error){          
//             throw error;
//         }
//         let id =results.rows[0].id;
//         res.status(201).send(`Form added with ID: ${id}`);
//     });  
// });

//http://localhost:3001/reimbursmentform
app.post('/reimbursmentform',(req,res)=>{
    let {empid, password, fullname, dept, title, eventname, facilitator, startdate, enddate, description, total, empmessage, empsignature, todaysdate, certificationname  } = req.body;
    poolconn.query('INSERT INTO reimbursmentform (empid, password, fullname, dept, title, eventname, facilitator, startdate, enddate, description, total, empmessage, empsignature, todaysdate, certificationname, status ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16) RETURNING id',
    [empid, password, fullname, dept, title, eventname, facilitator, startdate, enddate, description, total, empmessage, empsignature, todaysdate, certificationname, "pending"  ], (error,results)=>{
        if(error){          
            throw error;
        }
        let id =results.rows[0].id;
        res.status(201).send(`Form added with ID: ${id}`);
    });  
});





//PUT SECTION

//http://localhost:3001/update
app.put('/supervisor/:Id',(req,res)=>{
    const id =req.params.Id;
    let {status, supermessage, depthead} = req.body;
   //INSERT or UPDATE SQL statements we can use to create or update record in table respectively
    //SINCE WERE CHECKING THE ID MATCHES FIRST IT NEEDS TO BE $1 THIS GOT ME STUCK FOR 4 DAYS!!!! 
   poolconn.query('UPDATE reimbursmentform SET status= $2, supermessage=$3, depthead=$4 WHERE id=$1',[id, status, supermessage,depthead],(error,results)=>{
        if(error){
            console.log(error);
            throw error;
        }
        res.status(200).send(`User id: ${id} details are updated`);
    });
});


//http://localhost:3001/update
app.put('/manager/:Id',(req,res)=>{
    const id =req.params.Id;
    let {status, supermessage, benefitscoor} = req.body;
   //INSERT or UPDATE SQL statements we can use to create or update record in table respectively
    //SINCE WERE CHECKING THE ID MATCHES FIRST IT NEEDS TO BE $1 THIS GOT ME STUCK FOR 4 DAYS!!!! 
   poolconn.query('UPDATE reimbursmentform SET status= $2, supermessage=$3, benefitscoor=$4 WHERE id=$1',[id, status, supermessage,benefitscoor],(error,results)=>{
        if(error){
            console.log(error);
            throw error;
        }
        res.status(200).send(`User id: ${id} details are updated`);
    });
});


//http://localhost:3001/update
app.put('/benefits/:Id',(req,res)=>{
    const id =req.params.Id;
    let {status, supermessage } = req.body;
   //INSERT or UPDATE SQL statements we can use to create or update record in table respectively
    //SINCE WERE CHECKING THE ID MATCHES FIRST IT NEEDS TO BE $1 THIS GOT ME STUCK FOR 4 DAYS!!!! 
   poolconn.query('UPDATE reimbursmentform SET status= $2, supermessage=$3 WHERE id=$1',[id, status, supermessage],(error,results)=>{
        if(error){
            console.log(error);
            throw error;
        }
        res.status(200).send(`User id: ${id} details are updated`);
    });
});













//DELETE SECTION

//http://localhost:3001/delete/
app.delete('/delete/:id',(req,res)=>{
    let id = req.params.id;
    poolconn.query('DELETE FROM reimbursmentform WHERE id=$1',[id],(error,results)=>{
        if(error){
            throw error;
        };
        res.status(200).send(`User id: ${id} deleted`);
    });
});




  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})