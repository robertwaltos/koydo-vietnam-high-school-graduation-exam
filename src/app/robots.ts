import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/account/"] }],
    sitemap: "https://vietnam-high-school-graduation-exam.koydo.app/sitemap.xml",
    host: "https://vietnam-high-school-graduation-exam.koydo.app",
  };
}
