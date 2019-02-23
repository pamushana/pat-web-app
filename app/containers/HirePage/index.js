/**
 *
 * HirePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Container, Header, Icon } from 'semantic-ui-react';
import HireApp from 'components/HireCalculator/Loadable';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHirePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class HirePage extends React.PureComponent {
  render() {
    return (
      <Container style={{ marginTop: '6em', marginBottom: '3em', paddingLeft: '4em', paddingRight: '4em' }}>
        <Header as="h2">
          <Icon name="suitcase" color="orange" />
          <Header.Content>
            Plan your trip for convinience
            <Header.Subheader>
              Use our hiring application and get a quotation
            </Header.Subheader>
          </Header.Content>
        </Header>
        <HireApp/>
      </Container>
    );
  }
}

HirePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  hirePage: makeSelectHirePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'hirePage', reducer });
const withSaga = injectSaga({ key: 'hirePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HirePage);
