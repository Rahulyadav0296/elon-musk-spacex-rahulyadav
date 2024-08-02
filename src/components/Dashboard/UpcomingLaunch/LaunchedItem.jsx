import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSlideWidth } from "../../../utils/carouselActions";
import Links from "./Links";
import Paragraph from "./Paragraph";
import RocketDetails from "./RocketDetails";

function getTime(currentData) {
  const current = new Date(currentData);
  const options = {
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  return current.toLocaleString("en-US", options);
}

function LaunchedItem() {
  const launches = useSelector((state) => state.carousel.launches);
  const carouselRef = useRef(null);
  const currentIndex = useSelector((state) => state.carousel.currentIndex);
  const slideWidth = useSelector((state) => state.carousel.slideWidth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (carouselRef.current && carouselRef.current.children.length > 0) {
      const firstSlide = carouselRef.current.children[0];
      dispatch(setSlideWidth(firstSlide.getBoundingClientRect().width));
    }
  }, [launches, dispatch]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${
        currentIndex * slideWidth
      }px)`;
    }
  }, [currentIndex, slideWidth]);

  return (
    <div className="carousel" ref={carouselRef}>
      {launches.map((launch, index) => (
        <div className="launch-item" key={index}>
          <div className="launch-details">
            <Paragraph label="MISSION NAME" value={launch.mission_name} />
            <Paragraph label="ROCKET" value={launch.rocket.rocket_name} />
            <Paragraph label="FLIGHT NUMBER" value={launch.flight_number} />
            <Paragraph label="TIME" value={getTime(launch.launch_date_local)} />
            <Links launch={launch} />
          </div>
          <RocketDetails launch={launch} />
        </div>
      ))}
    </div>
  );
}

export default LaunchedItem;
