import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the tourPage state domain
 */

const selectTourPageDomain = state => state.get('tourPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by TourPage
 */

const makeSelectTourPage = () =>
  createSelector(selectTourPageDomain, substate => substate.toJS());

export default makeSelectTourPage;
export { selectTourPageDomain };
