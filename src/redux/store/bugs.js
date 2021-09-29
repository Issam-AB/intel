// Action types

export const BUG_ADDED = "bugAdded";
export const BUG_REMOVED = "bugRemove";

// Actiom Creators

export const bugAdded = (description) => ({
  type: BUG_ADDED,
  payload: {
    description,
  },
});

export const bugRemove = (id) => ({
  type: BUG_REMOVED,
  payload: {
    id,
  },
});

// Reducer Functions
let lastId = 0;
export default function reducer(state = [], action) {
  switch (action.type) {
    case action.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.description,
          resolved: false,
        },
      ];
    case BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.id);
    default:
      return state;
  }
}
