import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import { SlideControl } from "../../selectedworks";
import styled from "styled-components";

const CustomCarousel = ({ carousel_items }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1240 },
      items: 2.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1.5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      arrows={false}
      renderButtonGroupOutside={true}
      customButtonGroup={<SlideControl />}
      style={{ position: "relative" }}
    >
      {carousel_items?.map((item, index) => (
        <CarouselItem key={index}>{item}</CarouselItem>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;

const CarouselItem = styled.div`
  margin-right: 1.5rem;
`;
