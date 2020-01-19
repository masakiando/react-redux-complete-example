import {
    Home,
    Bulma,
    Login,
    ProductDetails,
    ProductList,
    OrderList,
    orderForm,
} from "../views/pages";
import { withAuthentication, lazyLoad } from "../views/enhancers";

const routes = [
    {
        path: "/",
        component: Home,
        exact: true,
    },
    {
        path: "/bulma",
        component: Bulma,
        exact: true,
    },
    {
        path: "/orders",
        component: OrderList,
        exact: true,
    },
    {
        path: "/orders/new",
        component: orderForm,
        exact: true,
    },
    {
        path: "/products",
        component: ProductList,
        exact: true,
    },
    {
        path: "/products/:permalink",
        example: "/products/apple",
        component: ProductDetails,
        exact: true,
    },
    {
        path: "/cart",
        component: lazyLoad( ( ) => import( "../views/pages/cart" ) ),
        exact: true,
    },
    {
        path: "/myaccount",
        component: withAuthentication( lazyLoad( ( ) => import( "../views/pages/myAccount" ) ) ),
        exact: true,
    },
    {
        path: "/login",
        component: Login,
        exact: true,
    },
];

export default routes;
