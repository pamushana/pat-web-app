import { fromJS } from 'immutable';
import teamPageReducer from '../reducer';

describe('teamPageReducer', () => {
  it('returns the initial state', () => {
    expect(teamPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
