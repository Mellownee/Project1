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


// simple get i put the name of the file so i know the right terminal is running
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





//http://localhost:3001/form
app.get('/form',(req,res)=> {
    poolconn.query('SELECT * FROM formdetails ', (error,results)=>{
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
        poolconn.query('INSERT INTO users (empid, username, password) VALUES ($1,$2,$3)',
        [empid, username, password], (error,results)=>{
        if(error){          
            throw error;
        }
        res.status(201).send(`Form added with ID: ${id}`);
    });  
    }); 
});

//http://localhost:3001/forminfo
app.post('/forminfo',(req,res)=>{
    let {empid, fullname, reason, amount, summary} = req.body;
    poolconn.query('INSERT INTO formdetails (empid, fullname, reason, amount, summary) VALUES ($1,$2,$3,$4,$5) RETURNING id',
    [empid, fullname, reason, amount, summary], (error,results)=>{
        if(error){          
            throw error;
        }
        let id =results.rows[0].id;
        res.status(201).send(`Form added with ID: ${id}`);
    });  
});


//PUT SECTION

//http://localhost:3001/update
app.put('/update',(req,res)=>{
    let {id, comments} = req.body;
   //INSERT or UPDATE SQL statements we can use to create or update record in table respectively
    poolconn.query('UPDATE formdetails SET comments=$1 WHERE id=$2',[comments,id],(error,results)=>{
        if(error){
            throw error;
        }
        res.status(200).send(`User id: ${id} details are updated`);
    });
});



//DELETE SECTION

//http://localhost:3001/delete/
app.delete('/delete/:id',(req,res)=>{
    let id = req.params.id;
    poolconn.query('DELETE FROM formdetails WHERE id=$1',[id],(error,results)=>{
        if(error){
            throw error;
        };
        res.status(200).send(`User id: ${id} deleted`);
    });
});




  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})