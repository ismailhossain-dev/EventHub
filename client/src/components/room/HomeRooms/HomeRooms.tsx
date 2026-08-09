import { Room } from "@/types/room";
import RoomCard from "../RoomCard/RoomCard";
import Container from "@/components/shared/Container/Container";
import Title from "@/components/shared/Title/Title";
import Link from "next/link";


interface HomeRoomsProps {
  rooms: Room[];
}

const HomeRooms = ({ rooms }: HomeRoomsProps) => {
  return (
  <Container>
      <div className="my-10">
        <div className="text-center mb-6">
          <Title className="">FEATURED EVENTS</Title>
          <p className="text-gray-500">You can choose to display feaured , Upcomming, Past Events here</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 l
      md:gap-6 ">
      {rooms.map((room) => (
        <RoomCard
          key={room.id}
          room={room}
        />
      ))}
    </div>
    <div className="my-6 flex justify-center">
      <Link href="/all-events" className="btn ">All Events</Link>
      </div>
    </div>
  </Container>
  );
};

export default HomeRooms;