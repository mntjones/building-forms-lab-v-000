import React, { Component } from 'react';
import {connect} from 'react-redux';
import BandInput from '../components/BandInput';
<<<<<<< HEAD
import Band from '../components/Band';
=======
>>>>>>> 32ef10727b1e52af53ea44d7c985a5d493a40585

class BandsContainer extends Component {
  render() {
    
    const listBands = () => 
        this.props.bands.map((band,id) => <Band key={id} name={band.name} />)
        
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
<<<<<<< HEAD
        {listBands()}
=======
>>>>>>> 32ef10727b1e52af53ea44d7c985a5d493a40585
      </div>
    )
  }
}

<<<<<<< HEAD

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => {
  return {
    addBand: band => dispatch({type: "ADD_BAND", band})
  }
}

=======
const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

const mapStateToProps = ({ bands }) => ({ bands })

>>>>>>> 32ef10727b1e52af53ea44d7c985a5d493a40585
export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)