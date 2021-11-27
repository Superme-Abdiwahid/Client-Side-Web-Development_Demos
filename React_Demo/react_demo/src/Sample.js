import React from "react";
import { ReactDOM } from "react";

/* Export an Image from the Image.js file */

import Img from './Image';


/* export a class Sample which renders a Overall Componetn JSX element */

export default class Sample extends React.Component {
    render(){
        return(
            <Overall></Overall>
        )
    }
}

/* Inside the overall render a div with contents of your choice and Also render the image
you imported to practice JSX inline expression plus module rendering. */
export  class Overall extends React.Component{
    render(){
        return(
            <div>
                <h2>Practice Overall Page Called</h2>
                {Image}
            </div>
        )
    }
}
