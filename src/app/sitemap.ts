import { MetadataRoute } from "next";
import { DIVISIONS } from "@/lib/data/divisions";
import { INSIGHTS_ARTICLES } from "@/lib/data/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.galviongroup.com";
  const currentDate = new Date().toISOString();

  // Core corporate routes
  const staticRoutes = [
    "",
    "/about",
    "/vision-mission",
    "/businesses",
    "/approach",
    "/careers",
    "/insights",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
    "/accessibility",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Division landing routes
  const divisionRoutes = DIVISIONS.map((div) => ({
    url: `${baseUrl}/${div.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Division service detail routes
  const serviceRoutes = DIVISIONS.flatMap((div) =>
    div.services.map((service) => ({
      url: `${baseUrl}/${div.slug}/${service.slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  // Insights editorial article routes
  const insightRoutes = INSIGHTS_ARTICLES.map((article) => ({
    url: `${baseUrl}/insights/${article.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...divisionRoutes, ...serviceRoutes, ...insightRoutes];
}
