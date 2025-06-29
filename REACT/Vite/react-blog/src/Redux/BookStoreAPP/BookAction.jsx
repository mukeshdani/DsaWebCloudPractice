/* eslint-disable no-unused-vars */
// Action Creator 
// which is a function return an object 

import { buyBook } from "./BookTypes"

const purchase_book = ()=>{
    return {
        type: buyBook
    }
}