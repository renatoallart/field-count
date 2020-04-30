import React from 'react'
import ReactDom from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'



import App from './main/app'
import Comb from './main/comb'

ReactDom.render( 
    
    <Provider store={createStore(Comb)}>
        <App/>
    </Provider>

, document.getElementById("app"))