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
      <>  
          <Row id="headerBackground" md={4} style={{justifyContent:"space-between"}}>
          
            <Col>
          <Image
            id="headerImage"
            src="cf-logo-horizontal-2-color-white.png"
          />
          </Col>
          <div className="container">

          <Col>
              <Link className="headerButton" to="/">
                <Button style={{height: '3vw', width: '11vw', backgroundColor: "#ea4444", marginLeft: "1vw"}} variant="warning">Home</Button>
              </Link>
              </Col>

              <Col>
              <Link type="button" className="headerButton" to="/about">
                <Button style={{height: '3vw', width: '11vw', marginLeft: "1vw"}} variant="info">About Us</Button>
              </Link>
              </Col>

              <Col>
              <Link className="headerButton" to="/dei-survey">
                <Button onClick={this.props.getActiveSurvey} style={{height: '3vw', width: '11vw', marginLeft: "1vw", marginRight: "1vw"}} variant="warning">Show Survey</Button>
              </Link>
              </Col>

          </div>

          {this.props.auth0.isAuthenticated ? 
            <div  className="container">

              <Col>
              {/* <br></br> */}
              {/* line break but doesn't seem to be noticeable on the page */}
              </Col>

              <Col>
              <Link type="button" className="headerButton" to="/Admin">
                <Button style={{height: '3vw', width: '11vw', marginLeft: "1vw", marginRight:"1vw"}} variant="light">Admin Panel</Button>
              </Link>
              </Col>

              {/* <br></br> */}
            </div>
           : 
           <div  className="container">
           <LoginButton />
           </div>}
        </Row>

      </>
    );
  }
}

export default withAuth0(Header);