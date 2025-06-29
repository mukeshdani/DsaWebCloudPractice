import { useSelector } from "react-redux"

function BookConatiner(){
    const noOfBook = useSelector(state => state.NumberOfBooks)
    return <div>
        <h4>Book Container</h4>
        <h5>No. of Books - {noOfBook}</h5>
    </div>
}

export default BookConatiner