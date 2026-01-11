"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeroCanvas } from "@/components/hero-canvas";
import { useRef } from "react";

export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end center"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const blur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(24px)"]);

  return (
    <section ref={heroRef} className="section hero">
      <div className="hero__grid">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="gradient-pill">Futuristic Digital Art</span>
          <h1 className="hero__title">
            Unleash <span className="neon-text">3D imagination</span> for visionary brands.
          </h1>
          <p className="hero__description">
            Unboxify curates premium digital sculptures, immersive environments, and animated loops
            meticulously crafted with 3D Digital Design. Download instantly, license globally, and
            power your immersive experiences in real time.
          </p>
          <div className="hero__cta">
            <Link href="/shop" className="hero__cta-primary">
              Explore Collections
            </Link>
            <Link href="/about" className="hero__cta-secondary">
              Our Creative Vision
            </Link>
          </div>
          <div className="hero__stats glass-panel">
            <div>
              <span>120+</span>
              <p>Curated digital artworks with 8K exports and motion loops.</p>
            </div>
            <div>
              <span>Realtime Ready</span>
              <p>Optimized packages for Unreal Engine, Unity, and Media Servers.</p>
            </div>
            <div>
              <span>Instant Delivery</span>
              <p>Secure downloads delivered the moment checkout completes.</p>
            </div>
          </div>
        </motion.div>

        <motion.div style={{ y: translateY, filter: blur }} className="hero__visual">
          <HeroCanvas />
          <motion.div
            className="hero__visual-glow"
            animate={{ opacity: [0.35, 0.6, 0.35] }}
            transition={{ repeat: Infinity, duration: 6 }}
          />
        </motion.div>
      </div>
    </section>
  );
};
