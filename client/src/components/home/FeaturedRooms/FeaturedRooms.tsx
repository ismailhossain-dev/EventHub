import Container from "@/components/shared/Container/Container";
import React from "react";

const featuresData = [
  {
    id: "01",
    title: "MULTIPLE EVENTS",
    description:
      "Discover and manage a wide variety of events ranging from corporate conferences to musical concerts seamlessly.",
  },
  {
    id: "02",
    title: "EVENT MANAGEMENT",
    description:
      "Organize, schedule, and oversee your entire event lifecycle with advanced tools and real-time tracking.",
  },
  {
    id: "03",
    title: "CREDIT CARD PAYMENT",
    description:
      "Enjoy secure, fast, and reliable online payment processing with multiple payment gateway options.",
  },
  {
    id: "04",
    title: "LOCATION MANAGEMENT",
    description:
      "Find verified venues and locations easily with detailed maps and advanced filtering options.",
  },
  {
    id: "05",
    title: "FREE REGISTRING MANAGEMENT",
    description:
      "Handle attendee sign-ups, ticket registrations, and guest lists smoothly without any hassle.",
  },
  {
    id: "06",
    title: "EASY TO USE",
    description:
      "Navigate through a clean, responsive, and user-friendly interface designed for the best experience.",
  },
];
function FeaturedRooms() {
  return (
    <Container>
        <section className="py-16 bg-gray-50/50">
      <div className="mx-auto ">
        {/* সেকশন হেডার */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-wider text-gray-900 uppercase">
            WHY CHOOSE US
          </h2>
          <div className="w-16 h-1 bg-[#ff2e63] mx-auto mt-2 rounded-full"></div>
        </div>

        {/* কার্ডগুলোর গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresData.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* নম্বর ও টাইটেল */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#3b5998] text-white flex items-center justify-center font-bold text-sm shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {item.id}
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm md:text-base tracking-wide">
                    {item.title}
                  </h3>
                </div>

                {/* ডেসক্রিপশন টেক্সট */}
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed pl-16">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </Container>
  );
}

export default FeaturedRooms;
