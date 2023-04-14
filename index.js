import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import db from "./config/Database.js"
import router from "./routes/index.js"

const app = express()

try {
    await db.authenticate()
    console.log('Databse Connected');
} catch (error) {
    console.log(error);
}

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(router)


app.listen(5300, () => {
    console.log("server running on port 5300");
})