import Link from 'next/link';

const footerLinks = [
  {
    title: 'Explore',
    links: [
      { label: 'Featured Art', href: '/#featured' },
      { label: 'New Arrivals', href: '/shop#new' },
      { label: 'Artist Collaborations', href: '/about#artists' },
    ],
  },
  {
    title: 'Unboxify',
    links: [
      { label: 'Our Story', href: '/about' },
      { label: 'Vision', href: '/about#vision' },
      { label: 'Sustainability', href: '/about#sustainability' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact', href: '/contact' },
      { label: 'Licensing', href: '/contact#licensing' },
      { label: 'FAQs', href: '/contact#faq' },
    ],
  },
];

export const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner glass-panel">
        <div className="site-footer__brand">
          <span className="gradient-pill">Unboxify</span>
          <h2>Elevating 3D digital art into immersive experiences.</h2>
          <p>
            Curated collections, instant downloads, and flexible licensing designed for studios,
            brands, and visionaries shaping the future of digital storytelling.
          </p>
        </div>

        <div className="site-footer__links">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <span className="site-footer__header">{section.title}</span>
              <ul>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} Unboxify. All rights reserved.</span>
        <div className="site-footer__bottom-links">
          <Link href="/contact#support">Support</Link>
          <Link href="/contact#licensing">Licensing</Link>
          <Link href="/contact#press">Press</Link>
        </div>
      </div>
    </footer>
  );
};
