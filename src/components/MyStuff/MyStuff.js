import React from 'react';
// import authRequest from '../../firebaseRequests/auth';
import newStuffRequest from '../../firebaseRequests/newStuff';
// import allStuffRequest from '../../firebaseRequests/allStuff';
import AllStuff from '../AllStuff/AllStuff';

import './MyStuff.css';

class MyStuff extends React.Component {
  state = {
    myStuff: [],
  };

  // addToMyStuff = () => {
  //   const newMyStuff = { myStuff: { ...this.state.order } };
  //   newMyStuff.uid = authRequest.getUid();
  //   newStuffRequest
  //     .postRequest(newMyStuff)
  //     .then(() => {
  //       this.props.history.push('/mystuff');
  //     })
  //     .catch((err) => {
  //       console.error('error in order post', err);
  //     });
  // };

  componentDidMount () {
    console.error('hit this');
    newStuffRequest
      .getRequest()
      .then((stuffs) => {
        this.setState({ myStuff: stuffs });
      })
      .catch((err) => {
        console.error('something went wrong with get request in myStuff', err);
      });
  };

  render () {
    const myStuffComponents = this.state.myStuff.map((stuff) => {
      return (
        <AllStuff
          key={stuff.id}
          details={stuff}
          addToMyStuff={this.addToMyStuff}
        />
      );
    });
    return (
      <div className="myStuff">
        <div className="col-xs-8 inventory-container">
          <h2>My Stuff</h2>
          <ul className="stuffs">
            {myStuffComponents}
          </ul>
        </div>
        <MyStuff
          stuffs={this.state.stuffs}
          addToMyStuff={this.addToMyStuff}
        />
      </div>
    );
  }
}

export default MyStuff;
