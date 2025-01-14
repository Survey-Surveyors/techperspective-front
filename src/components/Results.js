import { Component } from 'react';
import ResultsHeader from './ResultsHeader';
import ResultsGraph from './ResultsGraph';


class Results extends Component {
    
    render() {
        return (
            <>  
                <ResultsHeader />
                <div className="chart-container" style={{ 
                margin: "auto", 
                display: "flex", 
                justifyContent:"center", 
                position:"relative", 
                height:"30vh", 
                width:"55vw"
                }}> 

                <ResultsGraph 
                surveyToGraph={this.props.surveyToGraph} 
                />
                </div>
            </>
        )
    }
}

export default Results;