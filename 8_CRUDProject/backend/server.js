import express from "express"
import dotenv from "dotenv"
import cors from "cors"
// cors 서로 다른 포트끼리 주고 받을 수 있게 한다.
import mongoose, { mongo } from "mongoose"
import ProductRouter from "./routes/products.js"

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000
const MONGODB_URI = process.env.MONGODB_URI

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type"]
    })
)

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Node.js CRUD API 서버가 정상 실행 중입니다.")
})

app.use("/api/products", ProductRouter)

const startServer = async () => {
    try {
        await mongoose.connect(MONGODB_URI)
        console.log("MongoDB 연결 성공")
        app.listen(PORT, () => {
            console.log("서버 실행 중...")
        })
    } catch (error) {
        console.error("서버 시작 실패: ", error)
        process.exit(1)
    }
}

startServer()