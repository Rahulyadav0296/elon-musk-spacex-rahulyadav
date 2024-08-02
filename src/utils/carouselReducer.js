// reducers/carouselReducer.js
import {
  SET_CURRENT_INDEX,
  SET_LAUNCHES,
  SET_PREV_INDEX,
  SET_PREV_LAUNCHES,
  SET_PREV_SLIDE_WIDTH,
  SET_SLIDE_WIDTH,
} from "./carouselActions";

const initialState = {
  currentIndex: 0,
  slideWidth: 400,
  launches: [],
  prevIndex: 0,
  imageIndex: 0,
  prevSlideWidth: 400,
  prevLaunches: [],
};

const carouselReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_INDEX:
      return {
        ...state,
        currentIndex: action.payload,
      };
    case SET_SLIDE_WIDTH:
      return {
        ...state,
        slideWidth: action.payload,
      };
    case SET_LAUNCHES:
      return {
        ...state,
        launches: action.payload,
      };
    case SET_PREV_INDEX:
      return {
        ...state,
        prevIndex: action.payload,
      };
    case SET_PREV_SLIDE_WIDTH:
      return {
        ...state,
        prevSlideWidth: action.payload,
      };
    case SET_PREV_LAUNCHES:
      return {
        ...state,
        prevLaunches: action.payload,
      };

    default:
      return state;
  }
};

export default carouselReducer;
