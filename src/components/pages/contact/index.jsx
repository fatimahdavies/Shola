import React from "react";
import styled from "styled-components";

const Contact = () => {
  const email = "Tolushola11@gmail.com";
  return (
    <ContactContainer>
      <h1>
        You’re always welcome to say hi!{" "}
        <span role="img" aria-label="aria-labelledby">
          😌
        </span>
      </h1>
      <p className="contact_text">
        If you have exciting projects that you would like to work on, say a
        friendly Hello or talk about video games and comics , feel free to drop
        me an email. -<br />
        <a href={`mailto:${email}`} className="email_link">
          Tolushola11@gmail.com
        </a>
      </p>

      <div className="contact_bottom">
        <h2>Let’s connect on</h2>
        <ul className="social_links">
          <li>
            <img src="/assets/icons/email.png" className="social_icon" alt="" />
            <a href={`mailto:${email}`}>Email</a>
          </li>
          <li>
            <img
              src="/assets/icons/linkedin.png"
              className="social_icon"
              alt=""
            />
            <a href="htt">Linkedin </a>
          </li>
          <li>
            <img src="/assets/icons/tel.png" className="social_icon" alt="" />
            <a href="tel:07088780115">Mobile Number </a>
          </li>
        </ul>
      </div>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
  width: 60%;
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 1.3rem;
  @media screen and (max-width: 460px) {
    width: 80%;
  }
  h1 {
    font-weight: bold;
    font-size: 3rem;
  }

  .contact_text {
    margin: 1rem 0rem;
    line-height: 2em;
  }
  .email_link {
    color: var(--secondary-color);
    text-decoration: underline;
    text-align: center;
  }
  .contact_bottom {
    margin: 6rem 0rem;
    font-family: "DM Sans", sans-serif;
    @media screen and (max-width: 460px) {
      margin: 2rem 0rem;
    }

    .social_links {
      margin-top: 2rem;
      display: flex;
      list-style: none;
      align-items: center;
      justify-content: center;
      font-weight: 500;

      @media screen and (max-width: 460px) {
        flex-direction: column;
        margin-top: 1rem;

        li {
          margin: 10px 0px;
        }
      }

      li {
        margin: 0px 15px;
        display: flex;
        align-items: center;

        @media screen and (max-width: 460px) {
          margin: 10px 0px;
        }
        a {
          text-decoration: underline;
          color: var(--primary-color);
          white-space: nowrap;
        }
        .social_icon {
          margin-right: 10px;
        }
      }
    }
  }
`;
