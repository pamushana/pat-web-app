/**
 *
 * CommuteRoutesPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Iframe from 'react-iframe';
import { Segment, Container, Header, Icon } from 'semantic-ui-react';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import makeSelectCommuteRoutesPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
      )}
    </GoogleMap>
  )),
);
/* eslint-disable react/prefer-stateless-function */
export class CommuteRoutesPage extends React.PureComponent {
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
          <Icon name="map" color="orange" />
          <Header.Content>
            Commute Routes
            <Header.Subheader>
              We are adding new commute routes everyday
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Segment raised>
          <MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA05HkBJddTEsc7x960AXP_OsLjFiWPeb8&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `500px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </Segment>
        <Segment>
          <Iframe
            url="http:////my.loccate.com/pro/applications/locator/?key=9e625bcd641e6348b290c035586f73ca&objects=377047&map=roadmap"
            width="100%"
            height="500px"
            display="initial"
            position="relative"
            allowFullScreen
          />
        </Segment>
      </Container>
    );
  }
}

CommuteRoutesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  commuteRoutesPage: makeSelectCommuteRoutesPage(),
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

const withReducer = injectReducer({ key: 'commuteRoutesPage', reducer });
const withSaga = injectSaga({ key: 'commuteRoutesPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CommuteRoutesPage);
