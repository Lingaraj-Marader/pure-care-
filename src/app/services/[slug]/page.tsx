import ServiceDetailClient from "./ServiceDetailClient";
import { categories } from "@/data/servicesData";

export function generateStaticParams() {
  const params: { slug: string }[] = [];

  // Category pages: exterior, interior
  for (const cat of categories) {
    params.push({ slug: cat.key });

    // Subservice pages
    for (const sub of cat.subServices) {
      if (sub.slug) {
        params.push({ slug: sub.slug });
      }
    }
  }

  return params;
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ServiceDetailClient slug={slug} />;
}
