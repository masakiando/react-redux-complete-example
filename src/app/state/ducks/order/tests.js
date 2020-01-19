import expect from "expect.js";
import reducer from "./reducers";
import * as types from "./types";

/* eslint-disable func-names */
describe( "order reducer", function( ) {
    describe( "save order", function( ) {
        const action = {
            type: types.SAVE_COMPLETED,
            payload: {
                order: {
                    project_id: 1,
                    title: "TEST",
                    discrption: "TEST",
                    status: "Receive",
                    timestamps: "2020-01-12T02:30:35.105Z",
                    id: 1,
                },
            },
        };
        context( "empty orders", function( ) {
            const initialState = {
                list: [ ],
            };

            const result = reducer( initialState, action );
            it( "should save the order in the orders", function( ) {
                expect( result.list.length ).to.be( 1 );
                expect( result.list[ 0 ].project_id ).to.be( 1 );
                expect( result.list[ 0 ].title ).to.be( "TEST" );
                expect( result.list[ 0 ].discrption ).to.be( "TEST" );
                expect( result.list[ 0 ].status ).to.be( "Receive" );
                expect( result.list[ 0 ].timestamps ).to.be( "2020-01-12T02:30:35.105Z" );
                expect( result.list[ 0 ].id ).to.be( 1 );
            } );
        } );
    } );
} );
