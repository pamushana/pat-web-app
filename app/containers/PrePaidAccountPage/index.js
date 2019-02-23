/**
 *
 * PrePaidAccountPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  Segment,
  Menu,
  Image,
  Icon,
  Container,
  Header,
  Card,
  Grid,
  Rating,
  Form,
  Radio,
  Button,
  Statistic,
} from 'semantic-ui-react';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import BillingForm from 'components/BillingForm/Loadable';
import makeSelectPrePaidAccountPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class PrePaidAccountPage extends React.PureComponent {
  render() {
    return (
      <Container style={{ marginTop: '6em', marginBottom: '3em', paddingLeft: '4em', paddingRight: '4em' }}>
        <Header as="h2">
          <Icon name="bus" color="orange" />
          <Header.Content>
            Commute Prepaid Account
            <Header.Subheader>
              Manage your Pamushana account
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Segment>
          <Statistic.Group widths='four'>
            <Statistic>
              <Statistic.Value>
                22
              </Statistic.Value>
              <Statistic.Label>
                Tickets Left
              </Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>
                220
              </Statistic.Value>
              <Statistic.Label>Total Tickets</Statistic.Label>
            </Statistic>

            <Statistic>
              <Statistic.Value>
                4
              </Statistic.Value>
              <Statistic.Label>Loyalty Points</Statistic.Label>
            </Statistic>

            <Statistic>
              <Statistic.Value>
                <Rating maxRating={5} defaultRating={3} icon='star' size='massive' />
              </Statistic.Value>
              <Statistic.Label>Rating</Statistic.Label>
            </Statistic>

          </Statistic.Group>
        </Segment>
        <Header as="h4" style={{ marginTop: '6em', marginBottom: '1em' }}>
          <Icon name="credit card" color="blue" size='small' />
          <Header.Content>
            Purchase Tickets
            <Header.Subheader>
              Add tickets to your card
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Segment attached>
          <BillingForm />
        </Segment>
        <Button color='blue' attached='bottom'>Purchase Tickets</Button>
        <Header as="h4" style={{ marginTop: '6em', marginBottom: '1em' }}>
          <Icon name="settings" color="red" size='small' />
          <Header.Content>
            Manage Account
            <Header.Subheader>
              Manage your pre-paid account
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Segment>
          <Button.Group widths='3'>
            <Button color='green'>Activate Card</Button>
            <Button color='orange'>Deactivate Card</Button>
            <Button color='red'>Block Card</Button>
          </Button.Group>
        </Segment>
      </Container>
    );
  }
}

PrePaidAccountPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  prePaidAccountPage: makeSelectPrePaidAccountPage(),
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

const withReducer = injectReducer({ key: 'prePaidAccountPage', reducer });
const withSaga = injectSaga({ key: 'prePaidAccountPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PrePaidAccountPage);
