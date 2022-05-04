import { Component } from 'react';
import Button from 'react-bootstrap/Button';

class NewSurveyButton extends Component {
    render() {
        return (
            <Button style={{ height: '3rem', width: '11rem' }} variant="dark" 
            onClick={this.props.createNewSurvey}>
                New Survey
            </Button>
        )
    }
}

export default NewSurveyButton;