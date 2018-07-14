import React from 'react';

import './AllStuff.css';

class AllStuff extends React.Component {

  addClickEvent = () => {
    console.error('click event',this.props);
    // this.props.addToMyStuff(this.props.details);
  }

  render () {
    const { details } = this.props;
    const image = details.itemImage;

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
