import { Room } from "@/types/room";

interface DetailsProps {
  room: Room;
}

function RoomDetails({ room }: DetailsProps) {

    console.log(room)

    // const {} = room;
  return (
    <div>
      {room.title}
    </div>
  );
}

export default RoomDetails;