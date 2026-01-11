"use client";

import { useState, useTransition } from "react";
import type { Artwork } from "@/data/artworks";
import { motion } from "framer-motion";
import Link from "next/link";

type CheckoutFormProps = {
  artwork: Artwork;
};

type Receipt = {
  downloadLinks: {
    label: string;
    url: string;
    fileType: string;
  }[];
  license: string;
};

export const CheckoutForm = ({ artwork }: CheckoutFormProps) => {
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiry, setExpiry] = useState("");
  const [receipt, setReceipt] = useState<Receipt | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    startTransition(async () => {
      try {
        const response = await fetch("/api/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slug: artwork.slug, email }),
        });

        if (!response.ok) {
          throw new Error("Checkout failed");
        }

        const data: Receipt = await response.json();
        setReceipt(data);
        setCardNumber("");
        setCvv("");
        setExpiry("");
      } catch (err) {
        console.error(err);
        setError("Something went wrong. Please retry shortly.");
      }
    });
  };

  return (
    <motion.form
      className="checkout-form glass-panel glass-panel--strong"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <h2>Payment Details</h2>
      <p>
        Secure payment is encrypted end-to-end. Your download portal unlocks the moment payment is
        confirmed.
      </p>

      <label>
        <span>Email</span>
        <input
          type="email"
          required
          placeholder="you@agency.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>

      <label>
        <span>Card Number</span>
        <input
          type="text"
          required
          inputMode="numeric"
          maxLength={19}
          placeholder="xxxx xxxx xxxx xxxx"
          value={cardNumber}
          onChange={(event) => setCardNumber(event.target.value)}
        />
      </label>

      <div className="checkout-form__grid">
        <label>
          <span>Expiry</span>
          <input
            type="text"
            required
            placeholder="MM/YY"
            maxLength={5}
            value={expiry}
            onChange={(event) => setExpiry(event.target.value)}
          />
        </label>
        <label>
          <span>CVV</span>
          <input
            type="password"
            required
            maxLength={4}
            value={cvv}
            onChange={(event) => setCvv(event.target.value)}
            placeholder="•••"
          />
        </label>
      </div>

      <button type="submit" className="hero__cta-primary" disabled={isPending}>
        {isPending ? "Processing..." : `Pay ${artwork.currency} $${artwork.price}`}
      </button>

      <span className="checkout-form__disclaimer">
        By completing your purchase you agree to the{" "}
        <Link href="/contact#licensing">licensing terms</Link>.
      </span>

      {error && <span className="checkout-form__error">{error}</span>}

      {receipt && (
        <motion.div
          className="checkout-receipt glass-panel"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3>Download Portal</h3>
          <p>Your purchase is complete. Use the links below to download your files.</p>
          <ul>
            {receipt.downloadLinks.map((link) => (
              <li key={link.url}>
                <span>
                  {link.label} — {link.fileType}
                </span>
                <a href={link.url} download>
                  Download
                </a>
              </li>
            ))}
          </ul>
          <small>Licensed for: {receipt.license}</small>
        </motion.div>
      )}
    </motion.form>
  );
};
