import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

import { changeValue} from './fieldAction'

const counter = props =>
    <div>
        <h1>{props.value}</h1>
        <input onChange={props.changeValue} value={props.value}/>
    </div>

const mapStateToProps = state => ({
  value : state.field.value
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeValue}, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(counter)