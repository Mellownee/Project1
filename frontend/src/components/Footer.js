import React from "react";


function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4> Audacity Reimbursment Program</h4>
            <h1 className="list-unstyled">
            
              <li>Seattle, USA</li>
              <li>123 Streeet South North</li>
            </h1>
          </div>
          {/* Column2 */}
       

          <div className="col">
            <h4>Contact us</h4>
            <ui className="list-unstyled">
            <li>342-420-6969</li>
            </ui>
          </div>

          <div className="col">
            <h4>feedback</h4>
            <ui className="list-unstyled">
              <li><a href="https://www.facebook.com/" class="fa fa-facebook"></a></li>
              <li><a href="https://www.instagram.com/?hl=en" class="fa fa-instagram"></a></li>
              <li><a href="#" class="fa fa-twitter"></a></li>
            </ui>
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