import React from "react";
import styled from "styled-components";
import Footer from "../../footer";
import Avatar from "../../hero/avatar.svg";

const About = () => {
  return (
    <AboutContainer>
      <AboutTop>
        <div className="about_top_left">
          <h2>
            Hi there{" "}
            <span role="img" aria-label="aria-labelledby">
              👋
            </span>
            , I'm Akintayo.
          </h2>
          <p>
            I'm a User Experience Designer from Lagos, Nigeria. I am currently
            working as designer at The Bulb Africa, previously worked at Hazon
            Holdings and Scelloo. I am a huge advocate for designing usable and
            accessible products. <br />
            I’m passionate about solving problems and creating better solutions
            that make user’s lives easier. I aim at making a positive impact on
            the overall experience of my users.
          </p>
          <p>
            Here’s my{" "}
            <a href="jjj" className="resume_link">
              resume
            </a>
            , if you want to take a look.
          </p>
        </div>
        <div className="about_top_right">
          <object type="image/svg+xml" data={Avatar}>
            svg-animation
          </object>
          {/* <div className="image_container"></div> */}
        </div>
      </AboutTop>
      <AboutMiddle>
        <h2>My Design Philosohphy</h2>
        <p>
          My design philosophy is "I am not my users" and they do not know as
          much about the product as I do. I apply a user centric approach to
          gather user insights (what motivates them, their objectives, goals and
          pain points) and synthesis all that research data to make a usable,
          aesthetically pleasing and delightful product/service for the users.
          When solving a problem, I think about what the real user needs are and
          validate the design solution first before jumping into "pushing
          pixels". An important aspect of my design process is to create user
          personas and journey maps of my target audience to better understand
          how different users will approach the product while keeping in mind
          the business objectives and any technical constraints.{" "}
        </p>
      </AboutMiddle>
      <Footer />
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.div`
  margin: 10rem auto;
  width: 85%;
`;

const AboutTop = styled.div`
  display: flex;
  place-items: center;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }

  .about_top_left {
    background: red;
    flex: 0.6;
    padding-right: 4rem;
    @media screen and (max-width: 900px) {
      flex: 1;
      padding-right: 0;
    }
    h2 {
      font-size: 2rem;
      font-weight: bold;
    }
    p {
      line-height: 2em;
      font-size: 1.3rem;
      margin: 1.5rem 0rem;
      .resume_link {
        color: var(--secondary-color);
      }
    }
  }
  .about_top_right {
    flex: 0.4;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .image_container {
      height: 30rem;
      width: 30rem;
      border-radius: 50%;
      background-color: #c4c4c4;
    }
  }
`;
const AboutMiddle = styled.div`
  margin: 4rem 0rem;
  h2 {
    font-size: 2rem;
    font-weight: bold;
  }
  p {
    line-height: 2em;
    font-size: 1.3rem;
    margin: 1.5rem 0rem;
  }
`;
