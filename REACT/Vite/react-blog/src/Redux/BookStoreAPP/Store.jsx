/* eslint-disable no-unused-vars */
import {createStore} from 'redux'
import BookReducer from './BookReducer'

const store = createStore(BookReducer)

export default store;