import React from "react";
import workDayImage from "../../assets/small/WorkDay.png";
import passwordGeneratorImage from "../../assets/small/Password_Generator.png";
import weatherDashImage from "../../assets/small/Weather_Dash.png";
import noteTakerImage from "../../assets/small/NoteTaker.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://bslockhart.github.io/Work-Day-Scheduler-Daily-Planner/">
                {" "}
                <img
                  src={workDayImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Work-Day-Scheduler-Daily-Planner"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Work Day Scheduler Daily Planner</h4>
              <p>
                A simple daily planner application that allows users to save events for each hour of the day. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://bslockhart.github.io/Password-Generator-Automaton/">
                {" "}
                <img
                  src={passwordGeneratorImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Password-Generator-Automaton"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Password Generator Automaton</h4>
              <p>
                Application that allows employee's to generate a random password based on the required criteria. The application runs in the browser and features dynamically updated HTML and CSS powered JavaScript code that has been refactored from provided file. Application has a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://brians-note-taker-app.herokuapp.com/">
                {" "}
                <img
                  src={noteTakerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Note_Taker"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Note Taker</h4>
              <p>
                An application called Note Taker that can be used to write and save notes. This application uses an Express.js back end and saves and retrieves note data from a JSON file.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://bslockhart.github.io/brians-weather-dashboard/">
                {" "}
                <img
                  src={weatherDashImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Weather_Dashboard"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather Dashboard</h4>
              <p>
                A Weather Dashboard that retrieves data from another application's API in order to display weather data in context. Weather Dashboard runs in browser and features dynamically updated HTML and CSS.{" "}
              </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Portfolio;
