/**
 *
 * ContactPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Segment, Menu, Image, Icon, Input, Select, TextArea, Container, Header, Card, Grid, Form, Radio, Button, Accordion } from 'semantic-ui-react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectContactPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: -17.801868, lng: 31.002553 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -17.801868, lng: 31.002553 }} />}
  </GoogleMap>
))
const genderOptions = [
  {
    key: 'm',
    text: 'Male',
    value: 'male',
  },
  {
    key: 'f',
    text: 'Female',
    value: 'female',
  },
];
/* eslint-disable react/prefer-stateless-function */
export class ContactPage extends React.PureComponent {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;
    return (
      <Container style={{ marginTop: '6em', marginBottom: '3em', paddingLeft: '4em', paddingRight: '4em' }}>
        <Header as="h3">
          <Icon name="question" color="orange" />
          <Header.Content>
            Frequently Asked Questions
            <Header.Subheader>
              Some questions we have answered already
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Container style={{ margin: '4em', paddingLeft: '4em', paddingRight: '4em' }}>
          <Accordion fluid styled>
            <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
              <Icon name='dropdown' />
              Where does Pamushana Africa operate ?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <Container text>
                Pamushana Africa is a privately held diversified group with operations and investment across Zimbabwe.
                Please go to our operating zones and our corporate pages to learn more
              </Container>
            </Accordion.Content>

            <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
              <Icon name='dropdown' />
              Where are the Pamushana Africa headquarters?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              <Container text>
                <Grid>
                  <Grid.Column width={8} verticalAlign='middle'>
                    <p>Pamushana House</p>
                    <p>2 Lauchlan Avenue</p>
                    <p>Meyrick Park</p>
                    <p>Harare</p>
                    <p>Zimbabwe</p>
                  </Grid.Column>
                  <Grid.Column width={8}>
                  <Segment fluid>
                    <MyMapComponent
                      isMarkerShown
                      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA05HkBJddTEsc7x960AXP_OsLjFiWPeb8&v=3.exp&libraries=geometry,drawing,places"
                      loadingElement={<div style={{ height: `100%` }} />}
                      containerElement={<div style={{ height: `300px` }} />}
                      mapElement={<div style={{ height: `100%` }} />}
                    />
                    </Segment>
                  </Grid.Column>
                </Grid>
              </Container>
            </Accordion.Content>

            <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
              <Icon name='dropdown' />
              How was Pamushana Africa founded?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
              <Container text>
                Pamushana Africa was founded in 2004 by Hardlife T. Chipika, who first came to prominence when he launched a new way of doing business leading to the ease of commuting on the local routes of Zimbabwe’s capital.
                This was regarded as one of the milestones in the commuting industry.
              </Container>
            </Accordion.Content>

            <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
              <Icon name='dropdown' />
              What are the Pamushana Africa subsidiaries ?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 3}>
              <Container text>
                Pamushana Africa subsidiaries include Pamushana Africa Transport, Pamushana Africa Agriculture and Pamushana Africa Security.
              </Container>
            </Accordion.Content>

            <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
              <Icon name='dropdown' />
              What is Pamushana Africa approach to corporate responsibility?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 4}>
              <Container text>
                Pamushana Africa has a strong legacy of ongoing commitment to practicing the principles of Corporate Responsibility.Over the years, PamushanaAfrica has developed many programs which have spearheaded transformation in the lives of thousands of individuals and communities.
              </Container>
            </Accordion.Content>

            <Accordion.Title active={activeIndex === 5} index={5} onClick={this.handleClick}>
              <Icon name='dropdown' />
              Where can I learn about opportunities within the Pamushana Africa Group
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 5}>
              <Container text>
                Please visit the Careers section of the website to learn more about current openings within the company.
              </Container>
            </Accordion.Content>
          </Accordion>
        </Container>
        <Header as="h3">
          <Icon name="envelope" color="orange" />
          <Header.Content>
            WebMail
            <Header.Subheader>
              Send us a web mail now
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Segment style={{ margin: '4em', background: 'olive' }}>
          <Form style={{ padding: '4em' }}>
            <Form.Group widths="equal">
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                label="First name"
                placeholder="First name"
              />
              <Form.Field
                id="form-input-control-last-name"
                control={Input}
                label="Last name"
                placeholder="Last name"
              />
              <Form.Field
                control={Select}
                options={genderOptions}
                label={{
                  children: 'Gender',
                  htmlFor: 'form-select-control-gender',
                }}
                placeholder="Gender"
                search
                searchInput={{ id: 'form-select-control-gender' }}
              />
            </Form.Group>
            <Form.Field>
              <label>Email</label>
              <input placeholder="Email" />
            </Form.Field>
            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              label="Message"
              placeholder="Message"
            />
            <Form.Field
              id="form-button-control-public"
              control={Button}
              color="orange"
              content="Send Mail"
            />
          </Form>
        </Segment>

        <Header as="h3">
          <Icon name="envelope" color="orange" />
          <Header.Content>
            Contacts
            <Header.Subheader>
              Looking for alternative ways to get in touch?
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Segment style={{ margin: '4em' }}>
          <Card.Group>
            <Card>
              <Card.Content>
                <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
                <Card.Header>Steve Sanders</Card.Header>
                <Card.Meta>Friends of Elliot</Card.Meta>
                <Card.Description>
                  Steve wants to add you to the group <strong>best friends</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green'>
                    Approve
                  </Button>
                  <Button basic color='red'>
                    Decline
                  </Button>
                </div>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/molly.png' />
                <Card.Header>Molly Thomas</Card.Header>
                <Card.Meta>New User</Card.Meta>
                <Card.Description>
                  Molly wants to add you to the group <strong>musicians</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green'>
                    Approve
                  </Button>
                  <Button basic color='red'>
                    Decline
                  </Button>
                </div>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' />
                <Card.Header>Jenny Lawrence</Card.Header>
                <Card.Meta>New User</Card.Meta>
                <Card.Description>Jenny requested permission to view your contact details</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button basic color='green'>
                    Approve
                  </Button>
                  <Button basic color='red'>
                    Decline
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Card.Group>
        </Segment>
      </Container>
    );
  }
}

ContactPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  contactPage: makeSelectContactPage(),
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

const withReducer = injectReducer({ key: 'contactPage', reducer });
const withSaga = injectSaga({ key: 'contactPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ContactPage);
