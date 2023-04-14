import { Sequelize } from "sequelize";
import dotenv from "dotenv"

dotenv.config({ path: "./.env" })

const db = new Sequelize(process.env.SCHEMA_DB, process.env.USER_DB, process.env.PASSWORD_DB, {
    host: 'localhost',
    dialect: "mysql"
})

export default db