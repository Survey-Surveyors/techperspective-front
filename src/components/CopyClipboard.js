import { Component } from "react"

let REDIRECT = process.env.REACT_APP_AUTH_REDIRECT_URI;

class CopyClipboard extends Component {
  render() {
    return (
      <div>
        <h3>
          Share User Link Below:
        </h3>
        <p>
          {REDIRECT}/user-home
        </p>
        <h3>
          Share User Key Below:
        </h3>
        <p>
        {this.props.activeSurvey.surveyID}
        </p>
      </div>
    )
  }
}

export default CopyClipboard;
