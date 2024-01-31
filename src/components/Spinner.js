import React, { Component } from 'react'
import load from './load.gif'

export class Spinner extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className='text-center'>
        <img src={load} alt="loading"/>
      </div>
    )
  }
}

export default Spinner
