import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = { selectedColor: '#FFF'}
  }

  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor
    })
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  thing() {
    return ["hello", "goodbye"].map(item => <div>{item}</div>)
  }

  render() {
    return (
      <div>
        {this.thing()}
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  values: learnSymbol
}