export interface GalleryItem {
  src: string;
  title: string;
  category: string;
  type?: "image" | "video";
}

export const galleryCategories: string[] = [
  "All",
  "Videos",
  "Exterior Detailing",
  "Interior Detailing",
  "Paint Protection Film (PPF)",
  "Seat Upholstery",
  "Additional Detailing Services",
];

export const galleryItems: GalleryItem[] = [
  {
    src: "/gallery/purecare-showcase-2.jpg",
    title: "Pure Care Auto Accessories Facility",
    category: "Our Facility",
    type: "image",
  },
  {
    src: "/gallery/purecare-showcase-1.jpg",
    title: "Luxury Custom Interior Design & Detailing",
    category: "Interior Detailing",
    type: "image",
  },
  {
    src: "/gallery/purecare-showcase-3.jpg",
    title: "Luxury Interior Deep Clean & Conditioning",
    category: "Interior Detailing",
    type: "image",
  },
  {
    src: "/gallery/purecare-video-1.mp4",
    title: "Video 1",
    category: "Videos",
    type: "video",
  },
  {
    src: "/gallery/purecare-video-2.mp4",
    title: "Video 2",
    category: "Videos",
    type: "video",
  },
  {
    src: "/gallery/purecare-video-3.mp4",
    title: "Video 3",
    category: "Videos",
    type: "video",
  },
  {
    src: "/gallery/purecare-video-4.mp4",
    title: "Video 4",
    category: "Videos",
    type: "video",
  },
  {
    src: "/gallery/purecare-video-5.mp4",
    title: "Video 5",
    category: "Videos",
    type: "video",
  },
  {
    src: "/services/Car-Polish.jpg",
    title: "Machine Polish & Paint Correction",
    category: "Exterior Detailing",
    type: "image",
  },
  {
    src: "/services/Wrapping.jpg",
    title: "Exterior Custom Finish & Wrapping",
    category: "Exterior Detailing",
    type: "image",
  },
  {
    src: "/services/Car-Detailing.jpg",
    title: "Full Exterior Detailing",
    category: "Exterior Detailing",
    type: "image",
  },
  {
    src: "/services/Seat-Covers.jpg",
    title: "Seat Shampoo & Upholstery Care",
    category: "Seat Upholstery",
    type: "image",
  },
  {
    src: "/services/Carpet-Flooring.jpg",
    title: "Interior Deep Carpet Cleaning",
    category: "Seat Upholstery",
    type: "image",
  },
  {
    src: "/services/Ceiling.jpg",
    title: "Headliner & Cabin Detailing",
    category: "Seat Upholstery",
    type: "image",
  },
  {
    src: "/services/Plastic-Flooring.jpg",
    title: "Dashboard & Console Protection",
    category: "Seat Upholstery",
    type: "image",
  },
  {
    src: "/services/Ceramic-Coating.jpg",
    title: "Ceramic Coating Application",
    category: "Paint Protection Film (PPF)",
    type: "image",
  },
  {
    src: "/services/PPF-CAR.jpg",
    title: "Full Body PPF Installation",
    category: "Paint Protection Film (PPF)",
    type: "image",
  },
  {
    src: "/services/Graphene-Coating.jpg",
    title: "Graphene Coating Protection",
    category: "Paint Protection Film (PPF)",
    type: "image",
  },
  {
    src: "/services/Car-Tinting.jpg",
    title: "Window Tinting & Polishing",
    category: "Additional Detailing Services",
    type: "image",
  },
  {
    src: "/services/Car-Accessories.png",
    title: "Engine Bay & Wheel Detailing",
    category: "Additional Detailing Services",
    type: "image",
  },
];
