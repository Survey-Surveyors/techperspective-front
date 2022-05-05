import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class DeleteButton extends Component {
    handleDeleteClick = () => {
        this.props.deleteSavedSurvey(this.props.surveyData._id)
    }

    render() {
        return (
            <Button style={{ height: '3rem', width: '11rem' }} variant="danger" 
            onClick={this.handleDeleteClick}>
                Delete
            </Button>
        )
    }
}
