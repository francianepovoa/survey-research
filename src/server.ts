// Import database
import "reflect-metadata";
import "./database";

import express from "express";
import { router } from "./routers";

//Initialize express function
const app = express();

app.use(express.json());
app.use(router);

// Define server
app.listen(3333, () => console.log("Server is running!"));
