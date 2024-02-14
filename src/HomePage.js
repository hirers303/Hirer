import React from "react";
import "./HomePage.css"; // Import CSS file for styling

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="big-heading">
        <h1>How to start with Hirers!</h1>
      </div>
      <div className="blocks">
        <div className="block purple">
          <div className="content">
            <img
              src={process.env.PUBLIC_URL + "/img1 (2).png"}
              alt="Large Image"
              style={{
                width: "172px",
                height: "116px",
                top: "144px",
                left: "205px",
              }}
            />{" "}
            <div className="content1" id="first">
            <h2>Post/ Search a Job</h2>
            <h3>For Job Seekers:-</h3>
            <p>Look around the verified listing jobs at our platform.</p>
            <h3>For Employers:-</h3>
            <p>Fill your required details for candidates in 2-3 minutes</p>
            </div>
          </div>
        </div>
        <div className="block purple">
          <div className="content">
            <img
              src={process.env.PUBLIC_URL + "/img2.png"}
              alt="Large Image"
              style={{
                width: "147px",
                height: "144px",
                top: "130px",
                left: "646px",
              }}
            />{" "}
            <div className="content1">
            <h2>Apply to be verified</h2>
            <h3>For Job Seekers:-</h3>
            <p>Apply to job vacancies available there by just doing Sign-up</p>
            <h3>For Employers:-</h3>
            <p>Our team will call to verify your details</p>
            </div>
          </div>
        </div>
        <div className="block purple">
          <div className="content">
            <img
              src={process.env.PUBLIC_URL + "/img3.png"}
              alt="Large Image"
              style={{
                width: "202px",
                height: "189px",
                top: "119px",
                left: "1049px",
              }}
            />{" "}
            <div className="content1" id="third">
            <h2>Get your Results</h2>
            <h3>For Job Seekers:-</h3>
            <p>Get connect to HR's directly</p>
            <h3>For Employers:-</h3>
            <p>
              Get calls from relevant candidates or call them directly from our
              candidate database
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
