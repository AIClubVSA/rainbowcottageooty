/**
 * ─────────────────────────────────────────────────────────────
 *  Rainbow Cottages Ooty — site content
 *  Edit this file to update copy, images, and contact details.
 *  Photography is sourced from the property's original website.
 * ─────────────────────────────────────────────────────────────
 */
import {
  BedDouble,
  Wifi,
  Car,
  UtensilsCrossed,
  Leaf,
  WashingMachine,
  MapPinned,
  Flame,
  Clock,
  Users,
  Droplets,
  Tv,
  Coffee,
  Bath,
  type LucideIcon,
} from 'lucide-react'

/* ── Contact ─────────────────────────────────────────────── */
export const CONTACT = {
  phones: ['+91 94447 66572', '+91 99434 59986', '+91 423 244 1221'],
  email: 'rainbowcottagesooty@gmail.com',
  address: 'Club Road, Mysore Main Road, Ooty, Tamil Nadu, India',
  mapQuery: 'Rainbow Cottages, Club Road, Ooty, Tamil Nadu 643001',
}

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Location', href: '#location' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

/* ── Images ──────────────────────────────────────────────── */
export const IMAGES = {
  hero: '/images/slide-2.jpg',
  about: '/images/slide-5.jpg',
  location: '/images/slide-8.jpg',
  cta: '/images/slide-3.jpg',
}

/* ── Hero badges ─────────────────────────────────────────── */
export const HERO_BADGES = [
  { icon: Car, label: 'Free Parking' },
  { icon: Leaf, label: 'Garden Views' },
  { icon: Clock, label: '24/7 Front Desk' },
]

/* ── About highlights ────────────────────────────────────── */
export interface Highlight {
  icon: LucideIcon
  title: string
  text: string
}

export const HIGHLIGHTS: Highlight[] = [
  {
    icon: MapPinned,
    title: 'Prime Location',
    text: 'Just 1 km from Ooty Lake, minutes from the bus stand and town’s favourite sights.',
  },
  {
    icon: BedDouble,
    title: 'Cozy Comfort',
    text: 'Warm wood-finished rooms, soft bedding and hot water on tap — like home, only quieter.',
  },
  {
    icon: Coffee,
    title: 'Honest Value',
    text: 'Family-friendly rates with the little things included: parking, Wi-Fi and morning tea.',
  },
]

/* ── Rooms ───────────────────────────────────────────────── */
export interface Room {
  name: string
  blurb: string
  image: string
  amenities: { icon: LucideIcon; label: string }[]
}

export const ROOMS: Room[] = [
  {
    name: 'Double Cot Semi Deluxe',
    blurb:
      'A snug, great-value room for couples — comfortable double bed and a window onto the garden.',
    image: '/images/room-semi-deluxe.png',
    amenities: [
      { icon: BedDouble, label: 'Double bed' },
      { icon: Tv, label: 'TV' },
      { icon: Droplets, label: 'Hot water' },
    ],
  },
  {
    name: 'Double Cot Deluxe',
    blurb:
      'Our most popular pick: extra space, a seating corner and fresh hill air right outside.',
    image: '/images/room-deluxe.jpg',
    amenities: [
      { icon: BedDouble, label: 'Double bed' },
      { icon: Coffee, label: 'Tea kit' },
      { icon: Bath, label: 'Ensuite bath' },
    ],
  },
  {
    name: 'Double Cot Executive',
    blurb:
      'A little more polish — premium furnishings, work desk and the quietest corner of the property.',
    image: '/images/room-executive.png',
    amenities: [
      { icon: BedDouble, label: 'Queen bed' },
      { icon: Wifi, label: 'Fast Wi-Fi' },
      { icon: Tv, label: 'Smart TV' },
    ],
  },
  {
    name: 'Four-Bedded Deluxe',
    blurb:
      'Made for families and groups: four proper beds, roomy layout and space for everyone’s bags.',
    image: '/images/room-family.png',
    amenities: [
      { icon: Users, label: 'Sleeps 4' },
      { icon: BedDouble, label: '4 beds' },
      { icon: Bath, label: 'Ensuite bath' },
    ],
  },
]

/* ── Amenities ───────────────────────────────────────────── */
export const AMENITIES: { icon: LucideIcon; label: string }[] = [
  { icon: Wifi, label: 'Free Wi-Fi' },
  { icon: Car, label: 'Free Private Parking' },
  { icon: UtensilsCrossed, label: 'Restaurant & Room Service' },
  { icon: Leaf, label: 'Lush Garden' },
  { icon: WashingMachine, label: 'Laundry' },
  { icon: MapPinned, label: 'Travel Desk' },
  { icon: Flame, label: 'Campfire on Request' },
  { icon: Clock, label: '24-hour Front Desk' },
  { icon: Users, label: 'Family Rooms' },
  { icon: Droplets, label: 'Hot Water' },
]

/* ── Nearby attractions ──────────────────────────────────── */
export const NEARBY = [
  { name: 'Ooty Lake', distance: '≈ 1 km' },
  { name: 'Government Botanical Gardens', distance: '≈ 2 km' },
  { name: 'Government Rose Garden', distance: '≈ 2.5 km' },
  { name: 'Ooty Bus Station', distance: '≈ 1.5 km' },
  { name: 'St. Stephen’s Church', distance: '≈ 2 km' },
]

/* ── Gallery ─────────────────────────────────────────────── */
export const GALLERY = [
  { src: '/images/slide-1.jpg', alt: 'Rainbow Cottages property in Ooty' },
  { src: '/images/slide-2.jpg', alt: 'Guest room at Rainbow Cottages' },
  { src: '/images/slide-3.jpg', alt: 'Comfortable cottage accommodation' },
  { src: '/images/slide-4.jpg', alt: 'Rainbow Cottages interior' },
  { src: '/images/slide-5.jpg', alt: 'Cottage exterior and garden' },
  { src: '/images/slide-6.jpg', alt: 'Warm guest room interior' },
  { src: '/images/slide-7.jpg', alt: 'Family accommodation in Ooty' },
  { src: '/images/slide-8.jpg', alt: 'Rainbow Cottages entrance' },
]

/* ── Testimonials ────────────────────────────────────────── */
export const TESTIMONIALS = [
  {
    quote:
      'Perfect little cottage stay — clean rooms, hot water any time, and the garden is lovely for morning tea. Walkable to the lake!',
    name: 'Priya & Karthik',
    from: 'Chennai',
  },
  {
    quote:
      'We took the four-bedded room for our family. Great value, helpful staff, and they arranged a campfire for the kids. Will return.',
    name: 'The Menon Family',
    from: 'Coimbatore',
  },
  {
    quote:
      'Quiet, green and honestly priced. The front desk helped plan our sightseeing and the food was homely. A real gem in Ooty.',
    name: 'Sarah D’Souza',
    from: 'Bengaluru',
  },
]
