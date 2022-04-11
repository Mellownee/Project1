import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import UserRegistration from './UserRegistration';
// import Form from './Form';
import Reimbursment from './Requests';


function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/userregistration" element={<UserRegistration />} />
                {/* <Route path="/form" element={<Form />} /> */}
                <Route path="/reimbursment" element={<Reimbursment />} />

            </Routes>
        </BrowserRouter>
    );
}
export default App;