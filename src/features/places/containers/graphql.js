import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  fetchPlaces,
  togglePlace,
  addPlace,
  updateFilter
} from "../../../redux/actions/places";
import Component from "../components";
import withDidMount from "../../../shared-ui/hoc/withDidMount";
import withLoading from "../../../shared-ui/hoc/withLoading";
import withError from "../../../shared-ui/hoc/withError";
import {
  getVisiblePlaces,
  filterPlaces
} from "../../../redux/selectors/places";

import { graphql } from "react-apollo";
import gql from "graphql-tag";

const allPlacesQuery = gql`
  query {
    allPlaces {
      id
      label
      visited
    }
  }
`;
const togglePlaceMutation = gql`
  mutation($id: ID!, $visited: Boolean!) {
    updatePlace(id: $id, visited: $visited) {
      id
      visited
    }
  }
`;

const addPlaceMutation = gql`
  mutation($label: String!) {
    createPlace(label: $label) {
      id
    }
  }
`;

function mapDispatchToProps(dispatch) {
  return {
    updateFilter: value => {
      dispatch(updateFilter(value));
    }
  };
}

function mapStateToProps(state) {
  return {
    filter: state.placesFilter
  };
}

const PlacesContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(allPlacesQuery, {
    name: "places",
    props: props => {
      return {
        places: filterPlaces(props.ownProps.filter, props.places.allPlaces),
        error: props.places.error,
        isLoading: props.places.loading,
        refetchPlaces: props.places.refetch
      };
    }
  }),
  graphql(togglePlaceMutation, {
    name: "togglePlaceMutation",
    props: props => {
      return {
        onToggleItem: (id, visited) => {
          props.togglePlaceMutation({
            variables: { id, visited: !visited }
          });
        }
      };
    }
  }),
  graphql(addPlaceMutation, {
    name: "addPlaceMutation",
    props: props => {
      return {
        addItem: label => {
          props.addPlaceMutation({
            variables: { label }
          });
          if (props.ownProps.refetchPlaces) props.ownProps.refetchPlaces();
        }
      };
    }
  }),
  withError,
  withLoading
)(Component);

export default PlacesContainer;
