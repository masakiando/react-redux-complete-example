import * as types from "./types";

export const saveToOrders = ( order ) => ( {
    type: types.SAVE,
    meta: {
        async: true,
        blocking: true,
        path: "/orders",
        method: "POST",
        body: order,
    },
} );

export const fetchList = ( ) => ( {
    type: types.FETCH_LIST,
    meta: {
        async: true,
        blocking: true,
        path: "/orders",
        method: "GET",
    },
} );
