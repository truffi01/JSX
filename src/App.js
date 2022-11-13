import React from "react";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  /*constructor(props){
    super(props);

    this.state = { lat: null }; 
  
  };*/
  
  state = { lat:null, errorMessage: '' };

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition((position) => {
      this.setState({ lat: position.coords.latitude})
    }, (err) => console.log(err));
  };

  componentDidUpdate(){

  };

  render(){
    //take a propoerty from state from one component passed as a prop down to child. coponent rerender any component chikdren with this 
    return  <SeasonDisplay lat={this.state.lat} />
  };
};

export default App;
