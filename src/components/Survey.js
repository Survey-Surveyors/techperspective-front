import React, { Component } from 'react';
import SurveyIframe from './SurveyIframe';

export default class Survey extends Component {
    render() {
        return (
            <div>
                 <br></br>
                
                <h1>Please complete the DEI survey below.</h1>

                <h2>Be sure to hit "SUBMIT" after answering the last question.</h2>
                <br></br>

                {this.props.activeSurvey ? <SurveyIframe activeSurvey={this.props.activeSurvey} /> : <h2>No active survey available.</h2>}
            </div>
        )
    }
}
