/**
 *
 * TourPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTourPage from './selectors';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Calendar from 'react-calendar';
import { Segment, Menu, Image, Icon, Container, Header, Card, Grid, Form, Radio, Button } from 'semantic-ui-react';
import Slide1 from 'images/tour1.jpg';
import Slide2 from 'images/tour2.jpg';
import Slide3 from 'images/tour3.jpg';
import Slide4 from 'images/tour4.jpg';
import Slide5 from 'images/tour5.jpg';
import Slide6 from 'images/tour6.jpg';
import Slide7 from 'images/tour7.jpg';
import Slide8 from 'images/tour8.jpg';
import Slide9 from 'images/tour9.jpg';
import Slide10 from 'images/tour10.jpg';
import Slide11 from 'images/tour11.jpg';
import Slide12 from 'images/tour12.jpg';
import Vumba from 'images/vumba.jpg';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
];

/* eslint-disable react/prefer-stateless-function */
export class TourPage extends React.PureComponent {
  state = {
    date: new Date(2019, 4, 25),
  };
  handleChange = (e, { value }) => this.setState({ value });
  render() {
    const { value } = this.state;
    return (
      <Container style={{ marginTop: '6em', marginBottom: '3em', paddingLeft: '4em', paddingRight: '4em' }}>
        <Header as="h2">
          <Icon name="hashtag" color="orange" />
          <Header.Content>
            PamushanaTouriZim
            <Header.Subheader>
              Join the Pamushana Family as we tour Zimbabwe
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Segment style={{ height: '400px' }} raised>
          <CarouselProvider
            naturalSlideWidth={85}
            naturalSlideHeight={55}
            totalSlides={13}
            interval={5000}
            isPlaying
            visibleSlides={2}
          >
            <Slider>
              <Slide index={0}>
                <Image src={Slide1} />
              </Slide>
              <Slide index={1}>
                <Image src={Slide2} />
              </Slide>
              <Slide index={2}>
                <Image src={Slide2} />
              </Slide>
              <Slide index={3}>
                <Image src={Slide3} />
              </Slide>
              <Slide index={4}>
                <Image src={Slide4} />
              </Slide>
              <Slide index={5}>
                <Image src={Slide5} />
              </Slide>
              <Slide index={6}>
                <Image src={Slide6} />
              </Slide>
              <Slide index={7}>
                <Image src={Slide7} />
              </Slide>
              <Slide index={8}>
                <Image src={Slide8} />
              </Slide>
              <Slide index={9}>
                <Image src={Slide9} />
              </Slide>
              <Slide index={10}>
                <Image src={Slide10} />
              </Slide>
              <Slide index={11}>
                <Image src={Slide11} />
              </Slide>
              <Slide index={12}>
                <Image src={Slide12} />
              </Slide>
            </Slider>
            <Menu text>
              <Menu.Menu>
                <ButtonBack>
                  <Icon name="chevron circle left" size="large" />
                </ButtonBack>
              </Menu.Menu>
              <Menu.Menu position="right">
                <ButtonNext>
                  <Icon name="chevron circle right" size="large" />
                </ButtonNext>
              </Menu.Menu>
            </Menu>
          </CarouselProvider>
        </Segment>
        <Container style={{ marginTop: '4em'}}>
          <Header as="h3">
            <Icon name="calendar alternate outline" color="blue" />
            <Header.Content>
              Tour Calendar
              <Header.Subheader>
                We have tours planned all year round!
              </Header.Subheader>
            </Header.Content>
          </Header>
          <Segment raised>
            <Grid columns={2} textAlign='center'>
              <Grid.Row verticalAlign='middle'>
                <Grid.Column>
                  <Card fluid>
                    <Image src={Vumba} />
                    <Card.Content>
                      <Card.Header>Vumba Mountains</Card.Header>
                      <Card.Meta>Date: 25 May 2019</Card.Meta>
                      <Card.Description>All day trip into the Eastern Highlands mountains.</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <a>
                        <Icon name='user' />
                        150 Seats Left
                      </a>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column style={{ padding: '5em' }}>
                  <Calendar value={this.state.date} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Container>
        <Container style={{ marginTop: '4em'}}>
          <Header as="h3">
            <Icon name="ticket" color="red" />
            <Header.Content>
              Tour Booking
              <Header.Subheader>
                Let Pamushana take care of your next retreat
              </Header.Subheader>
            </Header.Content>
          </Header>
          <Segment raised style={{ padding: '3em' }}>
            <Header as='h4'>
              <FormattedMessage {...messages.header} />
            </Header>
            <Form>
              <Form.Group widths="equal">
                <Form.Input fluid placeholder="First name" />
                <Form.Input fluid placeholder="Last name" />
              </Form.Group>

              <Form.Group widths="equal">
                <Form.Input fluid placeholder="Organization (Optional)" />
                <Form.Input fluid placeholder="Street address" />
              </Form.Group>

              <Form.Group widths="equal">
                <Form.Input fluid placeholder="Contact Number" />
                <Form.Input fluid placeholder="Email" />
              </Form.Group>
              <Form.Group inline>
                <label>Payment Method</label>
                <Form.Field
                  control={Radio}
                  label="Ecocash"
                  value="1"
                  checked={value === '1'}
                  onChange={this.handleChange}
                />
                <Form.Field
                  control={Radio}
                  label="Cash"
                  value="2"
                  checked={value === '2'}
                  onChange={this.handleChange}
                />
                <Form.Field
                  control={Radio}
                  label="Bank Transfer"
                  value="3"
                  checked={value === '3'}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button animated type='submit'>
                <Button.Content visible>Next</Button.Content>
                <Button.Content hidden>
                  <Icon name='arrow right' />
                </Button.Content>
              </Button>
            </Form>
          </Segment>
        </Container>
      </Container>
    );
  }
}

TourPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  tourPage: makeSelectTourPage(),
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

const withReducer = injectReducer({ key: 'tourPage', reducer });
const withSaga = injectSaga({ key: 'tourPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TourPage);
