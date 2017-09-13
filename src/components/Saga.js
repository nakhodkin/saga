import React, { Component } from 'react';
import { connect } from 'react-redux';

class Saga extends Component {
  constructor(props, contenxt) {
    super(props, contenxt);
    this.getPlanets = this.getPlanets.bind(this);
  }

  getPlanets() {
    this.props.dispatch({
      type: 'GET_PLANET_REQUESTED',
      planetId: this.planetId.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Get planet</h1>
        <input type="text" ref={node => { this.planetId = node; } }/>
        <button type="button" onClick={this.getPlanets}>Get planets</button>
        <h3>Planet: {this.props.planet.name}</h3>
      </div>
    );
  }
}

export default connect(state => ({ planet: state.planet }))(Saga);
