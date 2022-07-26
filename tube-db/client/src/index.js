import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

// import home page ;
import HomePage from './pages/HomePage';

// import top channels ;
import TopChannelsPage from './pages/TopChannelsPage';

// import trending videos ;
import TrendingVideosPage from './pages/TrendingVideosPage';

import 'antd/dist/antd.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"


ReactDOM.render(
  <div>
    <Router>
      <Switch>
        <Route exact
							path="/"
							render={() => (
								<HomePage />
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