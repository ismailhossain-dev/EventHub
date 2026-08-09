import Hero from "@/components/home/Hero/Hero";
import PopularCategories from "@/components/home/PopularCategories/PopularCategories";
import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import axios from "axios";

export default async function Home() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

//home rooms fetch
const getHomeRooms = async () => {
  try {
    const response = await axios.get(`${API_URL}/home-rooms`);

    console.log("home data", response.data.data);

    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch home rooms:", error);
  }
};

console.log("home rooms fetch", getHomeRooms());
  return (
   <div>
    <Navbar/>
    <Hero/>
    <PopularCategories/>
    <Footer/>
   </div>
  );
}
