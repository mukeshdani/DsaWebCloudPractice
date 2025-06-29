import { useDispatch, useSelector } from "react-redux";
import purchase_book from './BookAction';

function BookContainer() {
    const noOfBook = useSelector(state => state.NumberOfBooks);
    const dispatch = useDispatch();

    return (
        <div>
            <h4>Book Container</h4>
            <h5>No. of Books - {noOfBook}</h5>
            <button onClick={() => dispatch(purchase_book())}>
                Buy Book
            </button>
        </div>
    );
}

export default BookContainer;
