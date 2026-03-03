"use client";

import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import TextAbout from '@/components/sections/about/TextAbout';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="compact"
      sizing="mediumSizeLargeTitles"
      background="floatingGradient"
      cardStyle="solid"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={[
            { name: "Shop", id: "products" },
            { name: "About", id: "about" },
            { name: "Features", id: "features" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Shop Now", href: "products" }}
          brandName="StyleHub"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="StyleHub"
          description="Discover curated fashion pieces that elevate your personal style with timeless elegance and contemporary flair"
          buttons={[
            { text: "Shop Collection", href: "products" },
            { text: "Learn More", href: "about" }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/full-length-view-laughing-woman-trench-coat_197531-19713.jpg"
          imageAlt="Fashion lifestyle background"
          showDimOverlay={true}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardThree
          title="New Collection"
          description="Explore our latest curated selection of premium clothing pieces designed for modern living"
          products={[
            {
              id: "1",              name: "Premium Cotton Shirt",              price: "$89.00",              imageSrc: "http://img.b2bpic.net/free-photo/attractive-handsome-stylish-indian-man-wear-shirt-holding-mobile-phone-standing-terrace-modern-lounge-cafe-his-work-break_627829-1320.jpg",              imageAlt: "Premium cotton shirt",              initialQuantity: 1
            },
            {
              id: "2",              name: "Elegant Evening Dress",              price: "$129.00",              imageSrc: "http://img.b2bpic.net/free-photo/cute-woman-fashion-model_1328-1126.jpg",              imageAlt: "Elegant evening dress",              initialQuantity: 1
            },
            {
              id: "3",              name: "Versatile Wool Jacket",              price: "$159.00",              imageSrc: "http://img.b2bpic.net/free-photo/young-woman-demonstrating-upper-cloths_1303-24480.jpg",              imageAlt: "Versatile wool jacket",              initialQuantity: 1
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          carouselMode="buttons"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwelve
          title="Why Choose StyleHub"
          description="We're committed to delivering exceptional quality and customer satisfaction"
          features={[
            {
              id: "quality",              label: "Quality",              title: "Premium Materials",              items: ["100% authentic fabrics", "Ethically sourced", "Superior craftsmanship", "Durability tested"]
            },
            {
              id: "service",              label: "Service",              title: "Customer First",              items: ["Fast free shipping", "30-day returns", "24/7 support", "Style guidance"]
            },
            {
              id: "design",              label: "Design",              title: "Trendsetting Styles",              items: ["Seasonal collections", "Designer collaborations", "Exclusive pieces", "Timeless classics"]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Fashion Lovers Worldwide"
          description="Join thousands of satisfied customers who love our collections"
          tag="Featured Partners"
          textboxLayout="default"
          useInvertedBackground={false}
          logos={[
            "http://img.b2bpic.net/free-vector/coffee-shop-logo-template_23-2150529082.jpg",            "http://img.b2bpic.net/free-vector/slow-fashion-badge-set_23-2148816027.jpg",            "http://img.b2bpic.net/free-vector/coffee-shop-logo-template_23-2150529082.jpg",            "http://img.b2bpic.net/free-vector/flat-design-outlet-stamp-collection_23-2149753026.jpg",            "http://img.b2bpic.net/free-vector/fashion-logo-template_23-2150529223.jpg",            "http://img.b2bpic.net/free-vector/slow-fashion-badge-set_23-2148816027.jpg",            "http://img.b2bpic.net/free-vector/flat-design-fashion-accessories-logo-set_23-2148888960.jpg",            "http://img.b2bpic.net/free-vector/flat-design-outlet-stamp-collection_23-2149753026.jpg"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          testimonials={[
            {
              id: "1",              name: "Sarah Johnson",              imageSrc: "http://img.b2bpic.net/free-photo/positive-confident-businesswoman-wearing-formal-suit-standing-with-arms-folded_74855-10328.jpg",              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",              name: "Michael Chen",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",              imageAlt: "Michael Chen"
            },
            {
              id: "3",              name: "Emma Rodriguez",              imageSrc: "http://img.b2bpic.net/free-photo/headshot-charismatic-pleasant-friendly-european-woman-short-chestnut-haircut-smiling-positive-feeling-happy-upbeat-enjoying-lifes-casually-talking-friends-amused-cheerful-standing-white-background_176420-34680.jpg",              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",              name: "David Kim",              imageSrc: "http://img.b2bpic.net/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-143272.jpg",              imageAlt: "David Kim"
            }
          ]}
          cardTitle="Over 50,000 customers love StyleHub for quality, style, and exceptional service"
          cardTag="Customer Reviews"
          cardAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="About Us"
          title="We believe everyone deserves to feel confident in what they wear. StyleHub curates premium fashion that celebrates individuality and timeless elegance."
          useInvertedBackground={false}
          buttons={[
            { text: "Explore Our Story", href: "#" }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          title="Stay Updated with New Collections"
          description="Subscribe to our newsletter and be the first to discover exclusive pieces, seasonal collections, and special offers from StyleHub."
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/cropped-shot-pleased-beautiful-female-model-dressed-fashionable-clothing-holds-modern-smart-phone-sits-front-opened-laptop-looks-joyfully-aside-people-rest-lifestyle-concept_273609-3033.jpg"
          imageAlt="Newsletter signup"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="StyleHub"
          leftLink={{ text: "Privacy Policy", href: "#" }}
          rightLink={{ text: "Terms of Service", href: "#" }}
        />
      </div>
    </ThemeProvider>
  );
}
