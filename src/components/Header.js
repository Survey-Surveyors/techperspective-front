import { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react'
import LoginButton from './LoginButton';
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Header extends Component {
  handleLoginClick = () => {
    console.log("Yay! You logged in");
  };

  handleLogOutClick = () => {
    console.log("See ya! You logged out");
  };

  render() {
    return (
      <div className="header-container" id="headerBackground" md={4}>
          <div>
            <Image
              id="headerImage"
              src="cf-logo-horizontal-2-color-white.png"
            />
          </div>

            <div>
              <Link className="headerButton" to="/">
                <Button style={{ height: '3vw', width: '10vw', backgroundColor: "#ea4444", marginLeft: "1vw" }} variant="warning">Home</Button>
              </Link>
            </div>

            <div>
              <Link type="button" className="headerButton" to="/about">
                <Button style={{ height: '3vw', width: '10vw', marginLeft: "1vw" }} variant="info">About Us</Button>
              </Link>
            </div>

            <div>
              <Link className="headerButton" to="/dei-survey">
                <Button style={{ height: '3vw', width: '12vw', marginLeft: "1vw", marginRight: "1vw" }} variant="warning">Show Survey</Button>
              </Link>
            </div>

          {this.props.auth0.isAuthenticated ?
            


              <div>
                <Link type="button" className="headerButton" to="/Admin">
                  <Button style={{ height: '3vw', width: '11vw', marginLeft: "1vw", marginRight: "1vw" }} variant="light">Admin Panel</Button>
                </Link>
              </div>
  
            :
            
              <LoginButton />
            }
      

      </div>
    );
  }
}

export default withAuth0(Header);