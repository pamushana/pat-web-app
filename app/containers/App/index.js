/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import HirePage from 'containers/HirePage/Loadable';
import TourPage from 'containers/TourPage/Loadable';
import CommuteRoutesPage from 'containers/CommuteRoutesPage/Loadable';
import PrePaidAccountPage from 'containers/PrePaidAccountPage/Loadable';

import TeamPage from 'containers/TeamPage/Loadable';
import FleetPage from 'containers/FleetPage/Loadable';
import ValuesPage from 'containers/ValuesPage/Loadable';
import GalleryPage from 'containers/GalleryPage/Loadable';
import DivisionsPage from 'containers/DivisionsPage/Loadable';
import BlogPage from 'containers/BlogPage/Loadable';

import ContactPage from 'containers/ContactPage/Loadable';
import FeedbackPage from 'containers/FeedbackPage/Loadable';

import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Header from 'components/Header';
import Footer from 'components/Footer';
import 'semantic-ui-css/semantic.min.css';
import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  margin: 0 auto;
  min-height: 100%;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - PamAfriGroup" defaultTitle="PamAfriGroup">
        <meta
          name="description"
          content="Pamushana Africa Group Official Website"
        />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hire" component={HirePage} />
        <Route path="/routes" component={CommuteRoutesPage} />
        <Route path="/tour" component={TourPage} />
        <Route path="/prepaid" component={PrePaidAccountPage} />

        <Route path="/team" component={TeamPage} />
        <Route path="/fleet" component={FleetPage} />
        <Route path="/values" component={ValuesPage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/divisions" component={DivisionsPage} />
        <Route path="/blog" component={BlogPage} />

        <Route path="/feedback" component={FeedbackPage} />
        <Route path="/contact" component={ContactPage} />

        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
