import { Component } from "react";
import NewSurveyButton from "./NewSurveyButton";
import ActiveSurvey from "./ActiveSurvey";
import LogOutButton from "./LogOutButton";

class ActiveSurveyContainer extends Component {
    componentDidMount() {
        this.props.getActiveSurvey();
    }
    render() {
        return (
            <>
            <br></br>
            <div style={{display:"flex", justifyContent:"center"}} >  
            
                {/* {this.props.activeSurvey === null &&  */}
                <NewSurveyButton 
                createNewSurvey={this.props.createNewSurvey} 
                />

                {/* {this.props.activeSurvey &&  */}
                <ActiveSurvey 
                graphResults={this.props.graphResults} 
                activeSurvey={this.props.activeSurvey} 
                openModal={this.props.openModal} 
                getActiveSurvey={this.props.getActiveSurvey} 
                />
            
                <LogOutButton />
            </div>
            <br></br>
            </>
        )
    }
}

export default ActiveSurveyContainer;