// import { createStore } from 'redux';
// import rootReducer from './reducers/rootReducer';

// const store = createStore(rootReducer);

// export default store;



import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
const store = (initialState = {}) => {
    return createStore(rootReducer, initialState, applyMiddleware(thunk));
};

export default store;



// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from './reducers/rootReducer';
// import thunk from "redux-thunk";
// /**
//  * Prepare the Redux Store
//  */
// const composedMiddlewares = applyMiddleware(thunk);

// const storeEnhancers = composeWithDevTools({
//     name: "React-node-test"
// })(composedMiddlewares);

// const makeStore = () => {
//     createStore(rootReducer, storeEnhancers);
// };

// export default makeStore;

