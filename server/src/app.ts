// just express setup 
import express, { type Application } from "express"
import config from "./config"
const app:Application = express()


// middleware rq, res receive
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//app ta amra server.ts file chal
export default app;