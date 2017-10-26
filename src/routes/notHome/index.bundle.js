import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './actions'

const mapStateToProps = (state) => ({ async: state.async })
const mapDispatchToProps = (dispatch) => bindActionCreators({...actions}, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
class NotHome extends React.Component {
  render() {
    const { incrementFib, decrementFib, async: { third } } = this.props
    return (
      <div>
        <h2>This implements Async Reducers!</h2>
        <h1>{ third }</h1>
        <button onClick={incrementFib}>
          Increase Fibonacci
        </button>
        <button onClick={decrementFib}>
          Decrease Fibonacci
        </button>
        <div style={{margin: '15px'}}>
          <a href='/'>
          See route w/o async reducers!
          </a>
        </div>
      </div>
    )
  }
}

export default NotHome