import React from 'react'
import './App.css';

class App extends React.Component{
    constructor(props) {
    super(props);
    
    }
    render(){
        return(
            <div className="App-section">
                {this.props.children}
            </div>
        );
    }
}

App.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default App;

//header
    //body
//footeer