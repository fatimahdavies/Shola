import React from "react";
import styled from "styled-components";

const Footer = () => {
  const email = "Tolushola11@gmail.com";

  return (
    <FooterContainer>
      <img
        src="/assets/images/footereye.gif"
        alt=""
        className="footer_eye_gif"
      />

      <h2>
        Why don't we <span>create magic</span>
      </h2>
      <p>
        This doesn’t have to end here, have a great product you want to work on
        or just looking to connect ?<br />
        Let's talk.
      </p>

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
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  margin-top: 4rem;
  width: 50%;
  margin: auto;
  text-align: center;

  .footer_eye_gif {
    object-fit: contain;
    width: 4rem;
  }

  h2 {
    font-weight: bold;
    margin: 2rem 0rem;
    span {
      color: var(--secondary-color);
    }
  }
  p {
    line-height: 2em;
    font-size: 1.3rem;
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
`;
