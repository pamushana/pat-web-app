import { fromJS } from 'immutable';
import commuteRoutesPageReducer from '../reducer';

describe('commuteRoutesPageReducer', () => {
  it('returns the initial state', () => {
    expect(commuteRoutesPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
