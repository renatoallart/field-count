import React from 'react'
import {Route,Switch,Redirect } from 'react-router-dom'

import Field from '../pages/field/field'
import Count from '../pages/count/count'


export default props =>
    <Switch>
        <Route exact path="/" component={Field}/>
        <Route exact path="/count" component={Count}/>
        <Redirect from="/" to={Field}/>
    </Switch>