// just express setup 
import express, { type Application } from "express"
import {  getSIngleUser, nextAuthRoutes, userDeleteRoutes, useRoutes } from "./modules/user/user.route.js"
import { detailsRoutes, roomsHomeRoutes, useRoomRoutes } from "./modules/room/room.route.js"
import cors from "cors"
import { bookingRoutes, getBookingRoutes } from "./modules/booking/booking.route.js"

const app:Application = express()
app.use(
  cors({
    // client cors
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// middleware rq, res receive
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
//post user
app.use("/api/users",useRoutes );
//DELETE users?email=test@gmail.com
app.use("/api/users",userDeleteRoutes )

//users?email=hello69k@gmail.com
app.use("/api/users",getSIngleUser )

//step-4 authencation
app.use("/api/users", nextAuthRoutes);
//get all user room.route.ts file teke asbe useRoutes ta
app.use("/api/rooms", useRoomRoutes );
// get home rooms
app.use("/api/home-rooms", roomsHomeRoutes);
// get room details 
app.use("/api/rooms", detailsRoutes);


//=========== booking routes post============
app.use("/api/bookings", bookingRoutes);
// get booking
app.use("/api/bookings", getBookingRoutes);
//app ta amra server.ts file chalai
export default app;