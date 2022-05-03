import { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react'
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
          
          {this.props.auth0.isAuthenticated ? 
       
            <div  className="container">
              <Col>
              <Link className="headerButtonSurvey" to="/">
                <Button style={{height: '3rem', width: '11rem', backgroundColor: "#ea4444", marginLeft: "1rem", marginRight: "1rem"}} variant="primary">Show Survey</Button>
              </Link>
              </Col>

              <Col>
              <br></br>
              </Col>

              <Col>
              <Link type="button" className="headerButtonAdmin" to="/Admin">
                <Button style={{height: '3rem', width: '11rem', marginLeft: "1rem"}} variant="light">Admin Panel</Button>
              </Link>
              </Col>
              
              <br></br>
            </div>
            
           : <></>}
        </Row>

      </>
    );
  }
}

export default withAuth0(Header);