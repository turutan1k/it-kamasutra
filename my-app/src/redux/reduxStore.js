import { combineReducers, legacy_createStore as createStore } from 'redux';

import profilePageReducer from './reducers/profilePageReducer';
import dialogsPageReducer from './reducers/dialogsPageReducer';
import sideBarReducer from './reducers/sideBarReducer';

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sideBar: sideBarReducer,
});

let store = createStore(reducers);

export default store;
