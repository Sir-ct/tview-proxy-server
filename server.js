const express = require("express")
const axios = require("axios")
const cors = require("cors")

app = express()

app.use(cors({
    origin: "*"
}))
let port = process.env.PORT || 3000

app.get("/", (req, res)=>{
    axios.get("https://api.binance.com/api/v3/ticker/price").then(response => {
        res.json(response.data)
    }).catch(error => {
        res.json(error)
    })
})


app.listen(port, ()=>{
    console.log("listening on port" + port)
})