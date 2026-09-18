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
    src: "/showcase/2.png",
    title: "Pure Care State-of-the-Art Detailing Studio",
    category: "Exterior Detailing",
    type: "image",
  },
  {
    src: "/gallery/purecare-showcase-2.jpg",
    title: "Pure Care Abu Shagara Sharjah Headquarters",
    category: "Exterior Detailing",
    type: "image",
  },
  {
    src: "/showcase/ppf-installation.jpg",
    title: "Self-Healing PPF Precision Installation",
    category: "Paint Protection Film (PPF)",
    type: "image",
  },
  {
    src: "/showcase/luxury-interior.jpg",
    title: "Luxury Interior Leather Treatment & Deep Detail",
    category: "Interior Detailing",
    type: "image",
  },
  {
    src: "/gallery/purecare-showcase-3.jpg",
    title: "Executive Tan Leather Restoration & Detailing",
    category: "Interior Detailing",
    type: "image",
  },
  {
    src: "/gallery/purecare-showcase-1.jpg",
    title: "Bespoke Pink Brabus Custom Interior Transformation",
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
    title: "Multi-Stage Machine Paint Correction",
    category: "Exterior Detailing",
    type: "image",
  },
  {
    src: "/services/Wrapping.jpg",
    title: "Dual-Tone Custom Vinyl Wrap",
    category: "Exterior Detailing",
    type: "image",
  },
  {
    src: "/services/Car-Detailing.jpg",
    title: "Full Exterior Showroom Detailing",
    category: "Exterior Detailing",
    type: "image",
  },
  {
    src: "/services/custom-seat-stitching.jpg",
    title: "Bespoke Diamond Quilted Custom Seat Stitching",
    category: "Seat Upholstery",
    type: "image",
  },
  {
    src: "/services/Seat-Covers.jpg",
    title: "Tailored Ready-Made Seat Covers",
    category: "Seat Upholstery",
    type: "image",
  },
  {
    src: "/services/Carpet-Flooring.jpg",
    title: "5D & 7D Luxury All-Weather Floor Mats",
    category: "Seat Upholstery",
    type: "image",
  },
  {
    src: "/services/Plastic-Flooring.jpg",
    title: "Heavy-Duty Protective Cabin Flooring",
    category: "Seat Upholstery",
    type: "image",
  },
  {
    src: "/services/Ceiling.jpg",
    title: "Alcantara Headliner & Roof Lining",
    category: "Seat Upholstery",
    type: "image",
  },
  {
    src: "/services/PPF-CAR.jpg",
    title: "Full Body Paint Protection Film (PPF)",
    category: "Paint Protection Film (PPF)",
    type: "image",
  },
  {
    src: "/services/Ceramic-Coating.jpg",
    title: "9H Nano Ceramic Coating Application",
    category: "Paint Protection Film (PPF)",
    type: "image",
  },
  {
    src: "/services/Graphene-Coating.jpg",
    title: "Advanced Graphene Matrix Heat Defense",
    category: "Paint Protection Film (PPF)",
    type: "image",
  },
  {
    src: "/services/Car-Tinting.jpg",
    title: "Nano Ceramic Window Tinting",
    category: "Additional Detailing Services",
    type: "image",
  },
  {
    src: "/services/Car-Accessories.png",
    title: "Engine Bay & Precision Wheel Detailing",
    category: "Additional Detailing Services",
    type: "image",
  },
];
