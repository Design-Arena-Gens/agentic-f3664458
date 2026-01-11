import Link from "next/link";
import { notFound } from "next/navigation";
import { ArtworkViewer } from "@/components/artwork-viewer";
import { ProductCard } from "@/components/product-card";
import { artworks } from "@/data/artworks";

type ArtworkPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return artworks.map((art) => ({ slug: art.slug }));
}

export function generateMetadata({ params }: ArtworkPageProps) {
  const artwork = artworks.find((item) => item.slug === params.slug);
  if (!artwork) {
    return {
      title: "Artwork not found — Unboxify",
    };
  }

  return {
    title: `${artwork.title} — Unboxify Digital Art`,
    description: artwork.description,
  };
}

export default function ArtworkPage({ params }: ArtworkPageProps) {
  const artwork = artworks.find((item) => item.slug === params.slug);

  if (!artwork) {
    notFound();
  }

  const related = artworks
    .filter((item) => item.slug !== artwork.slug && item.category === artwork.category)
    .slice(0, 3);

  return (
    <>
      <section className="section artwork-hero">
        <div className="artwork-page__grid">
          <ArtworkViewer artwork={artwork} />

          <div className="artwork-page__details glass-panel glass-panel--strong">
            <div className="artwork-page__heading">
              <span className="tag">{artwork.category}</span>
              <h1>{artwork.title}</h1>
              <p>{artwork.description}</p>
            </div>

            <div className="artwork-page__pricing">
              <div>
                <span className="artwork-page__price">${artwork.price}</span>
                <span className="artwork-page__currency">{artwork.currency}</span>
              </div>
              <Link href={`/checkout?slug=${artwork.slug}`} className="hero__cta-primary">
                Buy &amp; Download
              </Link>
            </div>

            <div className="artwork-page__license">
              <span>License</span>
              <p>{artwork.license}</p>
            </div>

            <div className="artwork-page__formats">
              <span>Included Formats</span>
              <ul>
                {artwork.formats.map((format) => (
                  <li key={format.label}>
                    <div>
                      <strong>{format.label}</strong>
                      <span>{format.fileType} · {format.size}</span>
                    </div>
                    <Link href={`/checkout?slug=${artwork.slug}`}>Download via Checkout</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="artwork-page__notes">
              <span>Scene Highlights</span>
              <ul>
                {artwork.sceneNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>

            <div className="artwork-page__tags">
              {artwork.tags.map((tag) => (
                <span key={tag}>#{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {artwork.previewVideo && (
        <section className="section section--compact">
          <div className="artwork-preview glass-panel">
            <video
              src={artwork.previewVideo}
              controls
              preload="metadata"
              playsInline
              poster={artwork.image}
            />
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="section section--compact">
          <div className="section-header">
            <span className="section-eyebrow">Related Artworks</span>
            <h2 className="section-title">More from the {artwork.category} collection</h2>
          </div>
          <div className="product-grid">
            {related.map((item) => (
              <ProductCard key={item.slug} artwork={item} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
