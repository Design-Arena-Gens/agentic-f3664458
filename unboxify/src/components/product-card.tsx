"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Artwork } from "@/data/artworks";
import { ArrowUpRight } from "lucide-react";

type ProductCardProps = {
  artwork: Artwork;
};

export const ProductCard = ({ artwork }: ProductCardProps) => {
  return (
    <motion.article
      className="product-card glass-panel"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      <div className="product-card__media">
        <Image
          src={artwork.image}
          alt={artwork.title}
          width={960}
          height={960}
          priority={artwork.isFeatured}
        />
        <span className="product-card__tag">{artwork.category}</span>
      </div>

      <div className="product-card__body">
        <h3>{artwork.title}</h3>
        <p>{artwork.shortDescription}</p>

        <div className="product-card__meta">
          <div>
            <span className="product-card__label">Formats</span>
            <span className="product-card__value">
              {artwork.formats.map((format) => format.fileType).join(" · ")}
            </span>
          </div>
          <div>
            <span className="product-card__label">License</span>
            <span className="product-card__value">{artwork.license}</span>
          </div>
        </div>

        <div className="product-card__footer">
          <div className="product-card__price">
            <span>{artwork.currency}</span>
            <strong>${artwork.price}</strong>
          </div>
          <Link href={`/artwork/${artwork.slug}`} className="product-card__cta">
            <span>View Details</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};
