import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { productOperations } from "../../state/ducks/product";
import { productShape } from "../propTypes";

// import ListRow from "./orderListRow";

const ListRow = styled.tr`
`;

class OrderList extends Component {
    componentDidMount( ) {
        if ( this.props.products.length === 0 ) {
            this.props.fetchList( );
        }
    }

    render( ) {
        const productList = this.props.products
            .map( p => <Link key={ p.id } to={ `/products/${ p.permalink }` }>{ p.name }</Link> );
        const orders = [
            {
                id: 1,
                project: "AAAAA",
                title: "Bananaを作る",
                status: "Receive",
                tat: 2.4,
                startDate: "2019/12/15 10:36",
            },
            {
                id: 2,
                project: "AAAAA",
                title: "Bananaを作る",
                status: "Receive",
                tat: 2.4,
                startDate: "2019/12/15 10:36",
            },
            {
                id: 3,
                project: "AAAAA",
                title: "Bananaを作る",
                status: "Receive",
                tat: 2.4,
                startDate: "2019/12/15 10:36",
            },
            {
                id: 4,
                project: "AAAAA",
                title: "Bananaを作る",
                status: "Receive",
                tat: 2.4,
                startDate: "2019/12/15 10:36",
            },
            {
                id: 5,
                project: "AAAAA",
                title: "Bananaを作る",
                status: "Receive",
                tat: 2.4,
                startDate: "2019/12/15 10:36",
            },
        ];
        const orderList = orders.map( order => (
            <ListRow key={ order.id }>
                <td>{order.id}</td>
                <td>{order.project}</td>
                <td>{order.title}</td>
                <td>{order.status}</td>
                <td>{order.tat}</td>
                <td>{order.startDate}</td>
            </ListRow> ) );
        return (
            <div>
                { productList }
                <div className="center">
                    <button className="button">New Order</button>
                </div>
                <div>
                    <div className="center">
                        <h1 className="title is-1">Orders</h1>
                    </div>
                    <div className="center">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th><abbr title="Order Id">id</abbr></th>
                                    <th><abbr title="Project">project</abbr></th>
                                    <th><abbr title="Title">title</abbr></th>
                                    <th><abbr title="Status">status</abbr></th>
                                    <th><abbr title="Turn Around Time">TAT</abbr></th>
                                    <th><abbr title="Start Date">Start Date</abbr></th>
                                </tr>
                            </thead>
                            <tbody>
                                { orderList }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

const { arrayOf, func } = PropTypes;

OrderList.propTypes = {
    products: arrayOf( productShape ),
    fetchList: func.isRequired,
};

OrderList.defaultProps = {
    products: [ ],
};

OrderList.prefetch = productOperations.fetchList;

const mapStateToProps = ( state ) => ( {
    products: state.product.list,
} );

const mapDispatchToProps = {
    fetchList: productOperations.fetchList,
};

export default connect( mapStateToProps, mapDispatchToProps )( OrderList );
