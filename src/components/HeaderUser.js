import { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class HeaderUser extends Component {
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
              <Link className="headerButton" to="/user-home">
                <Button style={{height: '3vw', width: '11vw', backgroundColor: "#ea4444", marginLeft: "1vw"}} variant="warning">Home</Button>
              </Link>
              </Col>

              <Col>
              <Link type="button" className="headerButton" to="/user-about">
                <Button style={{height: '3vw', width: '11vw', marginLeft: "1vw"}} variant="info">About Us</Button>
              </Link>
              </Col>

               

            <Col>
              <Link className="headerButton" to="/public-survey">
                <Button style={{height: '3vw', width: '11vw', marginLeft: "1vw", marginRight: "1vw"}} variant="warning">Show Survey</Button>
              </Link>
              </Col>
                

          </div>
        </Row>

      </>
    );
  }
}

export default HeaderUser;