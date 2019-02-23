import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the commuteRoutesPage state domain
 */

const selectCommuteRoutesPageDomain = state =>
  state.get('commuteRoutesPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by CommuteRoutesPage
 */

const makeSelectCommuteRoutesPage = () =>
  createSelector(selectCommuteRoutesPageDomain, substate => substate.toJS());

export default makeSelectCommuteRoutesPage;
export { selectCommuteRoutesPageDomain };
