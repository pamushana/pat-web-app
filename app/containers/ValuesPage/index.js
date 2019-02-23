/**
 *
 * ValuesPage
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
  Form,
  Divider,
  Radio,
  Button
} from 'semantic-ui-react';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectValuesPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import History from 'images/history.jpg';
import Mission from 'images/mission.jpg';
import Values from 'images/values.jpg';
import Agriculture from 'images/agriculture.jpg';
import Vision from 'images/vision.jpg';
import PamTrans from 'images/pamtrans.jpg';

/* eslint-disable react/prefer-stateless-function */
export class ValuesPage extends React.PureComponent {
  render() {
    return (
      <Container style={{ marginTop: '6em', marginBottom: '3em', paddingLeft: '4em', paddingRight: '4em' }}>
        <Header as="h2">
          <Icon name="balance scale" color="red" />
          <Header.Content>
            Values
            <Header.Subheader>
              Our sevices are founded on a set of strong values
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Grid columns='three'>
          <Grid.Row>
            <Grid.Column>
              <Container>
                <Image src={Vision} size='medium' circular />
                <Card fluid raised>
                  <Card.Content>
                    <Card.Header>Vision</Card.Header>
                    <Card.Meta>".. is to improve transportation"</Card.Meta>
                    <Card.Description>Pamushana Africa Transport is committed to improve travelling of Customers in Zimbabwe and beyond the borders through provision of mutually lifelong beneficial relationships, growing the business through seeking favour and guidance from God</Card.Description>
                  </Card.Content>
                </Card>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Container>
                <Image src={Mission} size='medium' circular />
                <Card fluid raised>
                  <Card.Content>
                    <Card.Header>Mission</Card.Header>
                    <Card.Meta>".. grow Pamushana Africa in excellence"</Card.Meta>
                    <Card.Description>To maintain, grow and lead Pamushana Africa Transport as a world class transport services provider in Southern Africa through safely providing a touch of excellence in transporting people and goods across the continent. So help us God.</Card.Description>
                  </Card.Content>
                </Card>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Container>
                <Image src={Values} size='medium' circular />
                <Card fluid raised>
                  <Card.Content>
                    <Card.Header>Values</Card.Header>
                    <Card.Meta>Safety Teamwork Professionalism Humility</Card.Meta>
                    <Card.Description>Above all we value team work and believe in servant service. We have a team of professionals who have taken the corporate mission to heart and pursue excellency in humility to provide a safe means of transport for Africa. </Card.Description>
                  </Card.Content>
                </Card>
              </Container>
            </Grid.Column>
          </Grid.Row>
          <Divider hidden />
          <Grid.Row>
            <Grid.Column>
              <Container>
                <Image src={History} size='medium' circular />
                <Card fluid raised>
                  <Card.Content>
                    <Card.Header>History</Card.Header>
                    <Card.Meta>"Incorporated on 13 April 2004"</Card.Meta>
                    <Card.Description>Pamushana Africa Group (PAG) was incorporated on 13 April 2004 as business with diversified interests. The Group is a producer, marketer and distributor of fresh farm produce as well as a passenger and cargo transporter. We also have a security startup.</Card.Description>
                  </Card.Content>
                </Card>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Container>
                <Image src={Agriculture} size='medium' circular />
                <Card fluid raised>
                  <Card.Content>
                    <Card.Header>Divisions</Card.Header>
                    <Card.Meta>"We are part of a family"</Card.Meta>
                    <Card.Description>We are a holding company with investment interests in: Transport, Farming, Security. Group companies include: Pamushana Africa Transport, Pamushana Africa Agriculture, Pamushana Africa Security t/a Crime Stoppers Security</Card.Description>
                  </Card.Content>
                </Card>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Container>
                <Image src={PamTrans} size='medium' circular />
                <Card fluid raised>
                  <Card.Content>
                    <Card.Header>Pamushana Transport</Card.Header>
                    <Card.Meta>Redefining Transport</Card.Meta>
                    <Card.Description>Our philosophy, at Pamushana, is one that emphasizes service delivery and also realises effective communication, competitiveness, flexibility and professionalism as key fundamentals in creating and maintaining a leading edge.</Card.Description>
                  </Card.Content>
                </Card>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

ValuesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  valuesPage: makeSelectValuesPage(),
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

const withReducer = injectReducer({ key: 'valuesPage', reducer });
const withSaga = injectSaga({ key: 'valuesPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ValuesPage);
