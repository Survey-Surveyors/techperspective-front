import React from 'react';
import HomeForm from './HomeForm';


class Home extends React.Component {
    render () {
        return(
            <>
                <p>DEI stands for Diversity, Equity, and Inclusion. The purpose of this site is to compile and share DEI data from those people currently working in the technology industry and those who wish to work in the industry. The technology industry, while rapidly diversifying, has historically been made up of a narrow group of individuals from similar backgrounds.
                Accurate DEI tech data will demonstrate the changing demographics in the industry, and encourage people from all backgrounds to participate in a workforce where they are represented.</p>
                <HomeForm 
                getActivePublicSurvey={this.props.getActivePublicSurvey}
                handleKeySubmit={this.props.handleKeySubmit}
                handleKeyInput={this.props.handleKeyInput}
                redirect={this.props.redirect}
                />
            </>
        )
    }
}

export default Home;