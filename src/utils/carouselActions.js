export const SET_CURRENT_INDEX = "SET_CURRENT_INDEX";
export const SET_SLIDE_WIDTH = "SET_SLIDE_WIDTH";
export const SET_LAUNCHES = "SET_LAUNCHES";
export const SET_PREV_LAUNCHES = "SET_PREV_LAUNCHES";
export const SET_PREV_INDEX = "SET_PREV_INDEX";
export const SET_PREV_SLIDE_WIDTH = "SET_PREV_SLIDE_WIDTH";

export const setCurrentIndex = (index) => ({
  type: SET_CURRENT_INDEX,
  payload: index,
});

export const setSlideWidth = (width) => ({
  type: SET_SLIDE_WIDTH,
  payload: width,
});

export const setLaunches = (launches) => ({
  type: SET_LAUNCHES,
  payload: launches,
});

export const setPrevLaunches = (prevLaunches) => ({
  type: SET_PREV_LAUNCHES,
  payload: prevLaunches,
});

export const setPrevIndex = (index) => ({
  type: SET_PREV_INDEX,
  payload: index,
});

export const setPrevSlideWidth = (width) => ({
  type: SET_PREV_SLIDE_WIDTH,
  payload: width,
});
