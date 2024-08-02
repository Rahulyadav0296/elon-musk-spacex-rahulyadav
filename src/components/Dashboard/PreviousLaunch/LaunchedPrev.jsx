import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSlideWidth } from "../../../utils/carouselActions";
import Links from "../UpcomingLaunch/Links";
import Paragraph from "../UpcomingLaunch/Paragraph";
import MissionInfo from "./MissionInfo";

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

function LaunchedPrev() {
  const prevLaunches = useSelector((state) => state.carousel.prevLaunches);
  const carouselRef = useRef(null);
  const prevIndex = useSelector((state) => state.carousel.prevIndex);
  const prevSlideWidth = useSelector((state) => state.carousel.prevSlideWidth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (carouselRef.current && carouselRef.current.children.length > 0) {
      const firstSlide = carouselRef.current.children[0];
      dispatch(setSlideWidth(firstSlide.getBoundingClientRect().width));
    }
  }, [prevLaunches, dispatch]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${
        prevIndex * prevSlideWidth
      }px)`;
    }
  }, [prevIndex, prevSlideWidth]);

  return (
    <div className="carousel" ref={carouselRef}>
      {prevLaunches.map((launch, index) => (
        <div className="launch-item" key={index}>
          <div className="launch-details">
            <Paragraph label="MISSION NAME" value={launch.mission_name} />
            <Paragraph label="ROCKET" value={launch.rocket.rocket_name} />
            <Paragraph label="FLIGHT NUMBER" value={launch.flight_number} />
            <Paragraph label="TIME" value={getTime(launch.launch_date_local)} />
            <Links launch={launch} />
          </div>
          <MissionInfo launch={launch} />
        </div>
      ))}
    </div>
  );
}

export default LaunchedPrev;
