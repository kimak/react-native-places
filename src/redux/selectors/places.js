import { createSelector } from "reselect";

const getFilter = state => state.placesFilter;
const getPlaces = state => state.places.list;

export const getVisiblePlaces = createSelector(
  [getFilter, getPlaces],
  (visibilityFilter, places) => {
    switch (visibilityFilter) {
      case "all":
        return places;
      case "visited":
        return places.filter(t => t.visited);
      case "new":
        return places.filter(t => !t.visited);
    }
  }
);
