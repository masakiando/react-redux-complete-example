import { Router } from "express";
import path from "path";
import data from "./apiData.json";
import { join } from "./utils";

const router = new Router();
const swaggerJsdoc = require( "swagger-jsdoc" );
const swaggerUi = require( "swagger-ui-express" );

// App Modules
const User = require( "../Models/User" );

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */

/**
 * @swagger
 * path:
 *  /users/:
 *    get:
 *      summary: Get all users
 *      tags: [Users]
 *      responses:
 *        "200":
 *          description: An array of users
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 */
router.get( "/users", ( req, res ) => {
    const userOne = new User( "Alexander", "fake@gmail.com" );
    const userTwo = new User( "Ryan", "fakeagain@gmail.com" );
    res.json( { userOne, userTwo } );
} );

/**
 * @swagger
 * path:
 *  /users/:
 *    post:
 *      summary: Create a new user
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      responses:
 *        "200":
 *          description: A user schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 */
router.post( "/users", ( req, res ) => {
    const { email, name } = req.body;
    const user = new User( name, email );
    res.json( user );
} );

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Products management
 */
router.get( "/products", ( req, res ) => {
    setTimeout(
        () => res.json( { products: data.products.map( productOverview ) } ),
        500,
    );
} );

router.get( "/products/:permalink", ( req, res ) => {
    const product = data.products.find( p => p.permalink === req.params.permalink );
    setTimeout( () => res.json( { product } ), 500 );
} );

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Orders management
 */

/**
 * @swagger
 * path:
 *  /orders/:
 *    get:
 *      summary: Get all orders
 *      tags: [Orders]
 *      responses:
 *        "200":
 *          description: An array of orders
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 */
router.get( "/orders", ( req, res ) => {
    const { projects, orders } = data;
    const result = join( projects, orders, "id", "project_id", orderOverview );

    setTimeout( () => res.json( { orders: result } ), 500 );
    // setTimeout( () => res.json( { orders: data.orders.map( orderOverview ) } ), 500 );
} );

router.post( "/login", ( req, res ) => {
    setTimeout( () => {
        if ( req.body.username === "user42" && req.body.password === "secret" ) {
            return res.json( { success: true, token: "1111-2222-3333-4444" } );
        }

        return res
            .status( 401 )
            .json( { success: false, error: "Invalid credentials" } );
    }, 500 );
} );

function productOverview( product ) {
    return {
        id: product.id,
        name: product.name,
        permalink: product.permalink,
        price: product.price,
        imageUrl: product.imageUrl,
        stock: product.stock,
    };
}

function orderOverview( order, project ) {
    return {
        id: order.id,
        title: order.title,
        status: order.status,
        tat: order.tat,
        project_name: project !== undefined ? project.project_name : null,
    };
}

// function orderOverview( order ) {
//     return {
//         id: order.id,
//         project: order.project,
//         title: order.title,
//         status: order.status,
//         tat: order.tat,
//         startDate: order.startDate,
//     };
// }

// Swagger set up
const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Time to document that Express API you built",
            version: "1.0.0",
            description:
                "A test project to understand how easy it is to document and Express API",
            license: {
                name: "MIT",
                url: "https://choosealicense.com/licenses/mit/",
            },
            contact: {
                name: "Swagger",
                url: "https://swagger.io",
                email: "Info@SmartBear.com",
            },
        },
        servers: [
            {
                url: "http://localhost:7777/api/v1",
            },
        ],
    },
    apis: [
        path.resolve( __dirname, "../Models/User.js" ),
        path.resolve( __dirname, "./apiRoutes.js" ),
    ],
};
const specs = swaggerJsdoc( options );
router.use( "/docs", swaggerUi.serve );
router.get( "/docs", swaggerUi.setup( specs, { explorer: true } ) );

export default router;
