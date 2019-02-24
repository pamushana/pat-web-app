import { fromJS } from 'immutable';
import careersPageReducer from '../reducer';

describe('careersPageReducer', () => {
  it('returns the initial state', () => {
    expect(careersPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
