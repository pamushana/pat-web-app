import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the valuesPage state domain
 */

const selectValuesPageDomain = state => state.get('valuesPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ValuesPage
 */

const makeSelectValuesPage = () =>
  createSelector(selectValuesPageDomain, substate => substate.toJS());

export default makeSelectValuesPage;
export { selectValuesPageDomain };
