/**
 *
 * Header
 *
 */
import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  Container,
  Dropdown,
  Grid,
  Input,
  Image,
  Menu,
  Visibility,
  Segment,
  Label,
} from 'semantic-ui-react';
import HireCalculator from 'components/HireCalculator/Widget';
import Logo from 'images/logo.png';
import LogoPlain from 'images/bus.png';
import HeaderLink from './HeaderLink';

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  marginTop: '2em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
  backgroundColor: '#FFFFFF',
  marginLeft: 0,
  marginRight: 0,
};

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
};

const overlayStyle = {
  float: 'left',
  margin: '0em 3em 1em 0em',
};

const fixedOverlayStyle = {
  ...overlayStyle,
  position: 'fixed',
  top: '80px',
  zIndex: 10,
};

const overlayMenuStyle = {
  position: 'relative',
  left: 0,
  transition: 'left 0.5s ease',
};

const fixedOverlayMenuStyle = {
  ...overlayMenuStyle,
  left: '800px',
};

/* eslint-disable react/prefer-stateless-function */
class Header extends React.PureComponent {
  state = {
    menuFixed: false,
    overlayFixed: false,
    activeItem: 'Book A Trip',
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleOverlayRef = c => {
    const { overlayRect } = this.state;

    if (!overlayRect) {
      this.setState({
        overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width'),
      });
    }
  };

  stickOverlay = () =>
    this.setState({
      overlayFixed: true,
    });

  stickTopMenu = () =>
    this.setState({
      menuFixed: true,
    });

  unStickOverlay = () =>
    this.setState({
      overlayFixed: false,
    });

  unStickTopMenu = () =>
    this.setState({
      menuFixed: false,
    });

  render() {
    const { menuFixed, overlayFixed, overlayRect, activeItem } = this.state;
    return (
      <div style={{ backgroundColor: '#F47F31' }}>
        <Container style={{ marginTop: '0em' }}>
          <HireCalculator />
        </Container>

        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            secondary
            stackable
            pointing={!menuFixed}
            fluid
            fixed={menuFixed ? 'top' : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container>
              <Menu.Menu position="left">
                <Menu.Item>
                  <Link to="/">
                    <Image size="small" src={Logo} />
                  </Link>
                </Menu.Item>
              </Menu.Menu>

              <Dropdown
                text="Traveller"
                active={activeItem === 'Traveller'}
                onClick={this.handleItemClick}
                item
                floating
              >
                <Dropdown.Menu>
                  <Container style={{ padding: '1em', width: '30em' }}>
                    <Grid columns={3}>
                      <Grid.Row stretched>
                        <Grid.Column>
                          <Image src="http://pamushanaafrica.com.s3-website.us-east-2.amazonaws.com/static/img/banner.160b824.png" />
                        </Grid.Column>
                        <Grid.Column>
                          <HeaderLink to="/routes" traveller>
                            Commute Routes
                          </HeaderLink>
                          <HeaderLink to="/tour" traveller>
                            Tours
                          </HeaderLink>
                        </Grid.Column>
                        <Grid.Column>
                          <HeaderLink to="/hire" traveller>
                            eHire
                          </HeaderLink>
                          <HeaderLink to="/prepaid" traveller>
                            Pre-Paid Account
                          </HeaderLink>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Container>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown
                text="Explorer"
                active={activeItem === 'Explorer'}
                onClick={this.handleItemClick}
                item
                floating
              >
                <Dropdown.Menu>
                  <Container style={{ padding: '1em', width: '30em' }}>
                    <Grid columns={3}>
                      <Grid.Row stretched>
                        <Grid.Column>
                          <Image
                            style={{
                              marginTop: '0.5em',
                              marginBottom: '0.5em',
                            }}
                            src="https://albatros-africa.com/wp-content/uploads/2017/04/Zimbabwe_VictoriaFalls_Waterfall_Aerial_031-600x600.jpg"
                          />
                        </Grid.Column>
                        <Grid.Column>
                          <Label
                            as="a"
                            color="green"
                            size="large"
                            circular
                            style={{ marginTop: '10px', marginBottom: '10px' }}
                          >
                            Great Zimbabwe
                          </Label>
                          <Label
                            as="a"
                            color="green"
                            size="large"
                            circular
                            style={{ marginTop: '10px', marginBottom: '10px' }}
                          >
                            Kariba
                          </Label>
                          <Label
                            as="a"
                            color="green"
                            size="large"
                            circular
                            style={{ marginTop: '10px', marginBottom: '10px' }}
                          >
                            Victoria Falls
                          </Label>
                        </Grid.Column>
                        <Grid.Column>
                          <Label
                            as="a"
                            color="green"
                            size="large"
                            circular
                            style={{ marginTop: '10px', marginBottom: '10px' }}
                          >
                            Chinhoyi Caves
                          </Label>
                          <Label
                            as="a"
                            color="green"
                            size="large"
                            circular
                            style={{ marginTop: '10px', marginBottom: '10px' }}
                          >
                            Vumba Mountains
                          </Label>
                          <Label
                            as="a"
                            color="green"
                            size="large"
                            circular
                            style={{ marginTop: '10px', marginBottom: '10px' }}
                          >
                            Nyanga
                          </Label>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Container>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown
                text="Discover Pamushana Africa"
                active={activeItem === 'Discover Pamushana Africa'}
                onClick={this.handleItemClick}
                item
                floating
              >
                <Dropdown.Menu>
                  <Container style={{ padding: '1em', width: '30em' }}>
                    <Grid columns={3}>
                      <Grid.Row stretched>
                        <Grid.Column>
                          <Image
                            src={LogoPlain}
                            style={{
                              marginTop: '1.5em',
                              marginBottom: '1.5em',
                            }}
                          />
                        </Grid.Column>
                        <Grid.Column>
                          <HeaderLink to="/team" discover>
                            Team
                          </HeaderLink>
                          <HeaderLink to="/values" discover>
                            Values
                          </HeaderLink>
                          <HeaderLink to="/divisions" discover>
                            Divisions
                          </HeaderLink>
                        </Grid.Column>
                        <Grid.Column>
                          <HeaderLink to="/fleet" discover>
                            Fleet
                          </HeaderLink>
                          <HeaderLink to="/gallery" discover>
                            Gallery
                          </HeaderLink>
                          <HeaderLink to="/careers" discover>
                            Careers
                          </HeaderLink>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Container>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown
                text="Support"
                active={activeItem === 'Support'}
                onClick={this.handleItemClick}
                item
                floating
              >
                <Dropdown.Menu>
                  <Container style={{ padding: '1em', width: '15em' }}>
                    <Grid columns={2}>
                      <Grid.Row stretched>
                        <Grid.Column>
                          <Image src="https://pndblog.typepad.com/.a/6a00e0099631d0883301b8d2e30751970c-800wi" />
                        </Grid.Column>
                        <Grid.Column>
                          <HeaderLink to="/contact" support>
                            Contact Us
                          </HeaderLink>
                          <HeaderLink to="/feedback" support>
                            Feedback
                          </HeaderLink>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Container>
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Menu position="right">
                <Menu.Item>
                  <Input icon="search" placeholder="Search..." />
                </Menu.Item>
              </Menu.Menu>
            </Container>
          </Menu>
        </Visibility>
      </div>
    );
  }
}

Header.propTypes = {};

export default Header;
