import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SlideCard = ({
  card_image,
  card_image_bg_color,
  card_tags,
  card_title,
  card_body_text,
  link_one_text,
  link_two_text,
  project_link,
  project_link_name,
  project_link_text,
}) => {
  const [projectDetailsStyle, setProjectDetailsStyle] = useState({
    position: "absolute",
    width: "100%",
    top: 0,
    bottom: 0,
    opacity: 0,
  });

  const [projectOverviewStyle, setProjectOverviewStyle] = useState({
    opacity: 1,
  });

  const onMouseHover = () => {
    setProjectDetailsStyle({
      position: "absolute",
      width: "100%",
      top: 0,
      bottom: 0,
      opacity: 1,
    });

    setProjectOverviewStyle({
      opacity: 0.5,
    });
  };

  const onLeaveMouse = () => {
    setProjectDetailsStyle({
      position: "absolute",
      width: "100%",
      top: 0,
      bottom: 0,
      opacity: 0,
    });

    setProjectOverviewStyle({
      opacity: 1,
    });
  };
  return (
    <CardContainer
      onMouseOver={() => onMouseHover()}
      onMouseLeave={() => onLeaveMouse()}
      className="project-overview"
    >
      <div style={projectOverviewStyle}>
        <ImageCardContainer style={{ backgroundColor: card_image_bg_color }}>
          <img src={card_image} alt="" />
        </ImageCardContainer>
        {card_tags && (
          <CardTags>
            {card_tags?.map((tag, index) => (
              <label key={index}>{tag}</label>
            ))}
          </CardTags>
        )}
        {card_title && <h3>{card_title}</h3>}
        {card_body_text && <p>{card_body_text}</p>}
        {/* <CardLinks>
        <Link to="/about">{link_one_text}</Link>
        <Link to="/">{link_two_text}</Link>
      </CardLinks> */}
      </div>

      {/* see more */}
      <div style={projectDetailsStyle} className="project_details_container">
        <Link to={project_link} className="project_details_container_link">
          {project_link_name}
          <br />
          <p className="project_link_text"> {project_link_text}</p>
        </Link>
      </div>
    </CardContainer>
  );
};

export default SlideCard;

const CardContainer = styled.div`
  position: relative;
  label {
    margin-right: 1rem;
    margin-top: 1rem;
    background: #e7e7e7;
    border-radius: 50px;
    padding: 4px 8px;
    white-space: nowrap;
  }

  h3 {
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .project_details_container {
    background: rgba(41, 41, 41, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;

    .project_details_container_link {
      color: #fff;
      text-decoration: none;
      font-size: 2.2rem;

      .project_link_text {
        font-size: 1.5rem;
        margin-top: 0.8rem;
      }
    }
  }
`;
const ImageCardContainer = styled.div`
  padding: 1rem;
  height: 25rem;
  img {
    margin: auto;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const CardTags = styled.div`
  display: flex;
  margin: 2rem 0rem;
  flex-wrap: wrap;
`;
const CardLinks = styled.div`
  display: flex;
  margin: 2rem 0rem;
`;
