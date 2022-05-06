import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';


class Footer extends Component {
  render(){
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="Footer">
        <Navbar.Brand id="foot">©Codefellows and Survey Surveyors</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;