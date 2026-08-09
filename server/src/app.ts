// just express setup 
import express, { type Application } from "express"
import { useRoutes } from "./modules/user/user.route.js"
import { useRoomRoutes } from "./modules/room/room.route.js"
const app:Application = express()


// middleware rq, res receive
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
//post user
app.use("/api/users",useRoutes );
//get all user room.route.ts file teke asbe useRoutes ta
app.use("/api/rooms", useRoomRoutes );

//app ta amra server.ts file chalai
export default app;