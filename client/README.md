event-hub-client/
│
├── public/
│   ├── images/
│   ├── icons/
│   └── logo.svg
│
├── src/
│   │
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   │
│   │   ├── login/
│   │   │   └── page.tsx
│   │   │
│   │   ├── register/
│   │   │   └── page.tsx
│   │   │
│   │   ├── rooms/
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── events/
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   │
│   │   └── dashboard/
│   │       ├── page.tsx
│   │       ├── profile/
│   │       │   └── page.tsx
│   │       └── bookings/
│   │           └── page.tsx
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── Loading.tsx
│   │   │
│   │   ├── shared/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Container.tsx
│   │   │   └── SectionTitle.tsx
│   │   │
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── FeaturedRooms.tsx
│   │   │   └── PopularEvents.tsx
│   │   │
│   │   ├── room/
│   │   │   ├── RoomCard.tsx
│   │   │   ├── RoomDetails.tsx
│   │   │   ├── RoomFilter.tsx
│   │   │   └── BookingForm.tsx
│   │   │
│   │   └── event/
│   │       ├── EventCard.tsx
│   │       ├── EventDetails.tsx
│   │       └── EventFilter.tsx
│   │
│   ├── services/
│   │   ├── api.ts
│   │   ├── user.service.ts
│   │   ├── room.service.ts
│   │   ├── event.service.ts
│   │   └── booking.service.ts
│   │
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useUser.ts
│   │   ├── useRooms.ts
│   │   ├── useEvents.ts
│   │   └── useBookings.ts
│   │
│   ├── types/
│   │   ├── user.ts
│   │   ├── room.ts
│   │   ├── event.ts
│   │   └── booking.ts
│   │
│   ├── lib/
│   │   ├── axios.ts
│   │   ├── auth.ts
│   │   └── utils.ts
│   │
│   ├── providers/
│   │   ├── QueryProvider.tsx
│   │   └── AuthProvider.tsx
│   │
│   └── constants/
│       ├── routes.ts
│       └── navItems.ts
│
├── .env.local
├── next.config.ts
├── package.json
└── tsconfig.json