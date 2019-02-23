import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the fleetPage state domain
 */

const selectFleetPageDomain = state => state.get('fleetPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by FleetPage
 */

const makeSelectFleetPage = () =>
  createSelector(selectFleetPageDomain, substate => substate.toJS());

export default makeSelectFleetPage;
export { selectFleetPageDomain };
