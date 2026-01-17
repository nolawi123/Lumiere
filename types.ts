export enum RoomType {
  SUITE = 'Suite',
  DELUXE = 'Deluxe',
  VILLA = 'Villa',
  PENTHOUSE = 'Penthouse'
}

export interface Amenity {
  icon: string;
  name: string;
}

export interface Room {
  id: string;
  name: string;
  type: RoomType;
  pricePerNight: number;
  description: string;
  longDescription: string;
  capacity: number;
  sizeSqFt: number;
  amenities: Amenity[];
  images: string[];
  featured?: boolean;
}

export interface BookingDetails {
  roomId: string;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  totalPrice: number;
  guestName: string;
  guestEmail: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}