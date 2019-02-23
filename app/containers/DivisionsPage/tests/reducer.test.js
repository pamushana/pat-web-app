import { fromJS } from 'immutable';
import divisionsPageReducer from '../reducer';

describe('divisionsPageReducer', () => {
  it('returns the initial state', () => {
    expect(divisionsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
