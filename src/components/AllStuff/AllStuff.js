import React from 'react';

import './AllStuff.css';

class AllStuff extends React.Component {
  render () {
    const { details } = this.props;
    const image = require(`${details.itemImage}`);
    return (
      <li className="AllStuff">
        <img src={image} alt={details.itemName} />
        <h3 className="itemName">
          {details.itemName}
        </h3>
        <p>{details.itemDescription}</p>
        <button
          onClick={this.addClickEvent}
        >Add to My Stuff
        </button>
      </li>
    );
  }
}

export default AllStuff;
