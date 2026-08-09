// just express setup 
import express, { type Application } from "express"
import {  getSIngleUser, userDeleteRoutes, useRoutes } from "./modules/user/user.route.js"
import { detailsRoutes, roomsHomeRoutes, useRoomRoutes } from "./modules/room/room.route.js"
const app:Application = express()


// middleware rq, res receive
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
//post user
app.use("/api/users",useRoutes );
//DELETE http://localhost:5000/api/users?email=test@gmail.com
app.use("/api/users",userDeleteRoutes )
//user get in email
//http://localhost:5000/api/users?email=hello69k@gmail.com
app.use("/api/users",getSIngleUser )

//get all user room.route.ts file teke asbe useRoutes ta
app.use("/api/rooms", useRoomRoutes );
// get home rooms
app.use("/api/home-rooms",roomsHomeRoutes)
// get room details 
app.use("/api/rooms", detailsRoutes);

//app ta amra server.ts file chalai
export default app;