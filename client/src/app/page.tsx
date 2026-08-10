import FeaturedRooms from "@/components/home/FeaturedRooms/FeaturedRooms";
import Hero from "@/components/home/Hero/Hero";
import MostVisitedPlaces from "@/components/home/MostVisitedPlaces/MostVisitedPlaces";
import PopularCategories from "@/components/home/PopularCategories/PopularCategories";
import HomeRooms from "@/components/room/HomeRooms/HomeRooms";
import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// fetch data
const getHomeRooms = async () => {
  try {
    const response = await axios.get(`${API_URL}/home-rooms`);

    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch home rooms:", error);
    return [];
  }
};

export default async function Home() {
   const rooms = await getHomeRooms();

  // console.log("home rooms fetch", rooms);

  return (
   <div>
    <Navbar/>
    <Hero/>
    <PopularCategories/>
    <FeaturedRooms/>
    <HomeRooms rooms ={rooms}></HomeRooms>

    <MostVisitedPlaces/>
    <Footer/>
   </div>
  );
}
