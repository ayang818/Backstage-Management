const express =  require("express")
const app = express()

// 允许跨域请求
app.use(require("cors")())
app.use(express.json())

// 链接数据库并允许权限
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/site-test", {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
})

const Article = mongoose.model("Article", new mongoose.Schema({
    title: {
        type: String,
    },
    body: {
        type: String,
    },
    tag: {
        type: String,
    },
}))

app.post("/api/article", async (req, res) => {
    const article = await Article.create(req.body)
    res.send(article)
})

app.get("/", async (req, res) => {
    res.send("index page")
})

app.listen(3002, () =>  console.log("http://localhost:3002"))
