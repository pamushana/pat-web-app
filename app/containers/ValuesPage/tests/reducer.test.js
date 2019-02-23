import { fromJS } from 'immutable';
import valuesPageReducer from '../reducer';

describe('valuesPageReducer', () => {
  it('returns the initial state', () => {
    expect(valuesPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
