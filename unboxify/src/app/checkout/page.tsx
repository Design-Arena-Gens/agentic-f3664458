import { notFound } from "next/navigation";
import Link from "next/link";
import { artworks } from "@/data/artworks";
import { CheckoutForm } from "@/components/checkout-form";

type CheckoutPageProps = {
  searchParams: {
    slug?: string;
  };
};

export const metadata = {
  title: "Checkout — Unboxify",
  description:
    "Secure your digital art downloads instantly. Unboxify checkout delivers high-resolution stills, animations, and 3D files with clear licensing.",
};

export default function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const artwork = artworks.find((item) => item.slug === searchParams.slug) ?? artworks[0];

  if (!artwork) {
    notFound();
  }

  return (
    <section className="section">
      <div className="section-header">
        <span className="section-eyebrow">Secure Checkout</span>
        <h1 className="section-title">
          Complete your purchase and unlock instant downloads for {artwork.title}.
        </h1>
      </div>

      <div className="checkout-grid">
        <CheckoutForm artwork={artwork} />

        <aside className="checkout-summary glass-panel">
          <h2>Order Summary</h2>
          <div className="checkout-summary__meta">
            <span>{artwork.category}</span>
            <strong>{artwork.title}</strong>
            <p>{artwork.shortDescription}</p>
          </div>

          <div className="checkout-summary__price">
            <span>License</span>
            <strong>{artwork.license}</strong>
            <div>
              <span>Total</span>
              <span className="checkout-summary__total">
                {artwork.currency} ${artwork.price}
              </span>
            </div>
          </div>

          <div className="checkout-summary__formats">
            <span>Included Downloads</span>
            <ul>
              {artwork.formats.map((format) => (
                <li key={format.label}>
                  <span>{format.label}</span>
                  <span>
                    {format.fileType} · {format.size}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="checkout-summary__policies">
            <span>Policies</span>
            <p>
              All downloads are delivered instantly after payment. Licensing includes commercial and
              broadcast usage as defined in the product details. Read more in our{" "}
              <Link href="/contact#licensing">licensing guide</Link>.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
