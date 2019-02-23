/*
 * TourPage Messages
 *
 * This contains all the text for the TourPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.TourPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: `You can book for any of
    the tours on the calendar using the form below.
    Fill in all required information and you will
    receive a confirmation message and details to make your  payment.`,
  },
});
