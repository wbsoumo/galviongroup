import HeroSection from "@/components/ui/hero-01-utils/hero";
import type { NavigationSection } from "@/components/ui/hero-01-utils/header";
import Header from "@/components/ui/hero-01-utils/header";
import BrandSlider, {
  BrandList,
} from "@/components/ui/hero-01-utils/brand-slider";
import type { AvatarList } from "@/components/ui/hero-01-utils/hero";
import ScrollRevealSection from "@/components/ui/scroll-reveal-section";
import HoverFooter from "@/components/ui/hover-footer";

export default function AgencyHeroSection() {
  const avatarList: AvatarList[] = [
    {
      image:
        "https://cdn.21st.dev/assets/localized/59a2b5a0dfc1531e2d1ea42d71ae8615f37582e1f8a17e4a1b1aff9afc7ef878.jpg",
    },
    {
      image:
        "https://cdn.21st.dev/assets/localized/c7097eeb66ad097b6e5f9dbb95ae857cd6b55c0ad398c1ea84f3ab90a02c631e.jpg",
    },
    {
      image:
        "https://cdn.21st.dev/assets/localized/c70d48e47d3a2d79ad07d16bff3aa3cff686580be031b6102cad73a15b47d8fd.jpg",
    },
    {
      image:
        "https://cdn.21st.dev/assets/localized/51c9ed392f6e7fce7fd85a78648e3e06bfdcd91999ab5fa48485888231589abf.jpg",
    },
  ];

  const navigationData: NavigationSection[] = [
    {
      title: "Home",
      href: "#",
      isActive: true,
    },
    {
      title: "About us",
      href: "#",
    },
    {
      title: "Services",
      href: "#",
    },
    {
      title: "Team",
      href: "#",
    },
    {
      title: "Pricing",
      href: "#",
    },
    {
      title: "Awards",
      href: "#",
    },
  ];

  const brandList: BrandList[] = [
    { name: "Stripe", country: "US" },
    { name: "Zerodha", country: "IN" },
    { name: "Plaid", country: "US" },
    { name: "Razorpay", country: "IN" },
    { name: "Ramp", country: "US" },
    { name: "CRED", country: "IN" },
    { name: "Brex", country: "US" },
    { name: "Groww", country: "IN" },
    { name: "Substack", country: "US" },
    { name: "Postman", country: "IN" },
  ];

  return (
    <div className="relative bg-neutral-950 min-h-screen">
      <Header navigationData={navigationData} />
      <main>
        <HeroSection avatarList={avatarList} />
        <BrandSlider brandList={brandList} />
        <ScrollRevealSection />
      </main>
      <HoverFooter />
    </div>
  );
}
