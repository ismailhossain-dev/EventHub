// just express setup 
import express, { type Application } from "express"
import { useRoutes } from "./modules/user/user.route"
const app:Application = express()


// middleware rq, res receive
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use("/api/users",useRoutes );

//app ta amra server.ts file chal
export default app;