const initialState = {
  filter: "all",
  places: [
    {
      id: 0,
      label: "Hong Kong",
      visited: true
    },
    {
      id: 1,
      label: "Londres",
      visited: true
    },
    {
      id: 2,
      label: "Singapour",
      visited: true
    },
    {
      id: 3,
      label: "Bangkok",
      visited: true
    },
    {
      id: 4,
      label: "Paris"
    },
    {
      id: 5,
      label: "Macao"
    },
    {
      id: 6,
      label: "Dubai"
    },
    {
      id: 7,
      label: "Shenzhen"
    },
    {
      id: 8,
      label: "New York"
    },
    {
      id: 9,
      label: "Istanbul"
    },
    {
      id: 10,
      label: "Kuala Lumpur"
    },
    {
      id: 11,
      label: "Antalya"
    }
  ]
};

function places(state = initialState, action) {
  switch (action.type) {
    case "ADD_PLACE":
      return state.concat([
        { label: action.label, visited: false, id: state.length }
      ]);
    case "TOGGLE_PLACE":
      const newState = state.concat();
      newState[action.index].visited = !newState[action.index].visited;
      return newState;
    default:
      return state;
  }
}

export default places;
