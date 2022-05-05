import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import ResultsButton from './ResultsButton';
import CopyClipboard from './CopyClipboard';


class ActiveSurvey extends Component {
    render() {
        return (
            <Card>
                <Card.Header as="h5">Active Survey</Card.Header>
                <Card.Body>
                    <Row md={6} style={{ justifyContent: 'space-around' }}>

                        <Button variant="primary" onClick={this.props.getActiveSurvey} style={{ height: '3rem', width: '11rem' }}>
                        Refresh
                        </Button>

                        <CopyClipboard />

                        <Card.Title>{this.props.activeSurvey.createdOn}</Card.Title>
                        <Card.Text>
                            Survey ID: {this.props.activeSurvey.surveyID}
                        </Card.Text>
                        <Card.Text>
                            Submission Count: {this.props.activeSurvey.submissionCount}
                        </Card.Text>

                        <ResultsButton 
                        surveyData = {this.props.activeSurvey.results} graphResults = {this.props.graphResults}
                        />
                        <Button variant="outline-dark" style={{ height: '3rem', width: '11rem' }} onClick={this.props.openModal}>
                            Archive Survey
                        </Button>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}

export default ActiveSurvey;