import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import ResultsButton from './ResultsButton';
import CopyClipboard from './CopyClipboard';
import LogOutButton from "./LogOutButton";


class ActiveSurvey extends Component {
  componentDidMount() {
    this.props.getActiveSurvey();
  }
  render() {
    return (
      <div className="active-survey-container">
        <Card border="dark">
          <Card.Body>

            <Card.Title className="card-title">
              Active Survey - ID: {this.props.activeSurvey.surveyID}
            </Card.Title>

            <div className="active-survey-subcon content-spacer" >
              <div className="content-spacer">
                <Card.Text className="content-spacer">
                  Date: {this.props.activeSurvey.createdOn}
                </Card.Text>
                <Card.Text className="content-spacer">
                  Submission Count: {this.props.activeSurvey.submissionCount}
                </Card.Text>
              </div>
              <CopyClipboard />
            </div>

            <div className="view-archieve">
              <ResultsButton
                className="content-spacer"

                surveyData={this.props.activeSurvey.results}
                graphResults={this.props.graphResults}
              />
              <Button
                className="content-spacer"
                variant="outline-dark"
                style={{ height: '3rem', width: '11rem' }}
                onClick={this.props.openModal}>
                Archive Survey
              </Button>
            </div>

          </Card.Body>
        </Card>
        <Card border="dark">
          <Card.Body>
            <Button
              className="content-spacer"
              variant="success"
              onClick={this.props.getActiveSurvey}
              style={{ width: '11rem' }}>
              Click to Refresh Active Survey
            </Button>
            <Card.Title
              className="content-spacer"
            >
            </Card.Title>
            <LogOutButton
              className="content-spacer"
            />
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default ActiveSurvey;