import Link from "next/link";

export const metadata = {
  title: "About Unboxify — Digital Art Studio",
  description:
    "Unboxify fuses 3D Digital Design with immersive storytelling. Learn about our creative practice, sustainability commitments, and artist collaborations shaping the future of digital art.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="section-header">
          <span className="section-eyebrow">About Unboxify</span>
          <h1 className="section-title" id="vision">
            We craft immersive futures through premium 3D digital design.
          </h1>
          <p className="section-description">
            Unboxify is a creative studio and marketplace dedicated to elevating digital art beyond
            the screen. Our catalog blends cinematic lighting, procedural precision, and tactile
            detail to offer high-end visuals ready for new media environments, experiential retail,
            projection mapping, and interactive worlds.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-block glass-panel">
            <h2>Vision &amp; Ethos</h2>
            <p>
              The future of design is multi-dimensional. We merge DDD craftsmanship with strategic
              storytelling so brands, artists, and technologists can communicate in spatial, dynamic
              mediums. Every artwork is a narrative device waiting to be activated by your vision.
            </p>
          </div>
          <div className="about-block glass-panel" id="artists">
            <h2>Artist Collective</h2>
            <p>
              Our roster includes motion designers, digital sculptors, and realtime developers with
              backgrounds in fashion, architecture, and immersive theatre. We collaborate globally on
              commissioned works, limited drops, and large-scale installations.
            </p>
          </div>
          <div className="about-block glass-panel" id="sustainability">
            <h2>Sustainability</h2>
            <p>
              We offset rendering emissions via renewable energy programs and continuously optimize
              pipelines for efficient compute usage. All studio hardware is powered by 100% clean
              energy providers.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--compact">
        <div className="about-timeline glass-panel">
          <div>
            <span className="section-eyebrow">Creative Milestones</span>
            <h2 className="section-title">
              From speculative environments to global campaigns, we deliver material that feels alive.
            </h2>
          </div>
          <ul>
            <li>
              <strong>2021</strong>
              <p>Founded Unboxify in Berlin as a digital art lab experimenting with volumetric light.</p>
            </li>
            <li>
              <strong>2022</strong>
              <p>Launched our marketplace with instant downloads, supporting over 40 file formats.</p>
            </li>
            <li>
              <strong>2023</strong>
              <p>
                Partnered with XR studios for immersive concerts, creating custom 3D scenography and
                reactive visuals.
              </p>
            </li>
            <li>
              <strong>2024</strong>
              <p>
                Released the Unboxify Artist Fund, commissioning emerging 3D artists and expanding our
                sustainability initiatives.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section--compact">
        <div className="about-cta glass-panel">
          <div>
            <span className="section-eyebrow">Collaborate With Us</span>
            <h2 className="section-title">
              Need a custom environment, kinetic sculpture, or interactive art system?
            </h2>
            <p className="section-description">
              We collaborate with experiential agencies, cultural institutions, and luxury brands to
              design bespoke 3D art pipelines — from mood boards to full deployment.
            </p>
          </div>
          <Link href="/contact" className="hero__cta-primary">
            Start a Project
          </Link>
        </div>
      </section>
    </>
  );
}
