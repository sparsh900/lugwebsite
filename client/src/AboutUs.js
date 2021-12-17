import React from "react";
import side2 from "./images/side2.png";

function AboutUs() {
  return (
    <div className="back1" id="about">
      <div className="header">ABOUT US</div>
      <div className="side1">
        <p style={{ flexWrap: "wrap", display: "flex" }}>
          Today is the age of computer science. It is the age of creators and
          developers, people with real-life problem-solving skills, and people
          who want their works to affect the lives of millions and billions Get
          equipped with the skills that will help you be ahead of others in the
          industry. Do projects that will make your resume outshine. Become the
          part of a society that believes in collaboration and growing together.
          We don’t work to impress, we work to express, we don’t work to show
          the college how good a society it is , but we work for the family, the
          society itself ,what all can we do for anyone who is a part of it. We
          focus our energies and resources on the things worth investing in.
          With a fantastic set of mentors who know what they are doing, you get
          access to one of the most select groups of people you can reach out to
          for guidance. Don't limit yourself to the pit of course-doers instead
          get to apply that knowledge to build something different, something
          that will impact the lives of people. Become an essential part of
          something great.So it's time guys, the society is again opening its
          hands to anyone who wants to be a part of it, to anyone who can show
          his worth ,dedication and will to be anonymous but still the greatest.
          And I think that's only how a society is created, it's not created for
          the benefit of masses but for the benefit of the people who put in
          their efforts for the society. 
        </p>
    {/*CONGRATS!!! YOU HAVE FOUND IT. NOW DECODE THE FOLLOWING CIPHER TO GET THE FLAG*/}
     {/* GSRKVEXW_CSY_EVI_UYEPMJMIH_JSV_TM */}
      </div>
   
      <div className="side2">
        <img className="about" src={side2} alt="about" />
      </div>
    </div>
  );
}

export default AboutUs;
