import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the galleryPage state domain
 */

const selectGalleryPageDomain = state => state.get('galleryPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by GalleryPage
 */

const makeSelectGalleryPage = () =>
  createSelector(selectGalleryPageDomain, substate => substate.toJS());

export default makeSelectGalleryPage;
export { selectGalleryPageDomain };
