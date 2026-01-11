import { ContactForm } from "@/components/contact-form";
import Link from "next/link";
import { ShieldCheck, Sparkles, Download, LifeBuoy } from "lucide-react";

export const metadata = {
  title: "Contact Unboxify — Support & Licensing",
  description:
    "Get in touch with the Unboxify team for licensing, technical support, or bespoke 3D art commissions. We respond to all inquiries within 24 hours.",
};

const supportHighlights = [
  {
    icon: ShieldCheck,
    title: "Secure Checkout",
    description:
      "PCI-compliant payments, encrypted licenses, and instant delivery across our global CDN.",
  },
  {
    icon: Download,
    title: "Instant Downloads",
    description:
      "Receive access to PNG, JPG, MP4, GLB, NTB and engine-ready assets the moment purchase completes.",
  },
  {
    icon: LifeBuoy,
    title: "Priority Support",
    description:
      "24-hour response time for enterprise clients covering integrations, formats, and installations.",
  },
  {
    icon: Sparkles,
    title: "Custom Commissions",
    description:
      "Need bespoke scenography? Commission new art, motion loops, or realtime systems tailored to your brand.",
  },
];

const faqs = [
  {
    question: "Which formats do downloads include?",
    answer:
      "Every artwork includes high-resolution stills (PNG/JPG), motion loops (MP4/ProRes), and 3D scene files (GLB/FBX/NTB) where applicable. Product pages list the exact deliverables.",
  },
  {
    question: "How fast will I receive my files?",
    answer:
      "Instantly. Once checkout is complete, a secure download portal unlocks with all formats. You also receive a follow-up email with persistent access links.",
  },
  {
    question: "Do you offer exclusive licensing?",
    answer:
      "Yes. We provide exclusive usage terms for campaigns, exhibitions, and product launches. Share your project scope and we will curate or develop a bespoke solution.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="section">
        <div className="section-header">
          <span className="section-eyebrow" id="support">
            Contact &amp; Support
          </span>
          <h1 className="section-title">
            We build enduring partnerships with studios shaping the future of digital art.
          </h1>
          <p className="section-description">
            Whether you&apos;re licensing a single artwork or commissioning a multi-sensory
            installation, our team responds within 24 hours. Share your needs — we&apos;ll guide you
            through formats, licensing, and deployment.
          </p>
        </div>

        <div className="contact-grid">
          <ContactForm />

          <div className="contact-support">
            {supportHighlights.map((item) => (
              <div key={item.title} className="contact-support__card glass-panel">
                <item.icon size={28} strokeWidth={1.4} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--compact" id="licensing">
        <div className="licensing glass-panel">
          <div>
            <span className="section-eyebrow">Licensing Tiers</span>
            <h2 className="section-title">Flexible terms for agencies, brands, and immersive venues.</h2>
          </div>
          <div className="licensing__tiers">
            <div>
              <h3>Standard</h3>
              <p>Includes web, social, and internal presentations with non-exclusive usage rights.</p>
            </div>
            <div>
              <h3>Extended</h3>
              <p>
                Covers broadcast, ticketed experiences, and permanent installations with higher
                impression caps.
              </p>
            </div>
            <div>
              <h3>Enterprise</h3>
              <p>
                Bespoke exclusivity, perpetual rights, and white-label delivery for global campaigns.
                Contact us for a custom proposal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--compact" id="faq">
        <div className="faq glass-panel">
          <h2>FAQs</h2>
          <div className="faq__items">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="faq__cta">
            <span>Need something else?</span>
            <Link href="mailto:studio@unboxify.art">studio@unboxify.art</Link>
          </div>
        </div>
      </section>
    </>
  );
}
