import React, { Component } from 'react';
import PropTypes from "prop-types";

class Menubutton extends Component{
    render(){
        return(
            <button className="bt" onClick={this.props.loadSampleFishes}>MENU!!</button>
        )
    }
}

export default Menubutton;