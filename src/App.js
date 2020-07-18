import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing/index';
import CreateMeeting from './pages/CreateMeeting';
import Meeting from './pages/Meeting';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/perfectmeeting">
            <Landing />
          </Route>
          <Route exact path="/createmeeting">
            <CreateMeeting />
          </Route>
          <Route exact path="/meeting">
            <Meeting />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
