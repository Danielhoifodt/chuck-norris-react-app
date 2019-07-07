import React from 'react';

import axios from 'axios';
import './App.css';

class App extends React.Component {
  
  state = {
    vits : "",
    nummer: 0
  }

  componentDidMount () {
    
    

  }
  faaVits() {
    this.setState({nummer: this.state.nummer + 1});
    axios.get('http://api.icndb.com/jokes/')

    .then(res => {
      this.setState({vits : res.data.value[this.state.nummer].joke})
    })
    
}


  render(){
  return (
    <div>
      <h1>Chuck Norris Joke Generator</h1>
        <button onClick={this.faaVits.bind(this)}>Faa vits</button><br /><br />
        {this.state.vits}
    
    
    </div>
  );
}
}
export default App;
