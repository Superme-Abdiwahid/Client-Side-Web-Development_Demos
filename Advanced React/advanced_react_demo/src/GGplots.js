import React from 'react';
import './App.css';
import GGPlot from './GGPlot';
import ImagePlot from './ImagePlot';
import SecondCode from './SecondCode';
import './style.css'
import Viewer from './Viewer';

export default class GGplots extends React.Component{
    render(){
        return(
            <Plots />
        )
    }
}

export class Plots extends React.Component{
    render(){
        return(
            <div>
    <div>
        <h1>GGPlots Overview</h1>
    </div>
    <div>
        <section>
            <p class="Second_Pargraphs">Welcome in this section we are going explain GGplots. GGplots are 
                an extension of the plot function. 
                <br />
                <p class="Second_Pargraphs">Remeber when we call the plot function 
                we are telling R to plot something for us.</p>
                <br />
                <p class="Second_Pargraphs"> Well what GGplot allows us to do is we are able to
                create plots of our own and it makes it easier for us to mess around with the plots.</p>
                <br />
                <p class="Second_Pargraphs"> We can change the color of 
                the plot the type of plot we want. These are some examples of the operations we can perform with ggplot</p>
            </p>
        </section>
        <section>
            <div>
                <h1 class="R-Markdowns">Code example of GGplots</h1>

                <p  class="Second_Pargraphs next">
                    Lets look at an example. First lets load the national data from Assignment 2.
                
                </p>
                <ImagePlot />
                <br />

                <p  class="Second_Pargraphs next"> Then Lets start creating the ggplot. The first thing we need to do is create a variable to store the 
                    results of our GGplot. 
                    Then call the ggplot function to be able to create a ggplot. 
                    </p>
                    <br />
                    <p class="Second_Pargraphs next">
                Inside the ggplot we need to pass it a parameter. This paramter is usually a data passed to ggplot function. To
            be able to start creating a plot. Take a look at the exact syntax for rstudio </p>

            <SecondCode />

            <br />

            <p  class="Second_Pargraphs next">
                The next thing we do is add a + Its very important you <em class="Emphasis">DONT ADD A PIPE.</em>
                Otherwise your code will cause an error. The plus indicates we are trying to add more groupings and continue builidng our ggplot. 
            </p>
            <br />
            <p  class="Second_Pargraphs next"> 
                The next thing we do is call the geom function. And this is going to create the type of 
                plot we want to be displayed. 
                </p>
                <p  class="Second_Pargraphs next">In this example im trying to create a line plot of the covid-19 deaths
                over the past couple of Months. To be able to see a trend and change overtime. Its important when you call the geom_ the type of plot. 
                You should inside the plot speicif the mapping to be aes. So you can add <a target="_blank" href="https://ggplot2.tidyverse.org/reference/aes.html">
                    Aesthetic mappings.</a>  </p>
                    <p  class="Second_Pargraphs next">Then we need to specify the x and y. These are essentially the x and y coordinates for 
                    our graph. For me I want the x coordinates to be the dates and the y coordinates to be the trends and deaths from covid 19.
                    Take a look at this code image below to build up those syntaxs. This is the most basic way to create a ggplot
            </p>
            <br />
            <br />
           <GGPlot />
            <br />
            <p class="Second_Pargraphs">
                If I run these lines of 
                    code I get this output in plot viewer window.
            </p>
            <br />
            <p class="Second_Pargraphs">
                We can see that the x coordinates is the date. The y coordinates is the covid 19 deaths based on the 
                national data gathered.
            </p>
            <br />
            <Viewer />
            </div>
        </section>
    </div>
    <br />
    <footer class="Footer">
        <address>
            &copy; Abdiwahid Bishar Hajir 2021
        </address>
    </footer>
    </div>
        )
    }
}