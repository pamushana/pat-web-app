/**
 *
 * BillingForm
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import {
  Radio,
  Divider,
  Transition,
  Icon,
  Segment,
  Step,
  Label,
  Header,
  Form,
  Table,
} from 'semantic-ui-react';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class BillingForm extends React.PureComponent {
  state = {
    value: 1,
  };
  handleChange = (e, { value }) => this.setState({ value });
  render() {
    const { value } = this.state;
    return (
      <Form>
        <Divider horizontal>
          <Header as="h4">Billing Info</Header>
        </Divider>
        <Form.Group widths="equal">
          <Form.Input fluid placeholder="First name" />
          <Form.Input fluid placeholder="Last name" />
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Input fluid placeholder="Organization (Optional)" />
          <Form.Input fluid placeholder="Address" />
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
      </Form>
    );
  }
}

BillingForm.propTypes = {};

export default BillingForm;
