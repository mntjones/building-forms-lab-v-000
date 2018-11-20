// Add BandInput component
import React, { Component } from 'react'


class BandInput extends Component {
  
  state = {
    name: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  }
  
  
  render() {
    return(
      <div>
<<<<<<< HEAD
        <form onSubmit={this.handleSubmit}>
=======
        <form onSubmit={this.handleSubmit(e)}>
>>>>>>> 32ef10727b1e52af53ea44d7c985a5d493a40585
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.name}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default BandInput
