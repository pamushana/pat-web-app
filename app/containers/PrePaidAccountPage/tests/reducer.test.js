import { fromJS } from 'immutable';
import prePaidAccountPageReducer from '../reducer';

describe('prePaidAccountPageReducer', () => {
  it('returns the initial state', () => {
    expect(prePaidAccountPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
