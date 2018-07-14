import React, { Component } from 'react';
// import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import firebase from 'firebase';

import './App.css';

// import Login from '../components/Login/Login';
// import Navbar from '../components/Navbar/Navbar';
// import AllStuff from '../components/AllStuff/AllStuff';
import MyStuff from '../components/MyStuff/MyStuff';
// import WhatStuff from '../components/WhatStuff/WhatStuff';
// import Register from '../components/Register/Register';

import fbConnection from '../firebaseRequests/connection';
fbConnection();

// const PrivateRoute = ({ component: Component, authed, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         authed === true ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{ pathname: '/allstuff', state: { from: props.location } }}
//           />
//         )
//       }
//     />
//   );
// };

// const PublicRoute = ({ component: Component, authed, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         authed === false ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{ pathname: '/login ', state: { from: props.location } }}
//           />
//         )
//       }
//     />
//   );
// };

class App extends Component {
  state = {
    authed: false,
  }

  componentDidMount () {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount () {
    this.removeListener();
  }

  runAway = () => {
    this.setState({authed: false});
  }
  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            {/* <Navbar
              authed={this.state.authed}
              runAway={this.runAway}
            /> */}
            <div className="container">
              <div className="row">
                <Switch>
                  <Route path="/" exact component={MyStuff} />
                  {/* <PrivateRoute
                    path="/whatstuff"
                    authed={this.state.authed}
                    component={WhatStuff}
                  />
                  <PrivateRoute
                    path="/mystuff"
                    authed={this.state.authed}
                    component={MyStuff}
                  />
                  <PublicRoute
                    path='/register'
                    authed={this.state.authed}
                    component={Register}
                  />
                  <PublicRoute
                    path='/login'
                    authed={this.state.authed}
                    component={Login}
                  />
                  <PrivateRoute
                    path="/allstuff"
                    authed={this.state.authed}
                    component={WhatStuff}
                  /> */}
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
