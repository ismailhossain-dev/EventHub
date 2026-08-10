import { PrismaPg } from "@prisma/adapter-pg";
import config from "../src/config";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({
  connectionString: config.connnection_string,
});

const prisma = new PrismaClient({
  adapter,
});

const reviews = [
  {
    rating: 5,
    comment:
      "The room was very clean and comfortable. The sea view was absolutely amazing!",
    isApproved: true,
    userId: "REAL_USER_ID_1",
    roomId: "REAL_ROOM_ID_1",
  },

  {
    rating: 4,
    comment:
      "Very nice room with modern facilities. The staff were friendly and helpful.",
    isApproved: true,
    userId: "REAL_USER_ID_2",
    roomId: "REAL_ROOM_ID_2",
  },

  {
    rating: 5,
    comment:
      "Amazing experience! The room was spacious, peaceful, and perfect for our family.",
    isApproved: true,
    userId: "REAL_USER_ID_3",
    roomId: "REAL_ROOM_ID_3",
  },

  {
    rating: 4,
    comment:
      "The mountain view was beautiful. The room was comfortable and the environment was peaceful.",
    isApproved: true,
    userId: "REAL_USER_ID_4",
    roomId: "REAL_ROOM_ID_4",
  },

  {
    rating: 5,
    comment:
      "Excellent service and beautiful interior. I really enjoyed staying here and would definitely visit again.",
    isApproved: true,
    userId: "REAL_USER_ID_5",
    roomId: "REAL_ROOM_ID_5",
  },

  {
    rating: 3,
    comment:
      "The room was clean and comfortable, but the room service could be improved.",
    isApproved: true,
    userId: "REAL_USER_ID_6",
    roomId: "REAL_ROOM_ID_6",
  },

  {
    rating: 5,
    comment:
      "Wonderful stay! The private balcony and beautiful view made our experience even better.",
    isApproved: true,
    userId: "REAL_USER_ID_7",
    roomId: "REAL_ROOM_ID_7",
  },

  {
    rating: 4,
    comment:
      "The room was spacious and comfortable. Breakfast was good and the staff were very polite.",
    isApproved: true,
    userId: "REAL_USER_ID_8",
    roomId: "REAL_ROOM_ID_8",
  },
];

async function main() {
  console.log("Review seeding started...");

  await prisma.review.createMany({
    data: reviews,
  });

  console.log("Reviews inserted successfully!");
}

main()
  .catch((error) => {
    console.error("Review seeding failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });