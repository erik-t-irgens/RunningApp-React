import React, { useState } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import Register from './Register';
import Login from './Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserSettings from './User/Settings';
import UserDetails from './User/Details';
import TrackDetails from './Track/Details';
import EventDetails from './Event/Details';
import TrackCreate from './Track/Create';
import EventCreate from './Event/Create';
import Gallery from './Gallery'
import Home from './Home';


function App() {

  // var tracks = [1, 2, 3, 4];
  //Calling useState returns two things :1) the current value of that state 2) a function you can call to then set that state.

  const [tracks, setTracks] = useState([
    "track1", "track2"
  ]

  );

  const [events, setEvents] = useState([
    "event1", "event2"
  ]
  );

  const [users, setUsers] = useState([
    "user1",
    "user2"
  ]
  );

  const [selectedTrackId, setSelectedTrackId] = useState(0);


  return (
    <div className="App">

      <Router>
        <Route exact path="/" ></Route>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/app" ></Route>
        <Route exact path="/app/home" component={Home} />

        <Route exact path="/app/user" render={() => <Gallery items={users} />} />
        <Route exact path="/app/user/:id" component={UserDetails} />
        <Route exact path="/app/user/settings" component={UserSettings} />

        <Route exact path="/app/track" render={() => <Gallery items={tracks} />} />
        <Route exact path="/app/track/:id" component={TrackDetails} />
        <Route exact path="/app/track/create" component={TrackCreate} />

        <Route exact path="/app/event" render={() => <Gallery items={events} />} />
        <Route exact path="/app/event/:id" component={EventDetails} />
        <Route exact path="/app/event/create" component={EventCreate} />
      </Router>
    </div>
  );
}

export default App;
