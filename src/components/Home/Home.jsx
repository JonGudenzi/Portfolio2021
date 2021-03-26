import React from "react";
import "./Home.css";



function Home() {

  return (
<div className="container my-container">
        <div className="row justify-content-around my-row">
            <div className="col-md-3 my-col">
                <h1 id="aboutMeNav">About Me</h1>
            </div>
            <div className="col-md-9 my-col" id="aboutMeContent">
                I am an aspiring developer who currently works a full time job in inventory and logistics. I have been
                with my current employer for 15 years and have peaked at performance and growth within the organization.
                I've chosen a new career path in computer programming with a focus on web development because I
                enjoy the challenging and creative outlet.
            </div>
        </div>
    </div>
  );

}

export default Home;