// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!
import {campusReducer} from './campusReducer'
import {studentReducer} from './studentReducer'
import {combineReducers} from 'redux'

// const initialState = {
//   campuses:[],
//   students:[]
// }

const rootReducer = combineReducers({
  students:studentReducer,
  campuses:campusReducer
})

export default rootReducer
