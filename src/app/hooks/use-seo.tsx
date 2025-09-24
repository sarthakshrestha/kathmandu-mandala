"use client";
import { useEffect, useState } from "react";
import { seoService } from "@/api/services/seoService";

export function useSeo(page: string, token?: string) {
  const [seo, setSeo] = useState<any>(null);

  useEffect(() => {
    async function fetchSeo() {
      try {
        const res = await seoService.getSeo(page, token);
        setSeo(res.data);
      } catch (e) {
        console.error("Failed to fetch SEO data:", e);
      }
    }
    fetchSeo();
  }, [page, token]);

  useEffect(() => {
    if (!seo) return;
    if (seo.meta_title) document.title = seo.meta_title;

    const setMetaTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMetaTag("description", seo.meta_description || "");
    setMetaTag("keywords", seo.meta_keywords || "");

    if (seo.canonical_url) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", seo.canonical_url);
    }

    // Open Graph tags
    if (seo.og_title) setMetaTag("og:title", seo.og_title);
    if (seo.og_description) setMetaTag("og:description", seo.og_description);
    if (seo.og_image) setMetaTag("og:image", seo.og_image);

    // Twitter tags
    if (seo.twitter_title) setMetaTag("twitter:title", seo.twitter_title);
    if (seo.twitter_description)
      setMetaTag("twitter:description", seo.twitter_description);

    // JSON-LD structured data
    if (seo.json_ld) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement("script");
        (script as HTMLScriptElement).type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = seo.json_ld;
    }
  }, [seo]);

  return seo;
}
