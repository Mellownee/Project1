import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
  return (

    <header className="bg-primary1 text-light mb-3 py-1 flex-row align-center">
    <div className="container flex-row justify-space-between-lg justify-center align-center">        
    <Link className="text-light" to="/Login">
          <h1 className="p-4"
                style={{
                  fontSize: '2.0rem',
                  fontStyle: 'italic',
                  
                }}>Logout</h1>
        </Link>
  
      </div>
    </header>

    
  );
};

export default Header;