const app = require('./server');
const mongoose = require("mongoose");
const supertest = require("supertest");
var {User} = require("./models/whiteboard")
var {Whiteboard} = require("./models/whiteboard")
beforeAll( async () => {
	await mongoose.connect("mongodb+srv://DoscaUser:DoscaPassword123@cluster0.f5mpn.mongodb.net/doscadb?retryWrites=true&w=majority");
});
afterAll((done) => {
	mongoose.connection.db.dropDatabase(() => {
		mongoose.connection.close(() => done())
	});
});
describe("Server tests", ()=> {
	const testHost = {code: "100", url: "https://localhost:3001", username: "testHost"};
	var testUser = {code: "100", url: "https://localhost:3001", username: "testUser"};
	var serverCode; 
	it("Create Whiteboard", async () => {
		await supertest(app).post("/createWhiteboard").send(testHost)
			.then((response) => {
				testUser.code = response.body.code;
				expect(response.body.host).toBe(testhost.username);
				expect(response.body.users).toHaveLength(1);
		});
	});
	it("Check if Whiteboard was created", async () => {
		await supertest(app).get("/getWhiteboards")
			.then((response) => {
				expect(response.body).toHaveLength(1);
			});
	});
	it("Add User to Created WhiteBoard", async () => {
		await supertest(app).post("addUser").send(testUser)
			.then((response) => {
				expect(response.body).toContain("success");
			});
	});
	it("Check if User was added", async () => {
		await supertest(app).get("/getWhiteBoards")
			.then((response) => {
				expect(response.body.findOne()).users.toHaveLength(2);
		});
	});
});

