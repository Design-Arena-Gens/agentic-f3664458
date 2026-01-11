import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { ProductCard } from "@/components/product-card";
import { artworks } from "@/data/artworks";

const featured = artworks.filter((art) => art.isFeatured);
const highlights = artworks.slice(0, 3);

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section id="featured" className="section">
        <div className="section-header">
          <span className="section-eyebrow">Featured Collections</span>
          <h2 className="section-title">
            Curated drops that merge cinematic motion, sculptural detail, and immersive atmospheres.
          </h2>
          <p className="section-description">
            Each release is crafted with 3D Digital Design workflows — from volumetric lighting to
            spectral shader pipelines — ensuring production-ready assets for campaigns, immersive
            environments, and experiential design.
          </p>
        </div>

        <div className="product-grid">
          {featured.map((artwork) => (
            <ProductCard key={artwork.slug} artwork={artwork} />
          ))}
        </div>

        <div className="section-cta">
          <span>Looking for something specific?</span>
          <Link href="/shop" className="section-cta__button">
            View the full shop
          </Link>
        </div>
      </section>

      <section className="section section--compact">
        <div className="experience-panel glass-panel glass-panel--strong">
          <div>
            <span className="section-eyebrow">Immersive Workflow</span>
            <h2 className="section-title">
              Built for creative studios that need instant, high-fidelity downloads.
            </h2>
          </div>
          <div className="experience-panel__grid">
            <div>
              <h3>Secure digital checkout</h3>
              <p>
                Encrypted transactions and license validation deliver your files to our content
                delivery network the moment payment clears — no waiting, no manual fulfillment.
              </p>
            </div>
            <div>
              <h3>Multi-format delivery</h3>
              <p>
                Access stills, motion loops, and 3D scene files in PNG, JPG, MP4, GLB, NTB, and more.
                Every download is optimized for both realtime engines and cinematic rendering.
              </p>
            </div>
            <div>
              <h3>Enterprise-ready licensing</h3>
              <p>
                Choose from standard or extended licenses with clear usage terms covering brand
                campaigns, installations, broadcast, and web distribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="highlighted-scenes">
        <div className="section-header">
          <span className="section-eyebrow" id="highlighted-scenes">
            Immersive Spotlights
          </span>
          <h2 className="section-title">
            Scenes engineered with volumetric depth, procedural detail, and neon-drenched atmospheres.
          </h2>
        </div>

        <div className="spotlight-grid">
          {highlights.map((artwork) => (
            <article
              key={artwork.slug}
              className="spotlight-card glass-panel"
              style={{ borderColor: `${artwork.accent}55` }}
            >
              <div className="spotlight-card__header">
                <span className="tag">{artwork.category}</span>
                <h3>{artwork.title}</h3>
              </div>
              <p>{artwork.description}</p>
              <ul>
                {artwork.sceneNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
              <div className="spotlight-card__footer">
                <span>{artwork.dimensions}</span>
                <Link href={`/artwork/${artwork.slug}`}>Inspect Artwork</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--compact">
        <div className="contact-banner glass-panel">
          <div>
            <span className="section-eyebrow">Contact &amp; Support</span>
            <h2 className="section-title">
              Need custom renders, licensing support, or enterprise procurement?
            </h2>
            <p className="section-description">
              Our artist concierge team assists with bespoke commissions, brand collaborations, and
              tailored download portals for agencies and studios.
            </p>
          </div>

          <div className="contact-banner__actions">
            <Link href="/contact" className="hero__cta-primary">
              Talk with our team
            </Link>
            <Link href="/about" className="hero__cta-secondary">
              Meet the creators
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
