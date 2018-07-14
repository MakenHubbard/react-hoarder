import React from 'react';

import AllStuffRequests from '../../firebaseRequests/allStuff';
import AllStuff from '../AllStuff/AllStuff';
import authRequest from '../../firebaseRequests/auth';
import newStuffRequest from '../../firebaseRequests/newStuff';

import './WhatStuff.css';

class WhatStuff extends React.Component {
  state = {
    stuffs: [],
  }

  addToMyStuff = (details) => {
    details.uid = authRequest.getUid();
    newStuffRequest
      .postRequest(details)
      .then(() => {
        this.props.history.push('/mystuff');
      })
      .catch((err) => {
        console.error('error in order post', err);
      });
  };

  componentDidMount () {
    AllStuffRequests
      .getRequest()
      .then((stuffs) => {
        this.setState({ stuffs });
      })
      .catch((err) => {
        console.error('error with all stuff get request inside of what stuff', err);
      });
  }
  render () {
    const allStuffComponents = this.state.stuffs.map((stuff) => {
      return (
        <AllStuff
          key={stuff.id}
          details={stuff}
          addToMyStuff = {this.addToMyStuff}
        />
      );
    });

    return (
      <div className="WhatStuff col-xs-12">
        <h1>WhatStuff</h1>
        <ul className="stuffs">
          {allStuffComponents}
        </ul>
      </div>
    );
  }
}

export default WhatStuff;
