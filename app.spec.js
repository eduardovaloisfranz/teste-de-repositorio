const request = require("supertest")
const app = require("./server")

describe("Testing my Api", () => {
    it("should get main route and list persons stored", async () => {
        const res = await request(app).get("/")
        expect(res.body.length > 0).toBe(res.body.length > 0)
        expect(res.body[0]).toHaveProperty('id')
        expect(res.body[0]).toHaveProperty('nome')
        expect(res.body[0]).toHaveProperty('idade')
    })
})