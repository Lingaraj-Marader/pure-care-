export interface GalleryItem {
  src: string;
  title: string;
  category: string;
}

export const galleryCategories: string[] = [
  "All",
  "Exterior Detailing",
  "Interior Detailing",
  "Paint Protection Services",
  "Additional Detailing Services",
];

export const galleryItems: GalleryItem[] = [
  {
    src: "/services/Car-Polish.jpg",
    title: "Machine Polish & Paint Correction",
    category: "Exterior Detailing",
  },
  {
    src: "/services/Wrapping.jpg",
    title: "Exterior Finish & Detail",
    category: "Exterior Detailing",
  },
  {
    src: "/services/Car-Detailing.jpg",
    title: "Full Exterior Detailing",
    category: "Exterior Detailing",
  },
  {
    src: "/services/Seat-Covers.jpg",
    title: "Seat Shampoo & Upholstery Care",
    category: "Interior Detailing",
  },
  {
    src: "/services/Carpet-Flooring.jpg",
    title: "Interior Deep Clean",
    category: "Interior Detailing",
  },
  {
    src: "/services/Ceiling.jpg",
    title: "Headliner & Cabin Detailing",
    category: "Interior Detailing",
  },
  {
    src: "/services/Plastic-Flooring.jpg",
    title: "Dashboard & Console Care",
    category: "Interior Detailing",
  },
  {
    src: "/services/Ceramic-Coating.jpg",
    title: "Ceramic Coating",
    category: "Paint Protection Services",
  },
  {
    src: "/services/PPF-CAR.jpg",
    title: "PPF Installation",
    category: "Paint Protection Services",
  },
  {
    src: "/services/Graphene-Coating.jpg",
    title: "Graphene Coating",
    category: "Paint Protection Services",
  },
  {
    src: "/services/Car-Tinting.jpg",
    title: "Window Polishing",
    category: "Additional Detailing Services",
  },
  {
    src: "/services/Car-Accessories.png",
    title: "Engine Bay & Wheel Detailing",
    category: "Additional Detailing Services",
  },
];
