import { Room, RoomType } from '../types';

export const ROOMS: Room[] = [
  {
    id: 'royal-penthouse',
    name: 'The Royal Penthouse',
    type: RoomType.PENTHOUSE,
    pricePerNight: 2500,
    description: 'Panoramic city views with private rooftop terrace and infinity pool.',
    longDescription: 'Experience the pinnacle of luxury in our Royal Penthouse. Spanning 3,000 square feet, this residence features a private elevator, a grand piano, a dedicated butler service, and a rooftop infinity pool overlooking the skyline. Every detail, from the Italian marble floors to the hand-woven silk drapery, has been curated for the discerning traveler.',
    capacity: 4,
    sizeSqFt: 3000,
    amenities: [
      { icon: 'Wifi', name: 'High-speed Fiber' },
      { icon: 'Martini', name: 'Private Bar' },
      { icon: 'Waves', name: 'Infinity Pool' },
      { icon: 'User', name: '24/7 Butler' }
    ],
    images: [
      'https://picsum.photos/id/1031/1200/800',
      'https://picsum.photos/id/1040/1200/800',
      'https://picsum.photos/id/1039/1200/800'
    ],
    featured: true
  },
  {
    id: 'ocean-villa',
    name: 'Oceanfront Villa',
    type: RoomType.VILLA,
    pricePerNight: 1200,
    description: 'Direct beach access with a secluded garden and outdoor rain shower.',
    longDescription: 'Steps away from the pristine sands, the Oceanfront Villa offers a sanctuary of calm. The open-plan design blurs the lines between indoor and outdoor living. Enjoy a sunrise breakfast on your private deck or unwind in the soaking tub with views of the horizon.',
    capacity: 3,
    sizeSqFt: 1500,
    amenities: [
      { icon: 'Sun', name: 'Beach Access' },
      { icon: 'Coffee', name: 'Espresso Machine' },
      { icon: 'Bath', name: 'Soaking Tub' }
    ],
    images: [
      'https://picsum.photos/id/164/1200/800',
      'https://picsum.photos/id/188/1200/800',
      'https://picsum.photos/id/192/1200/800'
    ],
    featured: true
  },
  {
    id: 'executive-suite',
    name: 'Executive Suite',
    type: RoomType.SUITE,
    pricePerNight: 650,
    description: 'Modern elegance designed for the business traveler, featuring a dedicated workspace.',
    longDescription: 'Efficiency meets elegance in the Executive Suite. Designed with the modern professional in mind, it features a soundproofed office area, ergonomic furniture, and a smart-home control system. After work, relax in the spacious lounge area with curated art pieces.',
    capacity: 2,
    sizeSqFt: 850,
    amenities: [
      { icon: 'Monitor', name: 'Workstation' },
      { icon: 'Wifi', name: 'Premium Wifi' },
      { icon: 'Tv', name: 'Smart TV' }
    ],
    images: [
      'https://picsum.photos/id/235/1200/800',
      'https://picsum.photos/id/238/1200/800'
    ]
  },
  {
    id: 'deluxe-king',
    name: 'Deluxe King',
    type: RoomType.DELUXE,
    pricePerNight: 400,
    description: 'A serene retreat with bespoke furnishings and a city view.',
    longDescription: 'Our Deluxe King rooms define understated luxury. Featuring a plush king-sized bed with Egyptian cotton linens, a marble bathroom with artisanal toiletries, and floor-to-ceiling windows offering vibrant city views.',
    capacity: 2,
    sizeSqFt: 500,
    amenities: [
      { icon: 'Bed', name: 'King Bed' },
      { icon: 'Wind', name: 'AC' }
    ],
    images: [
      'https://picsum.photos/id/369/1200/800',
      'https://picsum.photos/id/400/1200/800'
    ]
  }
];

export const getRoomById = (id: string): Room | undefined => {
  return ROOMS.find(r => r.id === id);
};

export const getFeaturedRooms = (): Room[] => {
  return ROOMS.filter(r => r.featured);
};
