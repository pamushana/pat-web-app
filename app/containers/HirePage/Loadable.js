/**
 *
 * Asynchronously loads the component for HirePage
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
