import { Room } from "@/types/room";
import RoomCard from "../RoomCard/RoomCard";
import Container from "@/components/shared/Container/Container";


interface HomeRoomsProps {
  rooms: Room[];
}

const HomeRooms = ({ rooms }: HomeRoomsProps) => {
  return (
  <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {rooms.map((room) => (
        <RoomCard
          key={room.id}
          room={room}
        />
      ))}
    </div>
  </Container>
  );
};

export default HomeRooms;