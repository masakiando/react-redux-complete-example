class Order {
    constructor( projectId, title, discrption ) {
        this.project_id = projectId;
        this.title = title;
        this.discrption = discrption;
        this.status = "Receive";
        this.timestamps = new Date();
    }
}

module.exports = Order;

/**
 * @swagger
 *  components:
 *    schemas:
 *      Order:
 *        type: object
 *        required:
 *          - project_id
 *          - title
 *          - discrption
 *        properties:
 *          project_id:
 *            type: number
 *          title:
 *            type: string
 *          discrption:
 *            type: string
 *        example:
 *           project_id: 1
 *           title: AAAA機能の改修
 *           discrption: AAAA機能の改修の改修要件は、... です。
 */
