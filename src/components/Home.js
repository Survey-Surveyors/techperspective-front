import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';


class Home extends React.Component {
    render() {
        return (
            <div id='home'>
                <h1>Welcome to the DEI Survey!</h1>

                {this.props.auth0.isAuthenticated ?

                    <div className="description">
                        <p>DEI stands for Diversity, Equity, and Inclusion. In an evolving, modern world with thousands of demographics, DEI in the workplace is very important, especially in the growing technical field.</p>

                        <br></br>

                        <h3 className="survey-question">What is the DEI Survey?</h3>

                        <p>
                            The DEI Survey is a helpful tool that allows an organization to see the varying demographics of their employees or members. The technical industry, while rapidly diversifying, has historically been made up of a narrow group of individuals from similar backgrounds. Accurate DEI tech data will demonstrate the changing demographics in the industry, and encourage people from all backgrounds to participate in a workforce where they are represented.
                        </p>


                    </div>

                    :
                    <h2>Please login to get started</h2>
                }



            </div >
        )
    }
}

export default withAuth0(Home);
