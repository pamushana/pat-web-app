/**
 *
 * GalleryPage
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
  Radio,
  Button
} from 'semantic-ui-react';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectGalleryPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import Slide1 from 'images/tour1.jpg';
import Slide2 from 'images/tour2.jpg';
import Slide3 from 'images/tour3.jpg';
import Slide4 from 'images/tour4.jpg';

/* eslint-disable react/prefer-stateless-function */
export class GalleryPage extends React.PureComponent {
  render() {
    return (
      <Container style={{ marginTop: '6em', marginBottom: '3em', paddingLeft: '4em', paddingRight: '4em' }}>
        <Header as="h3">
          <Icon name="binoculars" color="green" />
          <Header.Content>
            Tours
            <Header.Subheader>
              Moments captured as we tour around the country
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Segment style={{ marginTop: '2em', marginLeft: '2em', marginRight: '2em', marginBottom: '4em' }} raised>
          <Image.Group size='medium'>
            <Image src={Slide1} verticalAlign='bottom' />
            <Image src={Slide2} verticalAlign='bottom' />
            <Image src={Slide3} verticalAlign='bottom' />
            <Image src={Slide4} verticalAlign='bottom' />
          </Image.Group>
        </Segment>
        <Header as="h3">
          <Icon name="users" color="blue" />
          <Header.Content>
            Community
            <Header.Subheader>
              Moments captured with Pamushana Friends
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Segment style={{ marginTop: '2em', marginLeft: '2em', marginRight: '2em', marginBottom: '4em' }} raised>
          <Image.Group size='medium'>
            <Image src={Slide1} verticalAlign='bottom' />
            <Image src={Slide2} verticalAlign='bottom' />
            <Image src={Slide3} verticalAlign='bottom' />
            <Image src={Slide4} verticalAlign='bottom' />
          </Image.Group>
        </Segment>
        <Header as="h3">
          <Icon name="bus" color="orange" />
          <Header.Content>
            Fleet
            <Header.Subheader>
              Various pictures of our fleet
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Segment style={{ marginTop: '2em', marginLeft: '2em', marginRight: '2em', marginBottom: '4em' }} raised>
          <Image.Group size='medium'>
            <Image src={Slide1} verticalAlign='bottom' />
            <Image src={Slide2} verticalAlign='bottom' />
            <Image src={Slide3} verticalAlign='bottom' />
            <Image src={Slide4} verticalAlign='bottom' />
          </Image.Group>
        </Segment>
        <Header as="h3">
          <Icon name="sun" color="yellow" />
          <Header.Content>
            Charity
            <Header.Subheader>
              Moments captured as we give back to our society
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Segment style={{ marginTop: '2em', marginLeft: '2em', marginRight: '2em', marginBottom: '4em' }} raised>
          <Image.Group size='medium'>
            <Image src={Slide1} verticalAlign='bottom' />
            <Image src={Slide2} verticalAlign='bottom' />
            <Image src={Slide3} verticalAlign='bottom' />
            <Image src={Slide4} verticalAlign='bottom' />
          </Image.Group>
        </Segment>
      </Container>
    );
  }
}

GalleryPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  galleryPage: makeSelectGalleryPage(),
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

const withReducer = injectReducer({ key: 'galleryPage', reducer });
const withSaga = injectSaga({ key: 'galleryPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(GalleryPage);
