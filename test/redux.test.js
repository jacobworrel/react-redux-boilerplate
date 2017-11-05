import * as actionCreators from './../src/actions/actionCreators';
import reducer from './../src/reducers/reducer';

describe('redux reducer', () => {
  it('should do something', () => {
    const initialState = [];
    const action = actionCreators.doSomething();
    const newState = ['did something!'];
    expect(reducer(initialState, action)).toEqual(newState);
  });
});
