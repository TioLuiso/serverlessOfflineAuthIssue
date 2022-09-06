import axios from "axios"

test("hello should", async () => {
    const url = "http://localhost:3000/dev/hello/"
    const body = {
        name: "tioLuiso"
    }
    const response = await axios.post(url, body);
    expect(response.status).toBe(200);
    expect(response.data.message).toBe("Hello tioLuiso, welcome to the exciting Serverless world!")
})