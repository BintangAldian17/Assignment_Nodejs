import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import db from "./config/Database.js"
import Posts from "./models/Posts.js"

const app = express()

try {
    await db.authenticate()
    await Posts.sync()
    console.log('Databse Connected');
} catch (error) {
    console.log(error);
}

app.listen(5300, () => {
    console.log("server running on port 5300");
})