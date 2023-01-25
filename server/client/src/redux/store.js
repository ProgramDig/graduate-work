import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";

export default configureStore({reducer: rootReducer, middleware: [composeWithDevTools]})