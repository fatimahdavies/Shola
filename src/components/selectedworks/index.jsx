import React from "react";
import styled from "styled-components";
import CustomCarousel from "../uis/carousel";
import SlideCard from "../uis/slidecard";

export const SlideControl = ({ next, previous, goToSlide, ...rest }) => {
  return (
    <SlideControls>
      <img src="/assets/images/swipe.gif" alt="swipe" onClick={() => next()} />
    </SlideControls>
  );
};

const SlideControls = styled.div`
  position: absolute;
  right: 5%;
  bottom: 93%;
  img {
    width: 5rem;
  }
`;

const SelectedWorks = () => {
  return (
    <SelectedWorksContainer>
      <SelectedWorksHeader>
        <h2>Selected Works</h2>
      </SelectedWorksHeader>
      <CustomCarousel
        carousel_items={[
          <SlideCard
            card_image="/assets/images/project1.jpg"
            card_title="Wellness Super App"
            card_body_text="A Health Maintanence Platform"
            card_image_bg_color={"#C0FDF2"}
            card_tags={[
              "Mobile Application",
              "Android Design",
              "Mobile Design",
            ]}
          />,
          <SlideCard
            card_image="/assets/images/project2.jpg"
            card_title="CP Trading Platform"
            card_body_text="A Financial Trading Platform"
            card_image_bg_color="#E9C0FD"
            card_tags={[
              "Web Application",
              "Investments",
              "Financial Trading",
              "Mobile Application",
            ]}
          />,
          <SlideCard
            card_image="/assets/images/project2.jpg"
            card_title="HumanaR"
            card_body_text="A Human Resource Management System"
            card_image_bg_color="#C0FDE0"
            card_tags={["Web Application", "Android Design", "Mobile Design"]}
          />,
        ]}
      />
    </SelectedWorksContainer>
  );
};

export default SelectedWorks;

const SelectedWorksContainer = styled.div`
  margin: 2rem 0 2rem 8%;
  padding-right: 1.5rem;
  position: relative;
`;

const SelectedWorksHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0rem 0rem 4rem 0rem;
  img {
    width: 5rem;
  }
`;
