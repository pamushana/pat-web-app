/**
 *
 * CareersPage
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
  Input,
  Select,
  TextArea,
  Container,
  Header,
  Modal,
  Card,
  Grid,
  Form,
  Label,
  Radio,
  Button,
  Accordion,
} from 'semantic-ui-react';
import Logo from 'images/icon-512x512.png';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCareersPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
];

export class CareersPage extends React.PureComponent {
  state = { open: false };

  close = () => this.setState({ open: false });

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    const { open } = this.state;
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
          <Icon name="briefcase" color="orange" />
          <Header.Content>
            Careers
            <Header.Subheader>
              Become part of the Pamushana family
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Container
          style={{ margin: '4em', paddingLeft: '4em', paddingRight: '4em' }}
        >
          <Card.Group itemsPerRow={3}>
            <Card>
              <Card.Content>
                <Image floated="right" size="mini" src={Logo} />
                <Card.Header>Driver</Card.Header>
                <Card.Meta>Fleet Driver</Card.Meta>
                <Card.Description>
                  Do you have a clean class 1 driver's licence and defensive
                  driving certificate?
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button
                  animated
                  fluid
                  basic
                  color="orange"
                  onClick={() => this.setState({ open: true, value: 'driver' })}
                >
                  <Button.Content visible>Apply Now</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Image floated="right" size="mini" src={Logo} />
                <Card.Header>Administrator</Card.Header>
                <Card.Meta>Fleet Administrator</Card.Meta>
                <Card.Description>
                  Do you have administrative qualifications? An MBA?
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button
                  animated
                  fluid
                  basic
                  color="orange"
                  onClick={() => this.setState({ open: true, value: 'admin' })}
                >
                  <Button.Content visible>Apply Now</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Image floated="right" size="mini" src={Logo} />
                <Card.Header>Agent</Card.Header>
                <Card.Meta>Hiring & Tours Agent</Card.Meta>
                <Card.Description>
                  Are you good at selling? We are looking for individuals to
                  market our services!
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button
                  animated
                  fluid
                  basic
                  color="orange"
                  onClick={() => this.setState({ open: true, value: 'agent' })}
                >
                  <Button.Content visible>Apply Now</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Card.Content>
            </Card>
          </Card.Group>
          <Modal dimmer="blurring" open={open} onClose={this.close}>
            <Modal.Header>Fill in the form</Modal.Header>
            <Modal.Content style={{ paddingLeft: '4em', paddingRight: '4em' }}>
              <Form>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="First name"
                    placeholder="First name"
                  />
                  <Form.Input fluid label="Last name" placeholder="Last name" />
                  <Form.Select
                    fluid
                    label="Gender"
                    options={options}
                    placeholder="Gender"
                  />
                </Form.Group>
                <Form.Group inline>
                  <label>Job interested in: </label>
                  <Form.Radio
                    label="Driver"
                    value="driver"
                    checked={value === 'driver'}
                    onChange={this.handleChange}
                  />
                  <Form.Radio
                    label="Administrator"
                    value="admin"
                    checked={value === 'admin'}
                    onChange={this.handleChange}
                  />
                  <Form.Radio
                    label="Agent"
                    value="agent"
                    checked={value === 'agent'}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.TextArea
                  label="About"
                  placeholder="Tell us more about you..."
                />
                <Form.Checkbox label="I agree to the Terms and Conditions" />
              </Form>
            </Modal.Content>
            <Modal.Actions>
              <Button color="black" onClick={this.close}>
                Cancel
              </Button>
              <Button
                positive
                icon="checkmark"
                labelPosition="right"
                content="Submit"
                onClick={this.close}
              />
            </Modal.Actions>
          </Modal>
        </Container>
      </Container>
    );
  }
}

CareersPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  careersPage: makeSelectCareersPage(),
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

const withReducer = injectReducer({ key: 'careersPage', reducer });
const withSaga = injectSaga({ key: 'careersPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CareersPage);
