import { combineReducers } from "redux";
import * as types from "./types";
// import * as utils from "./utils";
import { createReducer } from "../../utils";

/* State shape
[
    {
        order,
    }
]
*/

const listReducer = createReducer( [ ] )( {
    [ types.FETCH_LIST_COMPLETED ]: ( state, action ) => action.payload.orders,
    [ types.SAVE_COMPLETED ]: ( state, action ) => [ ...state, action.payload.order ],
} );

export default combineReducers( {
    // details: detailsReducer,
    list: listReducer,
} );
