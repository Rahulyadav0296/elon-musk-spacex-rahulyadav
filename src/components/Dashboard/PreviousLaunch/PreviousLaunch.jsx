import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPrevIndex,
  setPrevLaunches,
  setPrevSlideWidth,
} from "../../../utils/carouselActions";
import LaunchedPrev from "./LaunchedPrev";

function PreviousLaunch() {
  const dispatch = useDispatch();
  const carouselRef = useRef(null);
  const prevIndex = useSelector((state) => state.carousel.prevIndex);
  const prevSlideWidth = useSelector((state) => state.carousel.prevSlideWidth);
  const prevLaunches = useSelector((state) => state.carousel.prevLaunches);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches/past")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(setPrevLaunches(data));
      })
      .catch((error) => console.error(error));
  }, [dispatch]);

  useEffect(() => {
    if (carouselRef.current && carouselRef.current.children.length > 0) {
      const firstSlide = carouselRef.current.children[0];
      dispatch(setPrevSlideWidth(firstSlide.getBoundingClientRect().width));
    }
  }, [prevLaunches, dispatch]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${
        prevIndex * prevSlideWidth
      }px)`;
    }
  }, [prevIndex, prevSlideWidth]);

  const prevSlide = () => {
    dispatch(
      setPrevIndex(prevIndex > 0 ? prevIndex - 1 : prevLaunches.length - 1)
    );
  };

  const nextSlide = () => {
    dispatch(
      setPrevIndex(prevIndex < prevLaunches.length - 1 ? prevIndex + 1 : 0)
    );
  };

  return (
    <div className="upcoming-launches">
      <h4 className="heading">Previous Launch</h4>
      <div className="carousel-container">
        <button className="carousel-button prev-button" onClick={prevSlide}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <LaunchedPrev />
        <button className="carousel-button next-button" onClick={nextSlide}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
}

export default PreviousLaunch;
