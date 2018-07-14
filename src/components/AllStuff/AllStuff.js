import React from 'react';

import './AllStuff.css';

class AllStuff extends React.Component {

  addClickEvent = () => {
    this.props.addToMyStuff(this.props.details.id);
  }

  render () {
    const { stuff } = this.props;
    const image = require(`${stuff.itemImage}`);
    return (
      <li className="AllStuff">
        <img src={image} alt={stuff.itemName} />
        <h3 className="itemName">
          {stuff.itemName}
        </h3>
        <p>{stuff.itemDescription}</p>
        <button
          onClick={this.addClickEvent}
        >Add to My Stuff
        </button>
      </li>
    );
  }
}

export default AllStuff;
