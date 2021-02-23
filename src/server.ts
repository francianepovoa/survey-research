import express, { request, response } from "express";

//Initialize express function
const app = express();

app.get("/", (request, response) => {
	return response.json({ message: "Hello World!" });
});

app.post("/", (request, response) => {
	return response.json({ message: "Data saved successfully " });
});

// Define server
app.listen(3333, () => console.log("Server is running!"));
