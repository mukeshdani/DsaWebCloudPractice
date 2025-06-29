import { Provider } from 'react-redux';
import store from './Store';

function AppStoreRedux() {
    return (
        <Provider store={store}>
            <div>
                <h4>Book Store Example</h4>
            </div>
        </Provider>
    );
}

export default AppStoreRedux;
