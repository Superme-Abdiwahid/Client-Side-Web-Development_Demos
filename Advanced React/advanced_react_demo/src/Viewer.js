import React from 'react';
import './style.css';
import img from './img/GGPLOT.png';

export default class Viewer extends React.Component{
    render(){
        return(
            <img src={img}/>
        )
    }
}