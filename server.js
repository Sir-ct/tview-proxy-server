const express = require("express")
const axios = require("axios")
const cors = require("cors")

app = express()

app.use(cors({
    origin: "*"
}))
let port = process.env.PORT || 3000

app.get("/", (req, res)=>{
    axios.get("https://api.binance.com/api/v3/ticker/24hr").then(response => {
        res.json(response.data)
        console.log(response.data)
    }).catch(error => {
        res.json(error)
    })
})

app.get("/bybit", (req, res)=>{
    axios.get("https://api.bybit.com/v2/public/tickers").then(response => {
        res.json(response.data)
        console.log(response.data)
    }).catch(error => {
        res.json(error)
    })
})

app.get("/kucoin", (req, res) => {
    axios.get("https://api.kucoin.com/api/v1/market/allTickers").then(response => {
        res.json(response.data)
        console.log(response.data)
    }).catch(error => {
        res.json(error)
    })
})

app.get("/gateio", (req, res)=>{
    axios.get("https://api.gateio.ws/api/v4/spot/tickers").then(response => {
        res.json(response.data)
        console.log(response.data)
    }).catch(error => {
        res.json(error)
    })
})

app.get("/izuu", (req, res)=>{
    axios.get("https://www.nimiq.com/oasis/?utm_source=twitter&utm_medium=organic&utm_campaign=nimiq-squad-campaign-2021&utm_term=Engr_Steel").then(response => {
        res.json(response.data)
        console.log(response.data)
    }).catch(error => {
        res.json(error)
    })
})


app.get("/buzz", (req, res)=>{
    axios.get("https://buzzarena.net/627b71e3e56e85c492958358").then(response => {
        res.json(response.data)
        console.log(response.data)
    }).catch(error => {
        res.json(error)
    })
})

app.listen(port, ()=>{
    console.log("listening on port" + port)
})