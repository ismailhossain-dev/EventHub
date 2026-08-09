import { Room } from "@/types/room";
import RoomCard from "../RoomCard/RoomCard";
import Container from "@/components/shared/Container/Container";
import Title from "@/components/shared/Title/Title";


interface HomeRoomsProps {
  rooms: Room[];
}

const HomeRooms = ({ rooms }: HomeRoomsProps) => {
  return (
  <Container>
      <div>
        <div className="text-center mb-6">
          <Title className="">FEATURED EVENTS</Title>
          <p className="text-gray-500">You can choose to display feaured , Upcomming, Past Events here</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
      {rooms.map((room) => (
        <RoomCard
          key={room.id}
          room={room}
        />
      ))}
    </div>
      </div>
  </Container>
  );
};

export default HomeRooms;