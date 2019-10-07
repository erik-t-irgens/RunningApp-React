import React, { useState } from 'react';
import logo from '../logo.svg';
import '../styles/Styles.css';
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
import Header from "./Header.js"



function App() {

  // var tracks = [1, 2, 3, 4];
  //Calling useState returns two things :1) the current value of that state 2) a function you can call to then set that state.

  const [tracks, setTracks] = useState([
    { Title: "track1", Description: "Description lore ipsum", Waypoints: "192301972301273908172398172308123", Location: "120937109283", imagedisplay: "https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/01/04143600/Access-Map-screenshot1.jpg" }, { Title: "track2", Description: "Description 123123ALKJDhkJSAEBDFklhjSBlkjhbSLKg", Waypoints: "19dfsdfsdfsdfsdf", Location: "213123123123123123123", imagedisplay: "https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/01/04143600/Access-Map-screenshot1.jpg" }, { Title: "track1", Description: "Description lore ipsum", Waypoints: "192301972301273908172398172308123", Location: "120937109283", imagedisplay: "https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/01/04143600/Access-Map-screenshot1.jpg" }, { Title: "track2", Description: "Description 123123ALKJDhkJSAEBDFklhjSBlkjhbSLKg", Waypoints: "19dfsdfsdfsdfsdf", Location: "213123123123123123123", imagedisplay: "https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/01/04143600/Access-Map-screenshot1.jpg" }, { Title: "track1", Description: "Description lore ipsum", Waypoints: "192301972301273908172398172308123", Location: "120937109283", imagedisplay: "https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/01/04143600/Access-Map-screenshot1.jpg" }, { Title: "track2", Description: "Description 123123ALKJDhkJSAEBDFklhjSBlkjhbSLKg", Waypoints: "19dfsdfsdfsdfsdf", Location: "213123123123123123123", imagedisplay: "https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/01/04143600/Access-Map-screenshot1.jpg" }
  ]

  );

  const [events, setEvents] = useState([
    { Title: "event1" }, { Title: "event2" }
  ]
  );

  const [users, setUsers] = useState([
    { Title: "user1" }, { Title: "user2" }
  ]
  );

  const [selectedTrackId, setSelectedTrackId] = useState(0);


  return (
    <div className="App">

      <Router>
        <Header>E</Header>
        <Route exact path="/" ></Route>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/app" ></Route>


        {/* <Route exact path="/app/user" render={() => <Gallery items={users} />} /> */}
        <Route exact path="/app/user" render={() => <Gallery items={users}>PEOPLE</Gallery>
        }>
        </Route>
        <Route exact path="/app/user/settings" render={() => <UserSettings />} />
        <Route exact path="/app/user/:id" render={() => <UserDetails></UserDetails>} />
        <Route exact path="/app/track" render={() => <Gallery items={tracks}>TRACKS</Gallery>} />
        <Route exact path="/app/track/:id" render={() => <TrackDetails />} />
        <Route exact path="/app/track/create" component={TrackCreate} />

        <Route exact path="/app/event" render={() => <Gallery items={events}>EVENTS</Gallery>} />
        <Route exact path="/app/event/:id" component={EventDetails} />
        <Route exact path="/app/event/create" component={EventCreate} />
        <Route exact path="/app/home" render={() => <Home tracks={tracks} users={users} events={events} />}>
        </Route>
      </Router>
    </div>
  );
}

export default App;
