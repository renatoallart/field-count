import React from 'react'
import {connect } from 'react-redux'
import { bindActionCreators} from 'redux'

import { inc,dec} from './countAction'

const Count = props =>
    <div>
        <h1>{props.value.number}</h1>
        <button onClick={props.inc}>Inc</button>
        <button onClick={props.dec}>Dec</button>

    </div>

const mapStateToProps = state => ({
  value : state.count
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ inc,dec}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Count)