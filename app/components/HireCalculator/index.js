/**
 *
 * HireCalculator
 *
 */

import React from 'react';
import {
  Container,
  Image,
  Dropdown,
  Grid,
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
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import BillingForm from 'components/BillingForm/Loadable';
import Logo from 'images/logo.png';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
const options = [
  { key: 1, text: 'chivhu', value: 1 },
  { key: 2, text: 'Masvingo', value: 2 },
  { key: 3, text: 'Gwanda', value: 3 },
  { key: 4, text: 'Bulawayo', value: 4 },
  { key: 5, text: 'Harare', value: 5 },
];
const modeOptions = [
  { key: 1, text: 'bus', value: 1 },
  { key: 2, text: 'truck', value: 2 },
  { key: 3, text: 'Combi', value: 3 },
];

const passengerOptions = [
  { key: 1, text: '15', value: 15 },
  { key: 2, text: '30', value: 30 },
  { key: 3, text: '45', value: 45 },
];

const renderLabel = label => ({
  color: 'orange',
  content: `${label.text}`,
  icon: 'check',
});
/* eslint-disable react/prefer-stateless-function */
class HireCalculator extends React.PureComponent {
  state = {
    searchQuery: '',
    tripInfoModal: true,
    billingModal: false,
    orderModal: false,
    tripInfoComplete: false,
    billingComplete: false,
    orderComplete: false,
    billingFormVisible: false,
    tripInfoVisible: true,
    orderDisabled: true,
  };

  handleChange = (e, { searchQuery, value }) =>
    this.setState({ searchQuery, value });

  handleSearchChange = (e, { searchQuery }) => this.setState({ searchQuery });

  toggleTripInfoModal = () =>
    this.setState({
      tripInfoModal: !this.state.tripInfoModal,
      billingModal: false,
      orderModal: false,
      tripInfoComplete: false,
      tripInfoVisible: true,
    });

  toggleBillingModal = () =>
    this.setState({
      billingModal: !this.state.billingModal,
      tripInfoModal: false,
      orderModal: false,
      billingComplete: false,
      tripInfoComplete: true,
      billingFormVisible: true,
      tripInfoVisible: true,
      orderDisabled: false,
    });

  toggleOrderModal = () =>
    this.setState({
      orderModal: !this.state.orderModal,
      tripInfoModal: false,
      billingModal: false,
      orderComplete: false,
      billingComplete: true,
      tripInfoComplete: true,
      billingFormVisible: false,
      tripInfoVisible: false,
    });

  render() {
    const { searchQuery, value } = this.state;
    const {
      tripInfoModal,
      billingModal,
      orderModal,
      orderComplete,
      billingComplete,
      tripInfoComplete,
      billingDisabled,
      orderDisabled,
      billingFormVisible,
      tripInfoVisible,
    } = this.state;

    return (
      <Segment raised>
        <Step.Group attached="top" widths={3}>
          <Step
            completed={tripInfoComplete}
            active={tripInfoModal}
            link
            onClick={tripInfoModal ? null : this.toggleTripInfoModal}
          >
            <Icon name="bus" />
            <Step.Content>
              <Step.Title>Trip Information</Step.Title>
              <Step.Description>
                Adjust your trip plan
              </Step.Description>
            </Step.Content>
          </Step>

          <Step
            active={billingModal}
            completed={billingComplete}
            disabled={billingDisabled}
            link
            onClick={billingModal ? null : this.toggleBillingModal}
          >
            <Icon name="payment" />
            <Step.Content>
              <Step.Title>Billing</Step.Title>
              <Step.Description>
                Enter billing information
              </Step.Description>
            </Step.Content>
          </Step>

          <Step
            active={orderModal}
            completed={orderComplete}
            disabled={orderDisabled}
            link
            onClick={orderModal ? null : this.toggleOrderModal}
          >
            <Icon name="info" />
            <Step.Content>
              <Step.Title>Confirm Order</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>

        <Segment attached>
          <Transition visible={tripInfoVisible} animation="scale" duration={500}>
            <Form style={{}}>
              <Form.Group widths={2}>
                <Form.Field>
                  <Dropdown
                    onChange={this.handleChange}
                    onSearchChange={this.handleSearchChange}
                    options={options}
                    placeholder="From"
                    search
                    searchQuery={searchQuery}
                    selection
                    renderLabel={renderLabel}
                  />
                </Form.Field>
                <Form.Field>
                  <Dropdown
                    multiple
                    onChange={this.handleChange}
                    onSearchChange={this.handleSearchChange}
                    options={options}
                    placeholder="Travel Via"
                    search
                    searchQuery={searchQuery}
                    selection
                    renderLabel={renderLabel}
                  />
                </Form.Field>

              </Form.Group>
              <Form.Group widths={2}>
                <Form.Field>
                  <Dropdown
                    onChange={this.handleChange}
                    onSearchChange={this.handleSearchChange}
                    options={options}
                    placeholder="Destination"
                    search
                    searchQuery={searchQuery}
                    selection
                    renderLabel={renderLabel}
                  />
                </Form.Field>
                <Form.Field>
                  <Form.Input fluid placeholder="Short description of trip..." />
                </Form.Field>
              </Form.Group>
              <Form.Group widths={2}>
                <Form.Field>
                  <Dropdown
                    options={modeOptions}
                    placeholder="Mode"
                    selection
                  />
                </Form.Field>
                <Form.Field>
                  <Dropdown
                    options={passengerOptions}
                    placeholder="Passengers"
                    selection
                  />
                </Form.Field>
              </Form.Group>
            </Form>
          </Transition>
          <Transition
            visible={billingFormVisible}
            animation="scale"
            duration={500}
          >
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
          </Transition>
          <Transition
            visible={orderModal}
            animation="scale"
            duration={500}
          >
            <Container>
              <Header as="h2" attached="top">
                Quote
                <Image src={Logo} size="massive" floated="right" />
              </Header>
              <Segment attached>
                <Grid columns={2}>
                  <Grid.Row>
                    <Grid.Column>
                      <Segment padded compact  floated='left'>
                          <Label attached='top' color='red'>Pamushana Africa</Label>
                          <br/>BP:0200194660
                          <br/>4 Trent Cres Avonlea, Harare
                          <br/>0773205674 / 0772263868
                          <br/>sales@pamushanaafrica.com
                      </Segment>
                    </Grid.Column>
                    <Grid.Column>
                      <Segment padded compact  floated='right'>
                        <Label attached='top' color='orange'>Quote Number: 10123</Label>
                        <br/>Date: 04/02/2019
                      </Segment>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <Segment padded compact  floated='left'>
                        <Label attached='top' color='orange'>Customer Details</Label>
                        <br/>Schneider Shayne
                        <br/>King Shayne Group
                        <br/>702 Jacaranda Drive, Rusape
                        <br/>0774481007
                        <br/>ezyyinc@gmail.com
                      </Segment>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Table celled color='orange'>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Quantity</Table.HeaderCell>
                      <Table.HeaderCell>Item</Table.HeaderCell>
                      <Table.HeaderCell>Description</Table.HeaderCell>
                      <Table.HeaderCell>Unit Price</Table.HeaderCell>
                      <Table.HeaderCell>TAX %</Table.HeaderCell>
                      <Table.HeaderCell>VAT</Table.HeaderCell>
                      <Table.HeaderCell>Total</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>1</Table.Cell>
                      <Table.Cell>Shuttle Services</Table.Cell>
                      <Table.Cell>St Faith Visiting Day</Table.Cell>
                      <Table.Cell>US$912.00</Table.Cell>
                      <Table.Cell>0</Table.Cell>
                      <Table.Cell>US$0.00</Table.Cell>
                      <Table.Cell>US$912.00</Table.Cell>
                    </Table.Row>
                  </Table.Body>

                  <Table.Footer>
                    <Table.Row>
                      <Table.HeaderCell colSpan='6'>Total</Table.HeaderCell>
                      <Table.HeaderCell>US$912.00</Table.HeaderCell>
                    </Table.Row>
                  </Table.Footer>
                </Table>
                <Grid columns={2}>
                  <Grid.Row>
                    <Grid.Column>
                        <Segment padded compact>
                          <Label attached='top' color='violet'>Bank Details</Label>
                          <br/>Steward Bank Acc
                          <br/>Pamushana Africa Group
                          <br/>Kwame Nkrumah (Sort Code 20102)
                          <br/>Acc No.1001526215
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                      <Container textAlign='right'>
                        <Label as='a' color='violet' >
                          <Icon name='facebook f' /> @PamAfriGroup
                        </Label>
                        <br/>
                        <Label as='a' color='blue' >
                          <Icon name='twitter' /> @pamafrigroup
                        </Label>
                        <br/>
                        <Label as='a' color='green' >
                          <Icon name='phone' /> 0773205674 / 0772263868
                        </Label>
                        <br/>
                        <Label as='a' color='orange' >
                          <Icon name='globe' /> www.pamushanaafrica.com
                        </Label>
                        <br/>
                        <Label as='a' color='yellow' >
                          <Icon name='mail' /> wecare @pamushanaafrica.com
                        </Label>
                        <br/>
                          <Header as='h3'>Thank you for your business.</Header>
                      </Container>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Container>
          </Transition>
        </Segment>
      </Segment>
    );
  }
}

HireCalculator.propTypes = {};

export default HireCalculator;
