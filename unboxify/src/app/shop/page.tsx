import { ShopView } from "@/components/shop-view";
import { artworks, categories } from "@/data/artworks";

export const metadata = {
  title: "Shop Digital Art — Unboxify",
  description:
    "Browse Unboxify’s curated catalog of premium 3D digital art. Download instantly in PNG, JPG, MP4, GLB, and more with licensing designed for studios and immersive storytellers.",
};

export default function ShopPage() {
  return <ShopView artworks={artworks} categories={categories} />;
}
