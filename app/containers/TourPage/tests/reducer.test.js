import { fromJS } from 'immutable';
import tourPageReducer from '../reducer';

describe('tourPageReducer', () => {
  it('returns the initial state', () => {
    expect(tourPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
