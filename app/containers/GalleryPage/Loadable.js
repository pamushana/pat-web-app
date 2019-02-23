/**
 *
 * Asynchronously loads the component for GalleryPage
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
