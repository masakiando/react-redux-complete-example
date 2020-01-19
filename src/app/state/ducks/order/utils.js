export function orderPositonInOrders( orders, order ) {
    return orders.map( item => item.order.id ).indexOf( order.id );
}

export function newOrdersItem( order ) {
    return {
        order,
    };
}
