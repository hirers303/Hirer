import React from "react";

const About = () => {
  const backgroundImageUrl = "https://www.jobsgaar.com/images/about_image.webp";
  const img1 = "https://www.jobsgaar.com/images/start_finish.webp";
  const img22 = "https://www.jobsgaar.com/images/newabout/employer_english.jpg";
  const img21 =  "https://www.jobsgaar.com/images/newabout/candidate_english.jpg"

  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center my-20 mx-5"
        style={{
            backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          marginTop: "80px",
          height: "auto",
        }}
      >
        <div className="text-white text-center mt-4 mb-4">
          <h3 className="text-2xl font-bold mb-4 ">
            About Jobsgaar
            <span className="block mx-auto mt-5 mb-2 h-1 w-40 bg-white"></span>
          </h3>
          <h3 className="text-2xl font-bold mb-4"> Jobsgaar के बारे में</h3>
        </div>
      </div>

      <div>
        <div className="mx-10 my-10">
          <p className="text-orange-500 text-center font-bold">#HowDoWeDoIt</p>
          <h3 className="text-blue-800 text-bold text-center text-3xl font-bold">
            Building #WalktoWork
            <i className="font-light">™</i> for
            <i className="font-italic text-orange-500 font-bold"> भारत </i>
          </h3>
          <p className="text-center mx-20 my-10">
            JOBSGAAR TECHNOLOGIES PRIVATE LIMITED is a career-tech venture that
            manages a job seeker’s career journey in Bharat. With its
            omnichannel solution approach &amp; tech <br /> powered by
            IndiaStack, Jobsgaar also helps employers to find talent in tier 2/3
            towns of the country in less than 2 min. <br /> We envision enabling
            access to various digital inclusions through our innovative tech
            solutions that include the worlds <br /> first chatbot at WhatsApp.
            Jobsgaar is also the first Indian startup to have an Indo-Israeli
            founding team.
          </p>
          <div className="flex items-center justify-center">
            <img
              className="w-80"
              data-aos="flip-left"
              src={img1}
              alt="Put Image"
            />
          </div>
          <p className="text-center mx-20 my-10">
            The workforce in India have always been in search of a better place
            to work. As per the Economic Survey of India 2016-17, there are over
            a 100 million migrant workers in India which <br />
            move outside their district of birth for work opportunities—be it
            employment or business. The numbers indicate the migration trends
            from villages to the large city centres &amp; surpassing <br />
            their own birth districts, driven by necessity and aspirations.
          </p>
          <p className="text-center mx-20 my-10">
            Jobsgaar connects employers with employees at the source location,
            enabling workforce to find district level jobs. We do it via using
            technology in the simplest form possible. We <br />
            enable employers to post their district level workforce requirements
            without any hustle. On the other hand, employees can explore local
            opportunities and connect with employers <br />
            without indulging in any complex hiring processes.
          </p>
          <p className="text-center mx-20 my-10">
            Our roots are in the design aesthetics, and we take pride in
            building practical technology with neat user interface and a smooth
            user experience.
          </p>
        </div>
        <div className="lg:flex lg:justify-between mx-10 my-10">
          
          <div className="lg:w-1/2 lg:mx-20 mb-8 lg:mb-0">
            <h3 className="text-2xl font-bold mb-5 text-orange-500">
              For Job Seekers
            </h3>
            <p className="mb-4">Perfectly matched for your job profile</p>
            <p className="mb-4">Verified job offers in your city</p>
            <p className="mb-4">Online interviews facility</p>
            <p className="mb-4">Career management</p>
          </div>
         
          <div className="lg:w-1/2 lg:mx-20">
            <img className="rounded-lg" src={img21} alt="Job Seekers" />
          </div>
        </div>

        <div className="lg:flex lg:justify-between mx-10 my-10">
          <div className="lg:w-1/2 lg:mx-20 order-first mb-8 lg:mb-0">
            <img
              className="rounded-lg"
              src={img22}
              alt="Recruiter"
            />
          </div>
         
          <div className="lg:w-1/2 lg:text-right">
            <h3 className="text-2xl font-bold mb-5 text-blue-900 ">
              For Recruiter
            </h3>
            <p className="mb-4">Get shortlisted filtered candidates</p>
            <p className="mb-4">Hire within 60 seconds</p>
            <p className="mb-4">Complete privacy of your contact details</p>
            <p className="mb-4">No unwanted calls or messages</p>
          </div>
        </div>

        <div className="mx-10"></div>
      </div>
    </>
  );
};

export default About;