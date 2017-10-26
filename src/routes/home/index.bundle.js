import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './actions'

const mapStateToProps = (state) => ({ root: state.root })
const mapDispatchToProps = (dispatch) => bindActionCreators({...actions}, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
class Home extends React.Component {
  render() {
    const { incrementCounter, decrementCounter, root: { count } } = this.props
    return (
      <div>
        <h2>This has no Async Reducers!</h2>
        <h1>{ count }</h1>
        <button onClick={incrementCounter}>
          Increase Counter
        </button>
        <button onClick={decrementCounter}>
          Decrease Counter
        </button>
        <div>
          <a href='/notHome' style={{margin: '15px'}}>
            Not Home
          </a>
        </div>
      </div>
    )
  }
}

export default Home