import React from 'react';



const ManagerHeader = () => {
  return (
    <header className="bg-primary text-light py-1 flex-row align-center ">
      <div className="container flex-row justify-space-between-lg justify-center align-center ">
        
     <h1 className="p-4"
                style={{
                  fontSize: '2.0rem',
                  fontStyle: 'italic',
                  
                }}>Manager Dashboard</h1>

        <p className="m-0"></p>
      
      </div>
    </header>

    
  );
};

export default ManagerHeader;