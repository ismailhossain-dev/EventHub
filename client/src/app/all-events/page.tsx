import RoomCard from "@/components/room/RoomCard/RoomCard";
import Container from "@/components/shared/Container/Container";
import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { Room } from "@/types/room";
import axios from "axios";

// fetch data
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const getAllEvents = async () => {
  try {
    const response = await axios.get(`${API_URL}/rooms`);

    return response.data.data;
  } catch (error) {
    console.log("Failed to all events rooms", error);
  }
};


async function page() {
  const rooms = await getAllEvents();
  // console.log("hello events", rooms);
  return (
    <div>
      <Navbar />
      <Container>
        {/* parent div */}
      
        <div className="my-10">
            {/* Header */}
          <div className="">
    
        </div>
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 l
      md:gap-6"
        >
          {rooms.map((room: Room) => (
            <RoomCard key={room.id} room={room}></RoomCard>
          ))}
        </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default page;
