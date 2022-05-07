import { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

class HeaderUser extends Component {
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
          <Link className="headerButton" to="/user-home">
            <Button style={{ height: '3vw', width: '11vw', backgroundColor: "#ea4444", marginLeft: "1vw", fontSize: "1vw" }} variant="warning">Home</Button>
          </Link>
        </div>

        <div>
          <Link type="button" className="headerButton" to="/user-about">
            <Button style={{ height: '3vw', width: '11vw', marginLeft: "1vw", fontSize: "1vw" }} variant="info">About Us</Button>
          </Link>
        </div>



        <div>
          <Link className="headerButton" to="/public-survey">
            <Button style={{ height: '3vw', width: '11vw', marginLeft: "1vw", marginRight: "1vw", fontSize: "1vw" }} variant="warning">Survey</Button>
          </Link>
        </div>

      </div>
    );
  }
}

export default HeaderUser;