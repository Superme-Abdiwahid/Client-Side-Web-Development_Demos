import React  from "react";
import './App.css';
import RMarkdown from "./RMarkdown";
import Markdown from "./Markdown";
import './style.css';
import Rstudio from "./Rstudio";

export default class HomePage extends React.Component{
    render(){
        return(
            <Home />
        )
    }
}

export class Home extends React.Component{
    render(){
      return(
        <div>
        <main>
      <h1>Lab 7 Demo</h1>
          <br />
      <div>
      <section>
            <p class="Style_Pargraph">
                Welcome to lab 7 Demo. In this demo you would be able to learn about data Visualizations 
                as well as how to create reports.</p>
                <br />
                <p class="Style_Pargraph"> We would cover RMarkdown, GGplots and Maps hope you are able 
                to find this intersting.
            </p>
        </section>
        <br />
          <div>
              <h1 className="R-Markdown">R-Markdown Overview</h1>
              <section>
                  <p className="Second_Pargraphs">
                      So before we begin lets recap. How to create a rmarkdown report. 
                      <p className="Second_Pargraphs">First you would go to rstudio. Navigate to the top, click on file then click on RMarkdown. Take a look at image below showing </p>
  
                      <RMarkdown />
                      <br />
                  </p>
                  <br />
                  <p className="Second_Pargraphs">
                      You would then be brought to this page. You should give your report a name as well as make sure the HTML option is selected. 
                      This would allow you to be able to publish your webpage later and render your report. Take a look at this image. 
                      <br />
                      <Markdown />
                  </p>
              </section>
              <br />
              <p className="Second_Pargraphs">
                  You would now be able to write your report. Refer back to the book for how to create a good
                  report as well as review markdown as the syntaxs are shared across. If your seeing this page 
                  as in the image your ready to write a R markdown report. Good luck!!!!
              </p>
              <br />
              <Rstudio />
          </div>
      </div>
      <br />
      <footer className="Footer">
          <address>
              &copy; Abdiwahid Bishar Hajir 2021
          </address>
          </footer>
          </main>
          </div>
      )
    }
  }