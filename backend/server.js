import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnection from "./config/database.js";

//app config and dotenv
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

//middleware
app.use(express.json());
app.use(cors());


//dbConnection
const server = async () => {
    try {
        await dbConnection();
        app.listen(PORT, () => {
            console.log(`server running at http://localhost:${PORT}`);
        })
    } catch (err) {
        console.error("error iin dbConnection: ", err.message);
        process.exit(1);
    }
}
server();
app.get("/", (req, res) => {
    res.send("API WORKING")

})


