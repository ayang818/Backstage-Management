const express  = require("express")
const app = express()

// 允许跨域
app.use(require('cors')())
// 
app.use(express.json())

// 链接数据库
const mongoose = require('mongoose')
mongoose.connect("mongodb://119.23.240.115:27017/element-admin",{
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true, 
})

const Article = mongoose.model("Article",new mongoose.Schema({
    title: {type: String},
    body: {type: String},
    type: {type: String}
}))

app.get("/", async (req, res) =>
    res.send("restful page")
)

app.get("/api/article", async(req, res) => {
    const articles = await Article.find()
    res.send(articles)
})

// 新增文章
app.post("/api/article", async(req, res) => {
    const article = await Article.create(req.body)
    res.send(article)
})

app.listen(3001, () => 
    console.log("http://localhost:3001/")
)
