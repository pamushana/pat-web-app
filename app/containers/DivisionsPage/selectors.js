import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the divisionsPage state domain
 */

const selectDivisionsPageDomain = state =>
  state.get('divisionsPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by DivisionsPage
 */

const makeSelectDivisionsPage = () =>
  createSelector(selectDivisionsPageDomain, substate => substate.toJS());

export default makeSelectDivisionsPage;
export { selectDivisionsPageDomain };
