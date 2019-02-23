/**
 *
 * HireCalculator
 *
 */

import React from 'react';
import {
  Dropdown,
  Icon,
  Modal,
  Segment,
  Header,
  Form,
  Button,
} from 'semantic-ui-react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import HireApp from 'components/HireCalculator/Loadable';
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
    value: '',
  };

  handleChange = (e, { searchQuery, value }) =>
    this.setState({ searchQuery, value });

  handleSearchChange = (e, { searchQuery }) => this.setState({ searchQuery });

  render() {
    const { searchQuery, value } = this.state;

    return (
      <div style={{ paddingTop: '1em' }}>
        <Header as="h2" attached="top" color="orange" style={{}}>
          Plan your trip with Pamushana Africa
        </Header>
        <Segment
          attached
          style={{ boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)' }}
        >
          <Form>
            <Form.Group inline>
              <Form.Field width={3}>
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
              <Form.Field width={3}>
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
              <Form.Field width={3}>
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
              <Form.Field width={3}>
                <Dropdown
                  options={passengerOptions}
                  placeholder="Passengers"
                  selection
                />
              </Form.Field>
              <Form.Field width={3}>
                <Dropdown options={modeOptions} placeholder="Mode" selection />
              </Form.Field>

              <Modal
                trigger={
                  <Button
                    animated
                    color="orange"
                    size="tiny"
                    floated="right"
                    fluid
                  >
                    <Button.Content visible>Get Quote</Button.Content>
                    <Button.Content hidden>
                      <Icon name="arrow right" />
                    </Button.Content>
                  </Button>
                }
              >
                <Modal.Header>
                  Thank you for choosing to travel with us!
                </Modal.Header>
                <Modal.Content>
                  <HireApp />
                </Modal.Content>
                <Modal.Actions>
                  <Button positive icon labelPosition="right">
                    Send Mail <Icon name="send" />
                  </Button>
                </Modal.Actions>
              </Modal>
            </Form.Group>
          </Form>
        </Segment>
      </div>
    );
  }
}

HireCalculator.propTypes = {};

export default HireCalculator;
