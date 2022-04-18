import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
  return (

    <header className="bg-primary1 text-light mb-4 py-3 flex-row align-center">
    <div className="container flex-row justify-space-between-lg justify-center align-center">        
    <Link className="text-light" to="/Login">
          <h1 className="m-0">Logout</h1>
        </Link>
  
      </div>
    </header>

    
  );
};

export default Header;