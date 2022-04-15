import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './Login';
import Home from './Home';
import Admin from './Admin'
import Manager from './Manager';
import Supervisor from './Supervisor';
import UserRegistration from './UserRegistration';
// import Form from './Form';
import Reimbursment from './Requests';
import Dashboard from './Dashboard';








function App(){
    return(
        <>

<BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Admin" element ={<Admin/>}/>
                <Route path="/Manager" element = {<Manager/>}/>
                <Route path="/Supervisor" element ={<Supervisor/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/userregistration" element={<UserRegistration />} />
                <Route path="/reimbursment" element={<Reimbursment />} />
                <Route path="/Dashboard" element={<Dashboard/>}/>
                

            </Routes>
        </BrowserRouter>
  
</>
    );
}
export default App;