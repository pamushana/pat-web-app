import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the hirePage state domain
 */

const selectHirePageDomain = state => state.get('hirePage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by HirePage
 */

const makeSelectHirePage = () =>
  createSelector(selectHirePageDomain, substate => substate.toJS());

export default makeSelectHirePage;
export { selectHirePageDomain };
