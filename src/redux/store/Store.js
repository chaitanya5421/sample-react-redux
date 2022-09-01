import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import { reducer } from '../product-reducer/reducer';

export const store = createStore(reducer,applyMiddleware(thunk))