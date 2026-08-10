import RoomFilter from "@/components/room/RoomFilter/RoomFilter";
import Container from "@/components/shared/Container/Container";
import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { Room } from "@/types/room";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const getAllEvents = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/rooms`);

    return response.data.data;
  } catch (error) {
    console.log("Failed to get all rooms", error);

    return [];
  }
};

async function Page() {
  const rooms = await getAllEvents();

  return (
    <div>
      <Navbar />

      <Container>
        <div className="my-10">

          {/* Search + Filter + Room Cards */}
          <RoomFilter rooms={rooms as Room[]} />

        </div>
      </Container>

      <Footer />
    </div>
  );
}

export default Page;