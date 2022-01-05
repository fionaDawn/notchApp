const myApp = require("./app");
const request = require("supertest");
const requestWithSupertest = request(myApp);

describe('Product Endpoints', () => {
    it("GET /product should return 404", async () => {
        const res = await requestWithSupertest.get('/product');
        expect(res.status).toEqual(404);
    });
    it("GET /products should return all product data", async () => {
        const res = await requestWithSupertest.get('/products');
        expect(res.status).toEqual(200);
        expect(res.body).toHaveLength(13);
    });
    it("GET /products with search text should return only the products that match", async () => {
        const res = await requestWithSupertest.get('/products?search=l');
        expect(res.status).toEqual(200);
        expect(res.body).toHaveLength(2);
    });
});