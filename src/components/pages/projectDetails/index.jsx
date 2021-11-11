import React from "react";
import styled, { keyframes } from "styled-components";
import SlideCard from "../../uis/slidecard";

const ProjectDetail = () => {
  return (
    <ProjectDetailContainer>
      <ProjectContainer>
        <h3>Here’s a view of some of the projects ive worked on so far</h3>
        <div className="project_lists">
          <SlideCard
            card_image="/assets/images/project1.jpg"
            card_image_bg_color={"#C0FDF2"}
            project_link="/about"
            project_link_name="Wellness Plus"
            project_link_text="Mobile Design"
          />
          <SlideCard
            card_image="/assets/images/proj-2.png"
            card_image_bg_color={"#E9C0FD"}
            project_link="/about"
            project_link_name="CP Trading Platform Plus"
            project_link_text="Mobile Web Application ( Case Study coming soon )"
          />
          <SlideCard
            card_image="/assets/images/proj-3.png"
            card_image_bg_color={"#C0FDE0"}
            project_link="/about"
            project_link_name="HumanaR"
            project_link_text="Web Application"
          />
          <SlideCard
            card_image="/assets/images/proj-4.png"
            card_image_bg_color={"#FDC0DA"}
            project_link="/about"
            project_link_name="settl Merchant"
            project_link_text="Web Application ( Coming Soon ) "
          />
          <SlideCard
            card_image="/assets/images/proj-5.png"
            card_image_bg_color={"#C0D5FD"}
            project_link="/about"
            project_link_name="Scelloo Website"
            project_link_text="Web Design"
          />
          <SlideCard
            card_image="/assets/images/proj-6.png"
            card_image_bg_color={"#EDFDC0"}
            project_link="/about"
            project_link_name="CP Compass"
            project_link_text="Mobile Design  ( Coming Soon )"
          />
        </div>
      </ProjectContainer>
    </ProjectDetailContainer>
  );
};

export default ProjectDetail;

export const animateProjectContainer = keyframes`
    0%{
        opacity:0;
        transform: scale(1.5,1) translateY(0)
       
    }
    100%{
        opacity: 1;
        transform: scale(1.9, 1.1) translate(10rem -15rem);
    }
`;

const ProjectDetailContainer = styled.div`
  animation: ${animateProjectContainer} 2s ease-in;
`;

const ProjectContainer = styled.div`
  width: 100%;

  h3 {
    text-align: center;
    padding: 0rem 1rem;
  }
  .project_lists {
    display: grid;
    grid-template-columns: repeat(2, auto);
    column-gap: 2rem;
    row-gap: 2.5rem;
    margin: 3rem 0rem;

    @media screen and (max-width: 600px) {
      grid-template-columns: repeat(1, auto);
    }
  }
`;
