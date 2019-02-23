/**
 *
 * FleetPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Segment, Menu, Image, Icon, Container, Header, Table, Card, Grid, Form, Radio, Button, Accordion, Message } from 'semantic-ui-react';
import { Twitter, Facebook, Linkedin, Whatsapp } from 'react-social-sharing';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectFleetPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Alexis from 'images/alexis.jpg';
import Alexis2 from 'images/alexis2.jpg';
import Lukaku from 'images/banner.png';

/* eslint-disable react/prefer-stateless-function */
export class FleetPage extends React.PureComponent {
  state = { activeIndex: null };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex })
  };

  render() {
      const { activeIndex } = this.state;

      return (
      <Container style={{ marginTop: '6em', marginBottom: '3em', paddingLeft: '4em', paddingRight: '4em' }}>
        <Header as="h2">
          <Icon name="futbol" color="red" />
          <Header.Content>
            Fleet Pamushana
            <Header.Subheader>
              Every detail you need to know about our fleet
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Segment raised placeholder style={{ margin: '4em' }}>
          <Grid textAlign='left'>
            <Grid.Column width={6}>
                <Header as='h2'>
                  <Header.Content>
                    Alexis Sánchez
                    <Header.Subheader>Toyota Quantum</Header.Subheader>
                  </Header.Content>
                </Header>
                <Accordion fluid as={Menu} vertical>

                  <Menu.Item>
                    <Accordion.Title active={activeIndex === 0} content='Basic' index={0} onClick={this.handleClick} />
                    <Accordion.Content active={activeIndex === 0}>
                      <Table collapsing color='red' compact selectable>
                        <Table.Body>
                          <Table.Row>
                            <Table.Cell>Acquired</Table.Cell>
                            <Table.Cell textAlign='right'>December 19, 2017 (age 5 years)</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Brand</Table.Cell>
                            <Table.Cell textAlign='right'>Toyota</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Body Shape</Table.Cell>
                            <Table.Cell textAlign='right'>MPV</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>MMVariant</Table.Cell>
                            <Table.Cell textAlign='right'>QUANTUM 2.7 14 SEAT</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Introdate</Table.Cell>
                            <Table.Cell textAlign='right'>2010-05-01</Table.Cell>
                          </Table.Row>
                        </Table.Body>
                      </Table>
                    </Accordion.Content>
                  </Menu.Item>

                  <Menu.Item>
                    <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick} content='Interior'/>
                    <Accordion.Content active={activeIndex === 1}>
                      <Table collapsing color='red' compact selectable>
                        <Table.Body>
                          <Table.Row>
                            <Table.Cell>Seat Quantity</Table.Cell>
                            <Table.Cell textAlign='right'>14</Table.Cell>
                          </Table.Row>
                        </Table.Body>
                      </Table>
                    </Accordion.Content>
                  </Menu.Item>

                  <Menu.Item>
                    <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick} content='Comfort' />
                    <Accordion.Content active={activeIndex === 2}>
                      <Table collapsing color='red' compact selectable>
                        <Table.Body>
                          <Table.Row>
                            <Table.Cell>Air conditioning</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                        </Table.Body>
                      </Table>
                    </Accordion.Content>
                  </Menu.Item>

                  <Menu.Item>
                    <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick} content='Safety' />
                    <Accordion.Content active={activeIndex === 3}>
                      <Table collapsing color='red' compact selectable>
                        <Table.Body>
                          <Table.Row>
                            <Table.Cell>Antilock braking system(ABS)</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Brake assist(BAS / EBA)</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Driver airbag</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Front passenger airbag</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Airbag quantity</Table.Cell>
                            <Table.Cell textAlign='right'>2</Table.Cell>
                          </Table.Row>
                        </Table.Body>
                      </Table>
                    </Accordion.Content>
                  </Menu.Item>

                  <Menu.Item>
                    <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick} content='Features' />
                    <Accordion.Content active={activeIndex === 4}>
                      <Table collapsing color='red' compact selectable>
                        <Table.Body>
                          <Table.Row>
                            <Table.Cell>Power steering</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>CD player</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Central locking</Table.Cell>
                            <Table.Cell textAlign='right'>Remote</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Remote central locking</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Electric windows</Table.Cell>
                            <Table.Cell textAlign='right'>Front</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Highlevel 3 rd brakelight</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Rear fog lamps lights</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Metallic pearl escent paint</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                        </Table.Body>
                      </Table>
                    </Accordion.Content>
                  </Menu.Item>

                  <Menu.Item>
                    <Accordion.Title active={activeIndex === 5} index={5} onClick={this.handleClick} content='Specifications' />
                    <Accordion.Content active={activeIndex === 5}>
                      <Table collapsing color='red' compact selectable>
                        <Table.Body>
                          <Table.Row>
                            <Table.Cell>Doors</Table.Cell>
                            <Table.Cell textAlign='right'>4</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Fuel Type</Table.Cell>
                            <Table.Cell textAlign='right'>Diesel</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Fuel range average(km)</Table.Cell>
                            <Table.Cell textAlign='right'>490</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Driven wheels</Table.Cell>
                            <Table.Cell textAlign='right'>Rear</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Driven wheels quantity</Table.Cell>
                            <Table.Cell textAlign='right'>2</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Gearratios quantity</Table.Cell>
                            <Table.Cell textAlign='right'>5</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Gearshift</Table.Cell>
                            <Table.Cell textAlign='right'>Manual</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Transmission Type</Table.Cell>
                            <Table.Cell textAlign='right'>Manual</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Front tyres</Table.Cell>
                            <Table.Cell textAlign='right'>195 R15 C</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Reartyres</Table.Cell>
                            <Table.Cell textAlign='right'>195 R15 C</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Length(mm)</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Height(mm)</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Wheel base(mm)</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Ground clearance minimum(mm)</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Ground clearance maximum(mm)</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Width excl mirrors(mm)</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Width incl mirrors(mm)</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Turning circle wheels body(m)</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Unladen / tare / kerb weight(kg)</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Load carrying capacity / payload</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Gross weight(GVM)</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Towing capacity - unbraked</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Towing capacity - braked</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Fuel tank capacity(incl reserve)</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                        </Table.Body>
                      </Table>
                    </Accordion.Content>
                  </Menu.Item>

                  <Menu.Item>
                    <Accordion.Title active={activeIndex === 6} index={6} onClick={this.handleClick} content='Economy' />
                    <Accordion.Content active={activeIndex === 6}>
                      <Table collapsing color='red' compact selectable>
                        <Table.Body>
                          <Table.Row>
                            <Table.Cell>Fuel consumption average(l / 100 km)</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>CO2 emissions average(g / km)</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Emission control phase Euro EU level</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                        </Table.Body>
                      </Table>
                    </Accordion.Content>
                  </Menu.Item>

                  <Menu.Item>
                    <Accordion.Title active={activeIndex === 7} index={7} onClick={this.handleClick} content='Performance'/>
                    <Accordion.Content active={activeIndex === 7}>
                      <Table collapsing color='red' compact selectable>
                        <Table.Body>
                          <Table.Row>
                            <Table.Cell>Power maximum(kW)</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Power maximum total(kW)</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Power peak revs(r / min)</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Power to weight ratio(kW / ton)</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Torque maximum(Nm)</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Torque peak revs(r / min)</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Torque maximum total(Nm)</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Torque to weight ratio(Nm / ton)</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Acceleration 0 - 100 kmh(s)</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Maximum top speed(km / h)</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                        </Table.Body>
                      </Table>
                    </Accordion.Content>
                  </Menu.Item>

                  <Menu.Item>
                    <Accordion.Title active={activeIndex === 8} index={8} onClick={this.handleClick} content='Engine Details' />
                    <Accordion.Content active={activeIndex === 8}>
                      <Table collapsing color='red' compact selectable>
                        <Table.Body>
                          <Table.Row>
                            <Table.Cell>Engine position / location</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Engine capacity(cc)</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>enginedetailshort</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Engine + detail</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Cylinder layout</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Cylinders</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Cylinder layout + quantity</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Cam</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Valves per cylinder</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Variable camvalve timing</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Turbocharger</Table.Cell>
                            <Table.Cell textAlign='right'><Icon name="checkmark" /></Table.Cell>
                          </Table.Row>
                        </Table.Body>
                      </Table>
                    </Accordion.Content>
                  </Menu.Item>
                </Accordion>
                <Container fluid raised>
                  <Twitter solidcircle small message="I am so cool" link="http://sharingbuttons.io"/>
                  <Facebook solidcircle small link="http://sharingbuttons.io"/>
                  <Whatsapp solidcircle small message="Share on Whatsapp" link="http://sharingbuttons.io"/>
                  <Linkedin solidcircle small message="I am so cool" link="http://sharingbuttons.io"/>
                </Container>
            </Grid.Column>
            <Grid.Column width={9} floated='right'>
              <Card.Group itemsPerRow={1}>
                <Card centered link>
                  <Image src={Alexis} centered size='huge' />
                </Card>
                <Card centered raised link>
                  <Image src={Alexis2} centered size='huge'/>
                </Card>
              </Card.Group>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment raised style={{ margin: '4em' }}>
          <Grid textAlign='right'>
            <Grid.Column width={8}>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Grid.Column>
            <Grid.Column width={7}>
              <Image src={Lukaku} />
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
    );
  }
}

FleetPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  fleetPage: makeSelectFleetPage(),
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

const withReducer = injectReducer({ key: 'fleetPage', reducer });
const withSaga = injectSaga({ key: 'fleetPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(FleetPage);
