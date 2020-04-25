import { createStore,compose,applyMiddleware } from 'redux';
import rootReducer from './../reducers/index';
//tích hợp devtool
const composeEnhancers = process.env.NODE_ENV !== 'production' &&
typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    shouldHotReload: false
}) : compose;
//tích hợp devtool

//tích hợp middleware
const configureStore = () => {
    const middlewares = [];
    const enhancers = [
        applyMiddleware(...middlewares)
    ]
//tích hợp middleware
 
//create a sotre tích hợp devtool và middleware
    const store = createStore(rootReducer,composeEnhancers(...enhancers));
    return store;
};
export default configureStore;
