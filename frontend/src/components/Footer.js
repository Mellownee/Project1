import React from "react";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h5> Audacity Reimbursment Program</h5>
            <h6>You have the Audacity to work here? <br />
            We have the Audacity to invest in you!</h6>
          </div>
          {/* Column2 */}
       

          <div className="col">
            <h6>Need More Information?</h6>
            <h6>Talk to your direct supervisor?</h6>
          </div>

          {/* Column3 */}
        </div>
        
        
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()}  Audacity Reimbursment Program | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;