/* eslint-disable no-unused-vars */
import {buyBook} from './BookTypes'

const initialState ={
    NumberOfBooks : 20
}

const BookReducer = (state = initialState, action)=>{
    console.log(state)
    switch(action.type){
        case buyBook: return {
        ...state, NumberOfBooks: state.NumberOfBooks - 1
        }
        default : return state
    }
}

export default BookReducer;