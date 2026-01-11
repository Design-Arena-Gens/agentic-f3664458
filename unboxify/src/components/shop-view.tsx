"use client";

import { useMemo, useState } from "react";
import type { Artwork } from "@/data/artworks";
import { ProductCard } from "@/components/product-card";
import { motion, AnimatePresence } from "framer-motion";

type ShopViewProps = {
  artworks: Artwork[];
  categories: string[];
};

export const ShopView = ({ artworks, categories }: ShopViewProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedFormat, setSelectedFormat] = useState<string>("All");
  const [search, setSearch] = useState("");

  const formats = useMemo(
    () =>
      Array.from(
        new Set(
          artworks.flatMap((art) => art.formats.map((format) => format.fileType.toUpperCase())),
        ),
      ).sort(),
    [artworks],
  );

  const filteredArtworks = useMemo(() => {
    return artworks.filter((art) => {
      const matchesCategory = selectedCategory === "All" || art.category === selectedCategory;
      const matchesFormat =
        selectedFormat === "All" ||
        art.formats.some((format) => format.fileType.toUpperCase() === selectedFormat);
      const haystack = `${art.title} ${art.category} ${art.tags.join(" ")}`.toLowerCase();
      const matchesSearch = haystack.includes(search.toLowerCase());
      return matchesCategory && matchesFormat && matchesSearch;
    });
  }, [artworks, search, selectedCategory, selectedFormat]);

  return (
    <section className="section">
      <div className="section-header">
        <span className="section-eyebrow">Shop Digital Art</span>
        <h1 className="section-title">
          Download premium 3D digital art packages with instant delivery and flexible licensing.
        </h1>
        <p className="section-description">
          Filter by collection or format to find the visuals that align with your creative pipeline.
          Each product includes layered source files, realtime-ready assets, and cinematic exports.
        </p>
      </div>

      <div className="shop-controls glass-panel">
        <div className="shop-controls__group">
          <span>Category</span>
          <div className="shop-controls__pills">
            <button
              type="button"
              className={`shop-pill ${selectedCategory === "All" ? "is-active" : ""}`}
              onClick={() => setSelectedCategory("All")}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`shop-pill ${selectedCategory === category ? "is-active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="shop-controls__grid">
          <label className="shop-field">
            <span>Format</span>
            <select
              value={selectedFormat}
              onChange={(event) => setSelectedFormat(event.target.value)}
            >
              <option value="All">All Formats</option>
              {formats.map((format) => (
                <option key={format} value={format}>
                  {format}
                </option>
              ))}
            </select>
          </label>

          <label className="shop-field">
            <span>Search</span>
            <input
              type="search"
              placeholder="Keywords, tags, or titles"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>
        </div>
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div
          className="product-grid"
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {filteredArtworks.map((artwork) => (
            <motion.div key={artwork.slug} layout>
              <ProductCard artwork={artwork} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredArtworks.length === 0 && (
        <div className="shop-empty glass-panel">
          <h3>No artworks found.</h3>
          <p>Try broadening your filters or exploring a different category.</p>
        </div>
      )}
    </section>
  );
};
