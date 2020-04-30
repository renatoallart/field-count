import { combineReducers } from 'redux';
import fieldReducers from '../pages/field/fieldReducers'
import countReducers from '../pages/count/countReducer'
const rootReducer = combineReducers({
  
  field: fieldReducers,
  count : countReducers,
});

export default rootReducer;
