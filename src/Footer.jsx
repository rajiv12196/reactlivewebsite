import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Social Network</h4>
            <ui className="list-unstyled">
              <li><TwitterIcon/>Twitter</li>
              <li><WhatsAppIcon/>WhatsApp</li>
              <li><FacebookIcon/>Facebook</li>
            </ui>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Contact</h4>
            <ui className="list-unstyled">
              <li>About Us</li>
              <li>Hire Us</li>
              <li>Join Us</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Legal</h4>
            <ui className="list-unstyled">
              <li>Privacy</li>
              <li>Policy</li>
             
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} The Dzone | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;