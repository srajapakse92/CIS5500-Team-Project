import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

// import pages';
import TopChannelsPage from './pages/TopChannelsPage';
import HomePage from './pages/HomePage';
import TrendingVideosPage from './pages/TrendingVideosPage';
import VideoPage from './pages/VideoPage';

import 'antd/dist/antd.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import Login from './pages/Login';


ReactDOM.render(
  <div>
    <Router>
      <Switch>
        <Route exact
							path="/homepage"
							render={() => (
								<HomePage />
							)}/>
		 <Route exact
							path=""
							render={() => (
								<Login />
							)}/>
		<Route exact
							path="/video"
							render={() => (
								<VideoPage />
							)}/>
        <Route exact
							path="/topchannels"
							render={() => (
								<TopChannelsPage />
							)}/>
        <Route exact
							path="/trendingvideos"
							render={() => (
								<TrendingVideosPage />
							)}/>
      </Switch>
    </Router>
  </div>,
  document.getElementById('root')
);