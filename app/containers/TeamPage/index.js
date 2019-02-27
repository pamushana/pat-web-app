/**
 *
 * TeamPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Card, Icon, Image, Container, Header } from 'semantic-ui-react';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Boss from 'images/boss1.jpg';
import makeSelectTeamPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import Madam from 'images/madam3.jpg';

/* eslint-disable react/prefer-stateless-function */
export class TeamPage extends React.PureComponent {
  render() {
    return (
      <Container
        style={{
          marginTop: '6em',
          marginBottom: '3em',
          paddingLeft: '4em',
          paddingRight: '4em',
        }}
      >
        <Header as="h2">
          <Icon name="users" color="red" />
          <Header.Content>
            Team Pamushana
            <Header.Subheader>
              We are dedicated to deliver the ultimate travel experience
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Card.Group itemsPerRow={3} style={{ padding: '2em' }}>
          <Card raised color="red">
            <Image src={Boss} />
            <Card.Content>
              <Card.Header>Tatenda H. Chipika</Card.Header>
              <Card.Meta>Joined in 2010</Card.Meta>
              <Card.Description>
                Tatenda is the visionary CEO and founder behind Pamushana Africa
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="facebook official" size="large" />
              </a>
              <a>
                <Icon name="twitter square" size="large" />
              </a>
              <a>
                <Icon name="linkedin square" size="large" />
              </a>
            </Card.Content>
          </Card>
          <Card raised color="red">
            <Image src={Madam} />
            <Card.Content>
              <Card.Header>Clarisa Chipika</Card.Header>
              <Card.Meta>Joined in 2010</Card.Meta>
              <Card.Description>
                Clarisa is the HR and Business Development Manager of Pamushana
                Africa
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="facebook official" size="large" />
              </a>
              <a>
                <Icon name="twitter square" size="large" />
              </a>
              <a>
                <Icon name="linkedin square" size="large" />
              </a>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    );
  }
}

TeamPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  teamPage: makeSelectTeamPage(),
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

const withReducer = injectReducer({ key: 'teamPage', reducer });
const withSaga = injectSaga({ key: 'teamPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TeamPage);
