import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the careersPage state domain
 */

const selectCareersPageDomain = state => state.get('careersPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by CareersPage
 */

const makeSelectCareersPage = () =>
  createSelector(selectCareersPageDomain, substate => substate.toJS());

export default makeSelectCareersPage;
export { selectCareersPageDomain };
