/* Before you begin import React, React Dom, And CSS */
import React from 'react';
import { ReactDOM } from 'react';
import './App.css';
import './style.css';


/* To first begin practcing REACT export a class Practice which renders a Demo JSX */

export default class Practice extends React.Component{
    render(){
        return(
            <Demo></Demo>
        )
    }
}




/* next export a class Demo Inside the render make sure to render a div inside the include a header tag
the contents of the header are up to you. and practice adding a bunch of JSX element
to create a page using REACT. */

export class Demo extends React.Component{
    render(){
        return(
            <div>
                <h1>React Demo App</h1>
                <div>
                    <section>
                        <p>
                            In this demo we look at how a react app is made.

                        </p>
                        <br />
                        <p>
                            I am practing REACT
                        </p>
                        <p>
                            I cant wait to see this displayed
                        </p>
                    </section>
                    <img src="https://creative.starbucks.com/images/logos/logo-1987.png" alt="A starbucks" />
                    <br />
                </div>
            </div>
        )
    }
}
