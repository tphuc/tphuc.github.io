import React, { Component } from 'react';

import Navigator from '../components/Navigator';
import Info from '../components/Info';
import BlogSlider from '../components/BlogSlider';


function About(){
    return(
        <React.Fragment>
            <Navigator/>
            <Info/>
        </React.Fragment>
    )
}

export default About;