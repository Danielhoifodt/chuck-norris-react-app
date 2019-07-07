import React from "react";


class Header extends React.Component {
    state = {
        vits: "",
        nummer: 0
    };
   

    faaVits() {
        this.setState({nummer: this.nummer++})
        this.setState({vits: this.props.joke});
    }

    render(){
        return(
        <div>
            <h1>Chuck Norris Joke Generator</h1>
            <button onClick={this.faaVits.bind(this)}>Faa vits</button><br /><br />
            {this.state.vits}
        </div>
    
        )
    }
}

export default Header;