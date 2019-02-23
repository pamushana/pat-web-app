/**
 *
 * Footer
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  Container,
  Image,
  Dropdown,
  Grid,
  Input,
  Card,
  Menu,
  Icon,
  Visibility,
  Segment,
  Label,
  Feed,
  Header,
  Form,
  TextArea,
  Button,
  Select,
} from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Footer extends React.PureComponent {
  render() {
    return (
      <div
        style={{
          paddingTop: '5em',
          paddingBottom: '5em',
          backgroundColor: '#480D0E',
        }}
      >
      <Container text style={{ color: '#FFF'}}>
          <Grid columns='4' divided>
            <Grid.Row>
              <Grid.Column><Header as='h5'><a style={{ color: 'orange'}}>Commute Routes</a></Header></Grid.Column>
              <Grid.Column><Header as='h5'><a style={{ color: 'orange'}}>Tours</a></Header></Grid.Column>
              <Grid.Column><Header as='h5'><a style={{ color: 'orange'}}>Pre-Paid Account</a></Header></Grid.Column>
              <Grid.Column><Header as='h5'><a style={{ color: 'orange'}}>Hiring</a></Header></Grid.Column>
              <Grid.Column><Header as='h5'><a style={{ color: 'orange'}}>Promotions</a></Header></Grid.Column>
              <Grid.Column><Header as='h5'><a style={{ color: 'orange'}}>Advertising</a></Header></Grid.Column>
              <Grid.Column><Header as='h5'><a style={{ color: 'orange'}}>Management</a></Header></Grid.Column>
              <Grid.Column><Header as='h5'><a style={{ color: 'orange'}}>Divisons</a></Header></Grid.Column>
              <Grid.Column><Header as='h5'><a style={{ color: 'orange'}}>Gallery</a></Header></Grid.Column>
              <Grid.Column ><Header as='h5'><a style={{ color: 'orange'}}>Blog</a></Header></Grid.Column>
              <Grid.Column ><Header as='h5'><a style={{ color: 'orange'}}>Fleet</a></Header></Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

Footer.propTypes = {};

export default Footer;
