/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  Container,
  Image,
  Input,
  Grid,
  Segment,
  Feed,
  Card,
  Menu,
  Icon,
  Header,
  Form,
  TextArea,
  Button,
  Select,
} from 'semantic-ui-react';
import { FacebookProvider, Page } from 'react-facebook';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from 'react-twitter-embed';
import Slide1 from 'images/bus.png';
import Slide2 from 'images/truck.png';
import TourCover from 'images/tourCover.jpg';
import CommunityCover from 'images/community.jpg';
import FleetCover from 'images/fleet.jpg';
import CharityCover from 'images/charity.jpg';
import messages from './messages';
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
const items = [
  {
    header: 'Service Disruption',
    description:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: '19 January 2019',
    color: 'red',
  },
  {
    header: 'Promotions',
    description:
      'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: '02 February 2019',
    color: 'red',
  },
  {
    header: 'Notice',
    description:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: '19 January 2019',
    color: 'red',
  },
  {
    header: 'Promotions',
    description:
      'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: '02 February 2019',
    color: 'red',
  },
];
/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <Container style={{ padding: '2em' }}>
        <Grid columns="equal">
          <Grid.Column>
            <Segment style={{ height: '400px' }} raised>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="pamafrigroup"
                options={{ height: 380 }}
              />
            </Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment style={{ height: '400px' }} raised>
              <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={65}
                totalSlides={2}
                interval={5000}
                isPlaying
              >
                <Slider>
                  <Slide index={0}>
                    <Image src={Slide1} />
                  </Slide>
                  <Slide index={1}>
                    <Image src={Slide2} />
                  </Slide>
                </Slider>
                <Menu text>
                  <Menu.Menu>
                    <ButtonBack>
                      <Icon name="chevron circle left" size="large" />
                    </ButtonBack>
                  </Menu.Menu>
                  <Menu.Menu position="right">
                    <ButtonNext>
                      <Icon name="chevron circle right" size="large" />
                    </ButtonNext>
                  </Menu.Menu>
                </Menu>
              </CarouselProvider>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment style={{ height: '400px', overflowX: 'hidden' }} raised>
              <FacebookProvider appId="240529023520864">
                <Page
                  href="https://www.facebook.com/PamAfriGroup/"
                  tabs="timeline,messages,events"
                  adaptContainerWidth
                  smallHeader
                  height={370}
                />
              </FacebookProvider>
            </Segment>
          </Grid.Column>
        </Grid>
        <Container style={{ paddingTop: '4em' }}>
          <Header as="h2">
            <Icon name="bullhorn" color="red" />
            <Header.Content>
              Bulletin
              <Header.Subheader>
                Get all latest news from management
              </Header.Subheader>
            </Header.Content>
          </Header>
          <Card.Group stackable centered items={items} itemsPerRow={4} />
        </Container>
        <Container style={{ paddingTop: '4em' }}>
          <Header as="h2">
            <Icon name="newspaper" color="green" />
            <Header.Content>
              Press Release
              <Header.Subheader>
                Pamushana Africa in newspapers
              </Header.Subheader>
            </Header.Content>
          </Header>
          <Card fluid raised>
            <Card.Content>
              <Feed size="large">
                <Feed.Event>
                  <Feed.Label image="https://t792ae.c2.acecdn.net/wp-content/uploads/2018/07/pindula-news-logo.png" />
                  <Feed.Content>
                    <Feed.Summary>
                      <a
                        href="https://news.pindula.co.zw/2019/01/14/warren-park-kombis-increase-transport-fare/"
                        target="_blank"
                      >
                        Warren Park Kombis Increase Transport Fare
                      </a>
                      <Feed.Date content="28 day ago" />
                    </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Label image="https://t3n9sm.c2.acecdn.net/wp-content/uploads/2014/06/cropped-tz-logo-150x37.png" />
                  <Feed.Content>
                    <Feed.Summary>
                      <a
                        href="https://www.techzim.co.zw/2018/01/makombi-introduce-swipe/"
                        target="_blank"
                      >
                        Makombi Introduce Swipe.Are You Ready To Swipe Into
                        Hwindi’ s Pocket ?
                      </a>
                      <Feed.Date content="398 days ago" />
                    </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Label image="https://www.herald.co.zw/wp-content/uploads/sites/2/2017/11/herald_logo.jpg" />
                  <Feed.Content>
                    <Feed.Summary>
                      <a
                        href="https://www.herald.co.zw/transforming-public-transport-system-a-kombi-company-with-a-difference/"
                        target="_blank"
                      >
                        Transforming public transport system...A kombi company
                        with a difference
                      </a>
                      <Feed.Date content="423 days days ago" />
                    </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Card.Content>
          </Card>
          <Container style={{ paddingTop: '4em' }}>
            <Header as="h2">
              <Icon name="images" color="blue" />
              <Header.Content>
                Pamushana Highlights
                <Header.Subheader>Share our high moments</Header.Subheader>
              </Header.Content>
            </Header>
            <Grid columns={2}>
              <Grid.Column>
                <Segment raised>
                  <Image
                    fluid
                    label={{ as: 'a', color: 'red', content: 'Tours', ribbon: 'left' }}
                    src={TourCover}
                  />
                </Segment>
                <Segment raised>
                  <Image
                    fluid
                    label={{ as: 'a', color: 'orange', content: 'Community', ribbon: 'left' }}
                    src={CommunityCover}
                  />
                </Segment>
              </Grid.Column>

              <Grid.Column>
                <Segment raised>
                  <Image
                    fluid
                    label={{ as: 'a', color: 'orange', content: 'Fleet', ribbon: 'right' }}
                    src={FleetCover}
                  />
                </Segment>
                <Segment raised>
                  <Image
                    fluid
                    label={{ as: 'a', color: 'red', content: 'Charity', ribbon: 'right' }}
                    src={CharityCover}
                  />
                </Segment>
              </Grid.Column>
            </Grid>
          </Container>
          <Container
            style={{
              marginTop: '4em',
              backgroundColor: 'olive',
              padding: '2em',
              borderRadius: '5px',
              boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Header as="h2" style={{ color: '#FFF' }}>
              <Icon name="comments" color="orange" />
              <Header.Content>
                Help us improve
                <Header.Subheader style={{ color: '#FFF' }}>
                  Share your feedback, enquires and complaints with us. We care!
                </Header.Subheader>
              </Header.Content>
            </Header>
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
                content="Send Feedback"
              />
            </Form>
          </Container>
        </Container>
      </Container>
    );
  }
}
