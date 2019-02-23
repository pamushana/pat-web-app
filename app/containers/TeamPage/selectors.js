import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the teamPage state domain
 */

const selectTeamPageDomain = state => state.get('teamPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by TeamPage
 */

const makeSelectTeamPage = () =>
  createSelector(selectTeamPageDomain, substate => substate.toJS());

export default makeSelectTeamPage;
export { selectTeamPageDomain };
