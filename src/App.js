import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Survey from './components/Survey';
import Admin from './components/Admin';
import Results from './components/Results';
import AboutUs from './About-components/AboutUs';
import Footer from './components/Footer';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import axios from "axios";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeSurvey: null,
      surveyData: [],
      surveyId: null,
      error: false,
      surveyToGraph: []
    }
  }

  graphResults = (obj) => {
    this.setState({ surveyToGraph: obj })
  }

  /* Grab survey data from server, which grabs from db */
  getSavedSurvey = async () => {
    if (this.props.auth0.isAuthenticated) {
      const tokenResponse = await this.props.auth0.getIdTokenClaims();
      const jwt = tokenResponse.__raw;
      console.log('User: ', this.props.auth0.user.sub);

      const axiosRequestConfig = {
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/survey',
        headers: { "Authorization": `Bearer ${jwt}` }
      }

      try {
        let result = await axios(axiosRequestConfig);
        let userSurveys = result.data.filter( (userEmail) => userEmail.ownerID === this.props.auth0.user.email); 
        console.log('userSurveys: ', userSurveys);
        this.setState({
           surveyData: userSurveys,
           error: false 
          });
        //surveryData: result.data
        // this.state.surveyData.map((x) => {
        //   console.log(x);
        // })
        // this.setState({ error: false })
      } catch (error) {
        console.error("Data receive error: " + error);
        this.setState({ error: true });
      }
    }
  }

  /* Ping server to delete survey data from DB */
  deleteSavedSurvey = async (id) => {
    if (this.props.auth0.isAuthenticated) {
      const tokenResponse = await this.props.auth0.getIdTokenClaims();
      const jwt = tokenResponse.__raw;

      const axiosRequestConfig = {
        method: 'delete',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/survey/${id}`,
        headers: { "Authorization": `Bearer ${jwt}` }
      }

      try {
        await axios(axiosRequestConfig);
        const updatedSurveys = this.state.surveyData.filter((survey) => survey._id !== id);
        this.setState({ surveyData: updatedSurveys });

      } catch (error) {
        console.error("Delete error: " + error);
        this.setState({ error: true });
      }
    }
  }

  /* Ping server to create a new survey ID to enter into the survey Iframe*/
  createNewSurvey = async () => {
    if (this.props.auth0.isAuthenticated) {
      const tokenResponse = await this.props.auth0.getIdTokenClaims();
      const jwt = tokenResponse.__raw;
      console.log('new survey button works');
      // let url = `${process.env.REACT_APP_SERVER_URL}/jotform`

      const axiosPostConfig = {
        method: 'post',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/jotform`,
        headers: { "Authorization": `Bearer ${jwt}` }
      }

      try {
        const newSurveyObj = await axios(axiosPostConfig);
        this.setState({ activeSurvey: newSurveyObj.data });
        // this.state.activeSurvey.map((x) => {
        //   console.log(x);
        // })

      } catch (error) {
        console.log(error, 'could not create new survey');
      }
    }
  }

  /* Ping Jotform to clone a survey for the next class */

  getActiveSurvey = async () => {
    // const url = `${process.env.REACT_APP_SERVER_URL}/active`
    try {
      console.log('inside app.lgetActiveSurvey');
      if (this.props.auth0.isAuthenticated) {
        console.log('inside app.lgetActiveSurvey IF');
        const tokenResponse = await this.props.auth0.getIdTokenClaims();
        console.log('getActiveSurvey getIdTokenClaims result:', tokenResponse);
        const jwt = tokenResponse.__raw;

        const axiosRequestConfig = {
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER_URL,
          url: `/active`,
          headers: { "Authorization": `Bearer ${jwt}` },
        }

        console.log('inside getActiveSurvey: getting const activeSurvey');
        const activeSurvey = await axios(axiosRequestConfig);
        console.log('inside getActiveSurbey activeSurvey.data', activeSurvey.data);

        this.setState({ 
          activeSurvey: activeSurvey.data 
        });
      }

    } catch (error) {
      console.log(error, 'No Active Survey');
    }

  }

  /* Archive the survey */

  putActiveSurvey = async () => {
    if (this.props.auth0.isAuthenticated) {
      const tokenResponse = await this.props.auth0.getIdTokenClaims();
      const jwt = tokenResponse.__raw;

      // console.log(this.state.activeSurvey);

      // Don't know if we need this if statement below
      if (this.state.activeSurvey === undefined) {
        console.log('activeSurvey is null');
      } else {
        this.state.activeSurvey.active = false;
        console.log(this.state.activeSurvey);
      }

      const axiosRequestConfig = {
        method: 'post',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/survey`,
        data: this.state.activeSurvey,
        headers: { "Authorization": `Bearer ${jwt}` }

      }

      try {

        await axios(axiosRequestConfig);
        this.getActiveSurvey();
      } catch (error) {
        console.log(error, 'could not archive survey');
      }
    }
    window.location.reload();
  }




  //Adds Auth0 Integration
  getConfig = async () => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      console.log(res);
      console.log(jwt);
      const config = {
        headers: { "Authorization": `Bearer ${jwt}` },
      }
      console.log(config);
      return config;
    }
  }

  componentDidMount() {

    this.getActiveSurvey();
  }


  render() {
    console.log('this.props.isAuthenticated, user?:',this.props.auth0.isAuthenticated, this.props.auth0.user);
    // console.log('New Survey: ', this.state.activeSurvey);
    return (
      <>
        <Router>

          <Header />

          <Routes>

            {/* <Route exact path="/">
              <Home />
            </Route> */}

            <Route path="/"
              element={
                <Home />
              } />

            <Route path="/admin"
              element={
                <Admin
                  graphResults={this.graphResults}
                  activeSurvey={this.state.activeSurvey}
                  createNewSurvey={this.createNewSurvey}
                  surveyData={this.state.surveyData}
                  putActiveSurvey={this.putActiveSurvey}
                  deleteSavedSurvey={this.deleteSavedSurvey}
                  getActiveSurvey={this.getActiveSurvey}
                  getSavedSurvey={this.getSavedSurvey} />
              } />

            <Route path="/results"
              element={
                <Results surveyToGraph={this.state.surveyToGraph}
                  getSavedSurvey={this.getSavedSurvey}
                  surveyData={this.state.surveyData} />
              } />

            <Route path="/dei-survey"
              element={
                  this.state.activeSurvey && (<Survey activeSurvey={this.state.activeSurvey} />)
              } />

            {/* maybe don't name it "dei-survey" but for testing purposes, this stays */}

            <Route path="/about"
              element={
                <AboutUs />
              } />

          </Routes>

          <Footer />

        </Router>
      </>
    )
  }
}

export default withAuth0(App);
