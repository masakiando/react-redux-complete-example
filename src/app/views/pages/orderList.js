import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { orderOperations } from "../../state/ducks/order";
import { orderShape } from "../propTypes";

class OrderList extends Component {
    componentDidMount( ) {
        if ( this.props.orders.length === 0 ) {
            this.props.fetchList( );
        }
    }

    render( ) {
        if ( this.props.orders.length === 0 ) {
            return ( <div>Your have no order in the orders </div> );
        }
        const orderList = this.props.orders.map( order => (
            <tr key={ order.id }>
                <td>{order.id}</td>
                <td>{order.project_name}</td>
                <td>{order.title}</td>
                <td>{order.status}</td>
                <td>{order.tat}</td>
            </tr> ) );

        return (
            <div>
                <div className="center">
                    <Link to="/orders/new" className="button">New Order</Link>
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
                                    <th><abbr title="project_name">project_name</abbr></th>
                                    <th><abbr title="Title">title</abbr></th>
                                    <th><abbr title="Status">status</abbr></th>
                                    <th><abbr title="Turn Around Time">TAT</abbr></th>
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
    orders: arrayOf( orderShape ),
    fetchList: func.isRequired,
};

OrderList.defaultProps = {
    orders: [ ],
};

// OrderList.prefetch = productOperations.fetchList;
OrderList.prefetch = orderOperations.fetchList;

const mapStateToProps = ( state ) => ( {
    products: state.product.list,
    orders: state.order.list,
} );

const mapDispatchToProps = {
    fetchList: orderOperations.fetchList,
};

export default connect( mapStateToProps, mapDispatchToProps )( OrderList );
