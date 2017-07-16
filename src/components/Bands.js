import React, { Component } from 'react';

class Bands extends Component {
  bandList = () => this.props.store.getState().bands.map((band, i) => <li key={i}>{band}</li>)
  render(){
    return (
      <div>
        <ul>
          {this.bandList()}
        </ul>
      </div>
    );
  }
};

export default Bands;
