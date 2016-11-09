import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import About from './components/About';
import Repos from './components/Repos';
import Repo from './components/Repo';
import Home from './components/Home';

import { Router, Route, /*browserHistory*/hashHistory, IndexRoute} from 'react-router';

ReactDOM.render(
    <Router history={/*browserHistory*/hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/repos" component={Repos}>
                <Route path="/repos/:userName/:repoName" component={Repo} />
            </Route>
            <Route path="/about" component={About} />
        </Route>
   </Router>,
  document.getElementById('root')
);
