import React from 'react';
import { Form, FormGroup } from 'react-bootstrap';


class HomeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: '',
        }
    }
    
    
    handleKeyInput = (e) => {
        this.setState({})
        
    }

    render () {
        return(
            <>
                <Form className="key-form">
                {/* need to do an onSubmit for formgroup */}
                    <FormGroup>
                        <Form.Label>
                            Enter Survey Key Here:
                        </Form.Label>
                            <Form.Control type="text" placeholder="Ex.123..." />
                    {/* <Button>

                    </Button> */}
                    </FormGroup>
                </Form>
            </>
        )
    }
}

export default HomeForm;