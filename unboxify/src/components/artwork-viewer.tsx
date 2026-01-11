"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import type { Artwork } from "@/data/artworks";

type ArtworkViewerProps = {
  artwork: Artwork;
};

export const ArtworkViewer = ({ artwork }: ArtworkViewerProps) => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isZoomed, setIsZoomed] = useState(false);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y });
  };

  return (
    <div
      className="artwork-viewer"
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setIsZoomed(true)}
      onPointerLeave={() => setIsZoomed(false)}
    >
      <motion.div
        className="artwork-viewer__zoom"
        animate={{
          backgroundPosition: `${position.x}% ${position.y}%`,
          scale: isZoomed ? 1.04 : 1,
          opacity: isZoomed ? 1 : 0.12,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        style={{ backgroundImage: `url(${artwork.image})` }}
      />

      <Image
        src={artwork.image}
        alt={artwork.title}
        width={1200}
        height={1200}
        className="artwork-viewer__image"
        priority
      />

      <div className="artwork-viewer__meta">
        <span>{artwork.dimensions}</span>
        <span>{artwork.releaseDate}</span>
        <span>{artwork.license}</span>
      </div>
    </div>
  );
};
