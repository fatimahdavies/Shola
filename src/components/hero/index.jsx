import React from "react";
import styled from "styled-components";
import Avatar from "./avatar.svg";
import DownDirection from "./downdirection.gif";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroTop>
        <HeroTopLeft>
          <p>
            Hi, I’m Akintayo, A <span className="title">Product Designer </span>
            currently building usable products
          </p>
          <div className="hero-top-left-bottom">
            <button>Selected Works</button>
            <img
              src={DownDirection}
              alt="go to selected projects"
              className="down-dir-img"
            />
          </div>
        </HeroTopLeft>
        <HeroTopRight>
          <object type="image/svg+xml" data={Avatar} className="avatar">
            my-avatar
          </object>
        </HeroTopRight>
      </HeroTop>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  width: 85%;
  margin: 0 auto;
`;

const HeroTop = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const HeroTopLeft = styled.div`
  flex: 0.6;
  p {
    font-size: 5rem;
    font-family: var(--secondary-font-style);
    color: #333333;
    font-weight: bolder;
    overflow-wrap: anywhere;
    .title {
      color: var(--secondary-color);
      text-decoration: none;
      border-bottom: 4px solid var(--secondary-color);
    }
  }
  .hero-top-left-bottom {
    display: flex;
    align-items: center;

    button {
      background-color: #333333;
      border-radius: 32.5px;
      color: #ffffff;
      text-align: center;
      width: 16rem;
      height: 4rem;
      font-size: 1.25rem;
    }
    .down-dir-img {
      width: 10rem;
      margin-top: 2rem;
      @media screen and (max-width: 480px) {
        width: 7rem;
      }
    }
  }
`;

const HeroTopRight = styled.div`
  flex: 0.4;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    display: none;
  }
  .avatar {
    object-fit: contain;
  }
`;
