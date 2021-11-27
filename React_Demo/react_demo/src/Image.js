'use strict'

import React from "react";
import { ReactDOM } from "react";


/* Export a class called Image which just renders an image to a source of your 
choice this is to practice 
creating a class and JSX inline so it can be called later on. */

export default class Image extends React.Component{
    render(){
        return(
            <img src="https://media.istockphoto.com/photos/random-multicolored-spheres-computer-generated-abstract-form-of-large-picture-id1295274245?b=1&k=20&m=1295274245&s=170667a&w=0&h=4t-XT7aI_o42rGO207GPGAt9fayT6D-2kw9INeMYOgo="
            alt="Random Thing from Google"></img>
        )
    }
}
