import { fromJS } from 'immutable';
import hirePageReducer from '../reducer';

describe('hirePageReducer', () => {
  it('returns the initial state', () => {
    expect(hirePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
