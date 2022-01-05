import axios from "axios";

import { NOTCH_API_BASE_URL, getProducts } from "./products";
axios.defaults.adapter = require('axios/lib/adapters/http');


jest.mock("axios");

describe("fetch products", () => {
    describe("when API call is successful", () => {
        it("should return all product list", async () => {
            const sampleJson = [{
                "SKU": 7282,
                "name": "lemon",
                "description": "tequila or paloma",
                "price": 5.99
            },
            {
                "SKU": 9303,
                "name": "lime",
                "description": "squirt drink",
                "price": 5.99
            }]
            axios.get.mockResolvedValueOnce(sampleJson);

            // when
            const result = await getProducts();

            // then
            expect(axios.get).toHaveBeenCalledWith("http://localhost:3002/products", { "params": { "search": undefined } });
            expect(result).toEqual(sampleJson);
        });
    });

    describe("when API call is successful with search", () => {
        it("should return all product list with LE", async () => {
            const sampleJson = [{
                "SKU": 7282,
                "name": "lemon",
                "description": "tequila or paloma",
                "price": 5.99
            }]
            axios.get.mockResolvedValueOnce(sampleJson);

            // when
            const result = await getProducts("le");

            // then
            expect(axios.get).toHaveBeenCalledWith("http://localhost:3002/products", { "params": { "search": "le" } });
            expect(result).toHaveLength(1);
        });
    });

    describe("when API call fails", () => {
        it("should return Network Error", async () => {
            // given
            const message = new Error("Network Error");
            axios.mockRejectedValueOnce(message);

            // when

            try {
                await getProducts();
            } catch (e) {
                expect(e).toEqual(message);
            }

        });
    });
});