import * as types from './../actions/actionTypes';

const initialState = [];

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.DO_SOMETHING: {
      return ['did something!'];
    }
    default:
      return state;
  }
}

export default reducer;
