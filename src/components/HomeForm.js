import React from 'react';
import { Form, FormGroup, Button } from 'react-bootstrap';
import {Navigate} from 'react-router-dom';


class HomeForm extends React.Component {

    render () {
        // console.log('key test', this.state.key);
        if(this.props.redirect){
            console.log('navigating');
            return <Navigate to="/public-survey"/>
          }
        return(
            <>
                <Form className="key-form">
                {/* need to do an onSubmit for formgroup */}
                    <FormGroup>
                        <Form.Label>
                            Enter Survey Key Here:
                        </Form.Label>
                            <Form.Control type="text" placeholder="Ex.123..." onChange={this.props.handleKeyInput}/>
                    <Button onClick={this.props.handleKeySubmit}>
                        Submit
                    </Button>
                    </FormGroup>
                </Form>
            </>
        )
    }
}

export default HomeForm;