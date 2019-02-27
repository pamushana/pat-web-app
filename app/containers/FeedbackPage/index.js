/**
 *
 * FeedbackPage
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
  Rating,
  Container,
  Header,
  Card,
  Grid,
  Accordion,
  Form,
  Radio,
  Button
} from 'semantic-ui-react';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectFeedbackPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
];

export class FeedbackPage extends React.PureComponent {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { activeIndex, value} = this.state;
    return (
      <Container style={{ marginTop: '6em', paddingLeft: '4em', paddingRight: '4em', fontSize: '20px' }}>
        <Header as="h2">
          <Icon name="comment alternate" color="blue" />
          <Header.Content>
            Feedback
            <Header.Subheader>
              Help us make Pamushana Africa a better company!
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Container style={{ margin: '3em', paddingLeft: '4em', paddingRight: '4em' }}>
          <Accordion fluid styled>
            <Accordion.Title
              active={activeIndex === 0}
              index={0}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Take a quick survey..
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <Container text>
                <Form>
                  <Form.Group>
                    <Form.Input
                      fluid
                      label="Name"
                      placeholder="Name"
                      width={12}
                    />
                    <Form.Select
                      fluid
                      label="Gender"
                      options={options}
                      placeholder="Gender"
                      width={4}
                    />
                  </Form.Group>
                  <Form.Group inline>
                    <label>Have you ever travlled with Pamushana Africa Transport?</label>
                    <Form.Radio
                      label="Yes"
                      value="yes"
                      checked={value === 'yes'}
                      onChange={this.handleChange}
                    />
                    <Form.Radio
                      label="No"
                      value="no"
                      checked={value === 'no'}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group inline>
                    <label>How do you rate Pamushana Transport payment gateways?</label>
                    <Rating maxRating={5} defaultRating={3} icon='star' size='huge' />
                  </Form.Group>
                  <Form.Group inline>
                    <label>How do you rate Pamushana Transport personnel?</label>
                    <Rating maxRating={5} defaultRating={3} icon='star' size='huge' />
                  </Form.Group>
                  <Form.Group inline>
                    <label>How do you rate Pamushana Transport vehicles?</label>
                    <Rating maxRating={5} defaultRating={3} icon='star' size='huge' />
                  </Form.Group>
                  <Form.TextArea
                    label="Share your experience with us"
                    placeholder="Tell us more about your experience..."
                  />
                  <Button icon labelPosition='left' color='facebook'>
                    <Icon name='thumbs up outline' />
                    Submit
                  </Button>
                </Form>
              </Container>
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex === 1}
              index={1}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Leave a suggestion...
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              <Container text>
                <Form>
                    <Form.Input
                      fluid
                      label="Name"
                      placeholder="Name"
                    />
                  <Form.TextArea
                    label="Message"
                    placeholder="Type your message here..."
                  />
                  <Button icon labelPosition='left' color='facebook'>
                    <Icon name='send' />
                    Send
                  </Button>
                </Form>
              </Container>
            </Accordion.Content>
          </Accordion>
        </Container>
      </Container>
    );
  }
}

FeedbackPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  feedbackPage: makeSelectFeedbackPage(),
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

const withReducer = injectReducer({ key: 'feedbackPage', reducer });
const withSaga = injectSaga({ key: 'feedbackPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(FeedbackPage);
