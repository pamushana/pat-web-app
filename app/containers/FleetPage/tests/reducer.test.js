import { fromJS } from 'immutable';
import fleetPageReducer from '../reducer';

describe('fleetPageReducer', () => {
  it('returns the initial state', () => {
    expect(fleetPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
