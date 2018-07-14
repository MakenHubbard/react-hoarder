import React from 'react';

import AllStuffRequests from '../../firebaseRequests/allStuff';
import AllStuff from '../AllStuff/AllStuff';

import './Inventory.css';

class WhatStuff extends React.Component {
  state = {
    stuffs: [],
  }

  componentDidMount () {
    AllStuffRequests
      .getRequest()
      .then((stuffs) => {
        this.setState({stuffs: stuffs});
      })
      .catch((err) => {
        console.error('error with all stuff get request inside of what stuff', err);
      });
  }
  render () {
    const allStuffCompnonents = this.state.stuffs.map((stuff) => {
      return (
        <AllStuff
          key={stuff.id}
        />
      );
    });

    return (
      <div className="WhatStuff col-xs-12">
        <h1>WhatStuff</h1>
        <ul className="stuffs">
          {allStuffCompnonents}
        </ul>
      </div>
    );
  }
}

export default WhatStuff;
