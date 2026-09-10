import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://uconnaminor.com", lastModified: new Date() },
    { url: "https://uconnaminor.com/about", lastModified: new Date() },
    { url: "https://uconnaminor.com/members", lastModified: new Date() },
    { url: "https://uconnaminor.com/repertoire", lastModified: new Date() },
    { url: "https://uconnaminor.com/alumni", lastModified: new Date() },
    { url: "https://uconnaminor.com/contact", lastModified: new Date() },
  ];
}
