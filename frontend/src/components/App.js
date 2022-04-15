import {BrowserRouter, Routes, Route} from 'react-router-dom';
//HOME.JS HAS ALL THE LINKS YOU JUST HAVE TO MAKE THE ROUTE PATHS ON THIS PAGE
import Home from './Home';

// USER IMPORT SECTION
import Admin from './Dashboards/Admin';
import BenefitsCoor from './Dashboards/BenefitsCoor';
import Employee from './Dashboards/Employee';
import Manager from './Dashboards/Manager';
import Supervisor from './Dashboards/Supervisor';
import Archive from './Dashboards/Archive';



// FORM IMPORT SECTIONS
import Login from './Forms/Login';
import ReimbursmentForm from './Forms/ReimbursmentForm';
import UserRegistration from './Forms/UserRegistration';







function App(){
    return(
        <>
   
        <BrowserRouter>
            <Routes>

            {/* HOME HAS THE LINKS */}
            <Route path="/" element={<Home />} />


            {/* USER IMPORT SECTION */}
            <Route path="/Admin" element={<Admin />} />
            <Route path="/BenefitsCoor" element={<BenefitsCoor />} />
            <Route path="/Employee" element={<Employee />} />
            <Route path="/Manager" element={<Manager />} />
            <Route path="/Supervisor" element={<Supervisor />} />
            <Route path="/Archive" element={<Archive />} />



            {/* FORM IMPORT SECTIONS */}
            <Route path="/login" element={<Login />} />
            <Route path="/userregistration" element={<UserRegistration />} />
            <Route path="/ReimbursmentForm" element={<ReimbursmentForm />} />


            {/* <Route path="/form" element={<Form />} /> */}


                

            </Routes>
        </BrowserRouter>
  
</>
    );
}
export default App;