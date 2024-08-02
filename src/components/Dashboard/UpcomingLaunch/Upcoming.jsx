import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentIndex,
  setLaunches,
  setSlideWidth,
} from "../../../utils/carouselActions";
import LaunchedItem from "./LaunchedItem";
import "./Upcoming.css";

function Upcoming() {
  const dispatch = useDispatch();
  const carouselRef = useRef(null);
  const currentIndex = useSelector((state) => state.carousel.currentIndex);
  const slideWidth = useSelector((state) => state.carousel.slideWidth);
  const launches = useSelector((state) => state.carousel.launches);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches/upcoming")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setLaunches(data));
      })
      .catch((error) => console.error(error));
  }, [dispatch]);

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

  const prevSlide = () => {
    dispatch(
      setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : launches.length - 1)
    );
  };

  const nextSlide = () => {
    dispatch(
      setCurrentIndex(currentIndex < launches.length - 1 ? currentIndex + 1 : 0)
    );
  };

  return (
    <div className="upcoming-launches">
      <h4 className="heading">Upcoming Launch</h4>
      <div className="carousel-container">
        <button className="carousel-button prev-button" onClick={prevSlide}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <LaunchedItem />
        <button className="carousel-button next-button" onClick={nextSlide}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Upcoming;
