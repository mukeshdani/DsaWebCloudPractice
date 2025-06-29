import { Provider } from 'react-redux';
import store from './Store';
import BookConatiner from './BookContainer';

function AppStoreRedux() {
    return (
        <Provider store={store}>
            <div>
                <h4>Book Store Example</h4>
                <BookConatiner/>
            </div>
        </Provider>
    );
}

export default AppStoreRedux;
