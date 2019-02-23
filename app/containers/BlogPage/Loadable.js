/**
 *
 * Asynchronously loads the component for BlogPage
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
