import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the prePaidAccountPage state domain
 */

const selectPrePaidAccountPageDomain = state =>
  state.get('prePaidAccountPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by PrePaidAccountPage
 */

const makeSelectPrePaidAccountPage = () =>
  createSelector(selectPrePaidAccountPageDomain, substate => substate.toJS());

export default makeSelectPrePaidAccountPage;
export { selectPrePaidAccountPageDomain };
