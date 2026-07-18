import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Droplets,
  Package,
  ShieldCheck,
  Truck,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Check,
  Star,
  Building2,
  UtensilsCrossed,
  Hotel,
  BadgeCheck,
} from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import { FaInstagram } from "react-icons/fa";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
// shadcn/ui
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export default function BottleBrandingLanding() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    city: "",
    phone: "",
    message: "",
  });

  const autoplay = (slider) => {
    let timeout;
  
    function clearNextTimeout() {
      clearTimeout(timeout);
    }
  
    function next() {
      clearNextTimeout();
  
      timeout = setTimeout(() => {
        slider.next();
      }, 5000);
    }
  
    slider.on("created", next);
  
    slider.on("dragStarted", clearNextTimeout);
  
    slider.on("animationEnded", next);
  
    slider.on("updated", next);
  
    slider.pauseAutoplay = () => {
      clearNextTimeout();
    };
  
    slider.resumeAutoplay = () => {
      next();
    };
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      mode: "snap",
  
      defaultAnimation: {
        duration: 1200,
      },
  
      slides: {
        perView: 4,
        spacing: 18,
      },
  
      breakpoints: {
        "(max-width: 1280px)": {
          slides: {
            perView: 3,
            spacing: 16,
          },
        },
  
        "(max-width: 1024px)": {
          slides: {
            perView: 2,
            spacing: 14,
          },
        },
  
        "(max-width: 640px)": {
          slides: {
            perView: 1,
            spacing: 12,
          },
        },
      },
  
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
    },
    [autoplay]
  );
  const [activeSize, setActiveSize] = useState("500");

  const sizes = useMemo(
    () => [
      {
        key: "500ml",
        title: "500 ml",
        desc: "Perfect for premium table service & minibar.",
        moq: "MOQ: 1,000 pcs",
      },
      {
        key: "1L",
        title: "1 L",
        desc: "Ideal for banquet halls & events.",
        moq: "MOQ: 500 pcs",
      },
    ],
    []
  );

  const testimonials = useMemo(
    () => [
      {
        name: "Operations Manager",
        org: "Boutique Hotel",
        text: "Clean branding, premium bottle finish, and timely delivery. Guests notice the difference.",
      },
      {
        name: "Restaurant Owner",
        org: "Fine Dining",
        text: "Their label quality is excellent and waterproof. The bottles look high-end on tables.",
      },
      {
        name: "Purchase Head",
        org: "Business Hotel",
        text: "Monthly supply is consistent. Great support and quick re-orders.",
      },
    ],
    []
  );

  const faqs = useMemo(
    () => [
      {
        q: "Do you provide bottles for hotels and restaurants only?",
        a: "Yes. We focus only on hospitality brands (hotels, resorts, restaurants, cafés, banquet halls).",
      },
      {
        q: "What is the minimum order quantity (MOQ)?",
        a: "MOQ depends on bottle size and branding method. Typically starts from 500–1,000 pcs.",
      },
      {
        q: "How long does production take?",
        a: "Standard turnaround is 7–15 working days after design approval. Express options may be available.",
      },
      {
        q: "Can you design the label for us?",
        a: "Yes. We provide label design support with your logo, theme colors, and compliance layout.",
      },
      {
        q: "Do you deliver to other cities?",
        a: "Yes. We deliver to multiple cities with secure packaging and reliable logistics partners.",
      },
    ],
    []
  );

  const onChange = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const onWhatsApp = () => {
    const text = `Hello, I want branded bottles for my hotel/restaurant.%0A%0AName: ${form.name}%0ABusiness: ${form.business}%0ACity: ${form.city}%0APhone: ${form.phone}%0ARequirement: ${form.message}`;
    
    const phone = "918485006020";
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-neutral-950 shadow-lg">
              <Droplets className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-wide">Droplets Ventures</p>
              <p className="text-xs text-white/60">Hotel & Restaurant Bottle Branding</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a className="hover:text-white" href="#services">
              Services
            </a>
            <a className="hover:text-white" href="#products">
              Bottles
            </a>
            <a className="hover:text-white" href="#process">
              Process
            </a>
            <a className="hover:text-white" href="#faq">
              FAQ
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="hidden rounded-2xl border-white/20 bg-transparent text-white hover:bg-white/10 md:flex"
              onClick={onWhatsApp}
            >
              <Phone className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
            <Button
              className="rounded-2xl bg-white text-neutral-950 hover:bg-white/90"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Get Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/80"
            >
              <Sparkles className="h-4 w-4" />
              Premium bottle packaging for your hotels and restaurants
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
            >
              Your Hotel Brand,
              <span className="text-white/70"> On Every Bottle</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
            >
              We supply premium branded bottles exclusively for hotels, resorts,
              restaurants, cafés, and banquet halls. High-quality finishing,
              waterproof labels, luxury presentation, and reliable multi-city
              delivery.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button
                className="h-12 rounded-2xl bg-white px-6 text-neutral-950 hover:bg-white/90"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Request Free Sample
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                className="h-12 rounded-2xl border-white/20 bg-transparent px-6 text-white hover:bg-white/10"
                onClick={() => {
                  document.getElementById("products")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                View Bottle Options
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {["Waterproof Labels", "Premium Finish", "Fast Delivery", "Bulk Supply"].map(
                (t) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/80"
                  >
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4" />
                      <span>{t}</span>
                    </div>
                  </div>
                )
              )}
            </motion.div>
          </div>

          {/* HERO CARD */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <Card className="overflow-hidden rounded-3xl border-white/10 bg-white/5 shadow-2xl">
              <CardContent className="p-0">
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent" />

                  <div className="p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm text-white/70">Exclusive for</p>
                        <h3 className="mt-1 text-2xl font-semibold bg-gradient-to-r from-[#B8E6FF] to-[#3B82F6] bg-clip-text text-transparent">Hospitality Brands</h3>
                        <p className="mt-2 text-sm text-white/70">
                          Hotels • Restaurants • Resorts • Banquet Halls
                        </p>
                      </div>
                      <Badge className="rounded-full bg-white text-neutral-950">
                        Premium
                      </Badge>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-3">
                      <div className="rounded-2xl border border-white/10 bg-neutral-950/40 p-4">
                        <div className="flex items-center gap-3">
                          <ShieldCheck className="h-5 w-5 text-white" />
                          <div>
                            <p className="text-sm font-medium">Tamper Seal Options</p>
                            <p className="text-xs text-white/60">
                              Secure packaging for premium guest trust
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-neutral-950/40 p-4">
                        <div className="flex items-center gap-3">
                          <Package className="h-5 w-5 text-white" />
                          <div>
                            <p className="text-sm font-medium">Custom Label Printing</p>
                            <p className="text-xs text-white/60">
                              Waterproof, scratch-resistant finishing
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-neutral-950/40 p-4">
                        <div className="flex items-center gap-3">
                          <Truck className="h-5 w-5 text-white" />
                          <div>
                            <p className="text-sm font-medium">Multi-City Delivery</p>
                            <p className="text-xs text-white/60">
                              Packed safely for transport & bulk orders
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-2">
                      <Badge className="rounded-full bg-white/10 text-white">Minibar</Badge>
                      <Badge className="rounded-full bg-white/10 text-white">Dining Table</Badge>
                      <Badge className="rounded-full bg-white/10 text-white">Events</Badge>
                      <Badge className="rounded-full bg-white/10 text-white">Banquets</Badge>
                    </div>

                    <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-white/60">Starting MOQ</p>
                          <p className="mt-1 text-xl font-semibold">500 pcs</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-white/60">Production Time</p>
                          <p className="mt-1 text-xl font-semibold">7–15 Days</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex gap-3">
                      <Button
                        className="h-11 flex-1 rounded-2xl bg-white text-neutral-950 hover:bg-white/90"
                        onClick={onWhatsApp}
                      >
                        WhatsApp Now
                      </Button>
                      <Button
                        variant="outline"
                        className="h-11 flex-1 rounded-2xl border-white/20 bg-transparent text-white hover:bg-white/10"
                        onClick={() => {
                          document.getElementById("services")?.scrollIntoView({
                            behavior: "smooth",
                          });
                        }}
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid grid-cols-2 gap-4 text-sm text-white/70 md:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-neutral-950/40 p-4">
              <div className="flex items-center gap-2">
                <Hotel className="h-4 w-4" />
                <p className="font-medium text-white">Hotels</p>
              </div>
              <p className="mt-2 text-xs">In-room bottles supply</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-neutral-950/40 p-4">
              <div className="flex items-center gap-2">
                <UtensilsCrossed className="h-4 w-4" />
                <p className="font-medium text-white">Restaurants</p>
              </div>
              <p className="mt-2 text-xs">Table service with premium branding</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-neutral-950/40 p-4">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                <p className="font-medium text-white">Banquets</p>
              </div>
              <p className="mt-2 text-xs">Bulk orders for events and halls</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-neutral-950/40 p-4">
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4" />
                <p className="font-medium text-white">Luxury Look</p>
              </div>
              <p className="mt-2 text-xs">Clean, premium bottle presentation</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/60">
                What We Do
              </p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
                Hospitality Bottle Branding Services
              </h2>
              <p className="mt-3 max-w-2xl text-white/70">
                From label design to bulk supply, we help hotels and restaurants
                create a premium guest experience with branded bottles.
              </p>
            </div>

            <Button
              variant="outline"
              className="rounded-2xl border-white/20 bg-transparent text-white hover:bg-white/10"
              onClick={onWhatsApp}
            >
              Get Price on WhatsApp
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Sparkles className="h-5 w-5" />,
                title: "Personal Branding",
                desc: "Your logo, theme, and hotel identity printed professionally for premium presentation.",
              },
              {
                icon: <ShieldCheck className="h-5 w-5" />,
                title: "Premium Label Quality",
                desc: "Waterproof labels with strong adhesive and clean finishing for long-lasting look.",
              },
              {
                icon: <Package className="h-5 w-5" />,
                title: "Bulk Packaging",
                desc: "Secure carton packing for safe transport and damage-free delivery.",
              },
              {
                icon: <Truck className="h-5 w-5" />,
                title: "Multi-City Delivery",
                desc: "Reliable dispatch for hotels and restaurants across different cities.",
              },
              {
                icon: <Droplets className="h-5 w-5" />,
                title: "Multiple Bottle Sizes",
                desc: "Choose from popular sizes used for dining, guest rooms, banquets, and events.",
              },
              {
                icon: <Star className="h-5 w-5" />,
                title: "Luxury Guest Experience",
                desc: "Upgrade your brand image with bottles that look clean, premium, and professional.",
              },
            ].map((s) => (
              <Card
                key={s.title}
                className="rounded-3xl border-white/10 bg-white/5"
              >
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-neutral-950">
                    {s.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold bg-gradient-to-r from-[#B8E6FF] to-[#3B82F6] bg-clip-text text-transparent">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {s.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/60">
                Bottle Options
              </p>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
                Choose Your Bottle Size
              </h2>
              <p className="mt-3 max-w-2xl text-white/70">
                Popular bottle sizes used in hotels and restaurants. We support
                custom branding and premium label finishing.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {sizes.map((s) => (
              <button
                key={s.key}
                onClick={() => setActiveSize(s.key)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  activeSize === s.key
                    ? "border-white bg-white text-neutral-950"
                    : "border-white/20 bg-transparent text-white/80 hover:bg-white/10"
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card className="rounded-3xl border-white/10 bg-neutral-950/40">
              <CardContent className="p-7">
                <p className="text-xs uppercase tracking-widest text-white/60">
                  Selected
                </p>
                <h3 className="mt-2 text-3xl font-semibold text-white">
                  {sizes.find((x) => x.key === activeSize)?.title}
                </h3>
                <p className="mt-2 text-white/70">
                  {sizes.find((x) => x.key === activeSize)?.desc}
                </p>
                <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                  {sizes.find((x) => x.key === activeSize)?.moq}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button
                    className="h-11 rounded-2xl bg-white text-neutral-950 hover:bg-white/90"
                    onClick={onWhatsApp}
                  >
                    Get Price
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="h-11 rounded-2xl border-white/20 bg-transparent text-white hover:bg-white/10"
                    onClick={() => {
                      document.getElementById("contact")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    Request Sample
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-white/10 bg-white/5">
              <CardContent className="p-7">
                <p className="text-xs uppercase tracking-widest text-white/60">
                  Included With Every Order
                </p>

                <div className="mt-4 space-y-3 text-sm text-white/80">
                  {[
                    "Logo-based label printing",
                    "Waterproof finishing",
                    "Secure carton packing",
                    "Tamper seal options",
                    "Multi-city delivery support",
                    "Reorder support & stock planning",
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white text-neutral-950">
                        <Check className="h-4 w-4" />
                      </div>
                      <p className="leading-relaxed">{t}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-neutral-950/40 p-4">
                  <p className="text-xs text-white/60">Best For</p>
                  <p className="mt-1 text-sm text-white/80">
                    Hotels, restaurants, resorts, banquet halls, cafés, and event
                    management.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/60">
              Simple Workflow
            </p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              From Design to Delivery
            </h2>
            <p className="mt-3 max-w-2xl text-white/70">
              We keep the process simple so hotels and restaurants can reorder
              anytime without delays.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Share Logo & Details",
                desc: "Send your logo, bottle size requirement, and quantity.",
              },
              {
                step: "02",
                title: "Design & Approval",
                desc: "We create a premium label mockup and finalize your branding.",
              },
              {
                step: "03",
                title: "Production",
                desc: "Printing + packaging with strict quality checks.",
              },
              {
                step: "04",
                title: "Delivery",
                desc: "Secure carton dispatch with multi-city logistics.",
              },
            ].map((p, index) => (
              <motion.div
    key={p.step}
    custom={index}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.25 }}
    className="h-full"
  >
    <Card className="h-full rounded-3xl border-white/10 bg-white/5">
      <CardContent className="flex h-full flex-col p-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-white/70">{p.step}</p>
          <div className="h-10 w-10 rounded-2xl bg-white/10" />
        </div>

        <h3 className="mt-4 bg-gradient-to-r from-[#B8E6FF] to-[#3B82F6] bg-clip-text text-lg font-semibold text-transparent">
          {p.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-white/70">
          {p.desc}
        </p>
      </CardContent>
    </Card>
  </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="pt-0.5 pb-5">
  <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-20">

    {/* Heading */}

    <div className="mb-14 text-center">

    <div className="mb-14 flex items-center justify-center">

  {/* Left Line */}
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-400/50 to-sky-400/50"></div>

  {/* Badge */}
  <div className="rounded-full border border-sky-400/30 bg-[#0B1220]/80 px-5 py-2 backdrop-blur-xl shadow-[0_0_12px_rgba(59,130,246,0.12)]">
    <span className="bg-gradient-to-r from-[#B8E6FF] to-[#3B82F6] bg-clip-text text-sm font-semibold tracking-wide text-transparent">
      Premium Collection
    </span>
  </div>

  {/* Right Line */}
  <div className="h-px flex-1 bg-gradient-to-l from-transparent via-sky-400/50 to-sky-400/50"></div>

</div>

      <h2 className="mt-5 text-4xl font-bold bg-gradient-to-r from-[#B8E6FF] to-[#3B82F6] bg-clip-text text-transparent">
        Our Sample Products
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/70">
        Every bottle is crafted with premium quality labels, elegant finishing,
        and customized branding to enhance the hospitality experience.
      </p>

    </div>

    {/* Slider */}

    <div className="relative">

      {/* Left Button */}

      <button
        onClick={() => {
          instanceRef.current?.pauseAutoplay();
          instanceRef.current?.prev();
        
          setTimeout(() => {
            instanceRef.current?.resumeAutoplay();
          }, 5000);
        }}
        className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-white/10 p-2 backdrop-blur-md transition hover:bg-sky-500"
      >
        <ChevronLeft className="h-5 w-5 text-white" />
      </button>

      <div
        ref={sliderRef}
        className="keen-slider px-2 sm:px-6 md:px-10"
      >

        {[
          {
            img: "/samples/newsample2.png",
            title: "Luxury Hotel Bottle",
            quote: "Designed for premium hospitality."
          },

          {
            img: "/samples/newsapmple6.png",
            title: "Restaurant Collection",
            quote: "Elegant branding for every table."
          },

          {
            img: "/samples/newsample1.png",
            title: "Corporate Branding",
            quote: "Your logo. Your identity."
          },

          {
            img: "/samples/newdesign.png",
            title: "Premium Packaging",
            quote: "Quality that guests notice."
          },

          {
            img: "/samples/newsample4.png",
            title: "Custom Labels",
            quote: "Luxury in every detail."
          }

        ].map((item, index) => (

          <div
            className={`keen-slider__slide ${
              currentSlide === index ? "active" : ""
            }`}
            key={index}
          >

<Card className="mx-auto max-w-[260px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-0">
  <img
    src={item.img}
    alt={`Sample ${index + 1}`}
    className="block h-[340px] w-full object-cover hover:scale-105 transition-transform duration-500"
  />
</Card>

          </div>

        ))}

      </div>

      {/* Right Button */}

      <button
        onClick={() => {
          instanceRef.current?.pauseAutoplay();
          instanceRef.current?.next();
        
          setTimeout(() => {
            instanceRef.current?.resumeAutoplay();
          }, 5000);
        }}
        className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-white/10 p-2 backdrop-blur-md transition hover:bg-sky-500"
      >
        <ChevronRight className="h-5 w-5 text-white" />
      </button>

    </div>
  </div>
</section>
<div className="relative my-20">
  <div className="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />

  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-400/30 bg-[#0B1220] px-5 py-2 backdrop-blur-xl">
    <span className="bg-gradient-to-r from-[#B8E6FF] to-[#3B82F6] bg-clip-text text-sm font-semibold text-transparent">
    Label Designs
    </span>
  </div>
</div>
<section className="pb-20">
  <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-20">

    {/* Heading */}
    <div className="mb-14 text-center">

     

      <h2 className="mt-5 text-4xl font-bold bg-gradient-to-r from-[#B8E6FF] to-[#3B82F6] bg-clip-text text-transparent">
        Choose Your Label Style
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/70">
        Select from our premium label designs or customize your own branding
        style for hotels, restaurants, resorts, and corporate events.
      </p>

    </div>


    {/* Label Cards */}

    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          img: "/labels/label1.jpeg",
          title: "Hotel Gavran Tadka"
        },
        {
          img: "/labels/label2.jpeg",
          title: "Hotel Chulangan"
        },
        {
          img: "/labels/labelnew.jpeg",
          title: "Hotel Tandav"
        },
        {
          img: "/labels/label4.jpg",
          title: "Custom Branding"
        },

      ].map((item,index)=>(

        <div key={index} className="group">

          {/* Card */}

          <div
  className="
    overflow-hidden
    rounded-3xl
    border border-white/10
    bg-white/5
    backdrop-blur-xl
    w-full
    max-w-[420px]
    h-[260px]
    sm:h-[300px]
    md:h-[340px]
  "
>
  <img
    src={item.img}
    alt={item.title}
    className="
      block
      w-full
      h-full
      object-cover
      rounded-3xl
    "
  />
</div>


          {/* Title */}

          <h3
            className="
            mt-5
            text-center
            text-lg
            font-medium
            tracking-wide
            bg-gradient-to-r
            from-[#B8E6FF]
            to-[#3B82F6]
            bg-clip-text
            text-transparent
            "
          >
            {item.title}
          </h3>


        </div>

      ))}

    </div>


  </div>
</section>
      

      {/* TESTIMONIALS */}
      <section className="border-y border-white/10 bg-white/5">
  <div className="mx-auto max-w-6xl px-4 py-16">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
    >
      <div>
        <p className="text-xs uppercase tracking-widest text-white/60">
          Trusted
        </p>

        <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
          Hospitality Clients Love the Finish
        </h2>

        <p className="mt-3 max-w-2xl text-white/70">
          Premium look, consistent supply, and fast response.
        </p>
      </div>
    </motion.div>

    {/* Testimonials */}
    <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
      {testimonials.map((t, index) => (
        <motion.div
          key={t.name}
          custom={index}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="h-full"
        >
          <Card className="h-full rounded-3xl border border-white/10 bg-neutral-950/40 transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/30">
            <CardContent className="flex h-full flex-col p-6">

              {/* Rating */}
              <div className="flex items-center gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-current"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-4 flex-1 text-sm leading-relaxed text-white/70">
                “{t.text}”
              </p>

              {/* User */}
              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="bg-gradient-to-r from-[#B8E6FF] to-[#3B82F6] bg-clip-text text-sm font-semibold text-transparent">
                  {t.name}
                </p>

                <p className="mt-1 text-xs text-white/60">
                  {t.org}
                </p>
              </div>

            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>

  </div>
</section>

      {/* FAQ */}
      <section id="faq">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/60">
              FAQ
            </p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              Common Questions
            </h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Everything hotels and restaurants ask before ordering.
            </p>
          </div>

          <div className="mt-10">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 mb-3"
                >
                  <AccordionTrigger className="text-left text-white hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-white/10">
  <div className="mx-auto max-w-6xl px-4 py-16">
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

      {/* LEFT SIDE */}
      <div>
        <p className="text-xs uppercase tracking-widest text-white/60">
          Contact
        </p>

        <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
          Request a Quote / Sample
        </h2>

        <p className="mt-3 max-w-xl text-white/70">
          Send your details and we will reply with bottle options, MOQ,
          pricing, and delivery timeline.
        </p>

        <div className="mt-8 space-y-4">

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-500 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/10 hover:shadow-[0_10px_25px_rgba(59,130,246,0.15)]">
              <Phone className="h-5 w-5 text-white transition-all duration-500 group-hover:scale-110 group-hover:text-sky-300" />

              <div>
                <p className="text-sm font-semibold">
                  Phone / WhatsApp
                </p>

                <p className="text-sm text-white/70">
                  +91 84850 06020
                </p>
              </div>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-500 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/10 hover:shadow-[0_10px_25px_rgba(59,130,246,0.15)]">
              <Mail className="h-5 w-5 text-white transition-all duration-500 group-hover:scale-110 group-hover:text-sky-300" />

              <div>
                <p className="text-sm font-semibold">
                  Email
                </p>

                <p className="text-sm text-white/70">
                  sales@DropletsVentures.com
                </p>
              </div>
            </div>
          </motion.div>

          {/* Service Area */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-500 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/10 hover:shadow-[0_10px_25px_rgba(59,130,246,0.15)]">
              <MapPin className="h-5 w-5 text-white transition-all duration-500 group-hover:scale-110 group-hover:text-sky-300" />

              <div>
                <p className="text-sm font-semibold">
                  Service Area
                </p>

                <p className="text-sm text-white/70">
                  Multi-city delivery available
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Fast Response Promise - Unchanged */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-neutral-950/40 p-6">
          <p className="text-sm font-semibold">
            Fast Response Promise
          </p>

          <p className="mt-2 text-sm text-white/70">
            We respond within <span className="text-white">2–6 hours</span>
            {" "}during business hours.
          </p>
        </div>

      </div>

      {/* RIGHT SIDE - EXACTLY SAME AS YOUR CODE */}
      <Card className="rounded-3xl border-white/10 bg-white/5">
        <CardContent className="p-6">

          <h3 className="text-xl font-semibold bg-gradient-to-r from-[#B8E6FF] to-[#3B82F6] bg-clip-text text-transparent">
            Send Inquiry
          </h3>

          <p className="mt-2 text-sm text-white/70">
            Share your bottle requirement and we will contact you.
          </p>

          {/* KEEP EVERYTHING BELOW EXACTLY AS YOU ALREADY HAVE */}

          <div className="mt-6 grid grid-cols-1 gap-4">

            <Input
              className="h-11 rounded-2xl border-white/15 bg-neutral-950/40 text-white placeholder:text-white/40"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => onChange("name", e.target.value)}
            />

            <Input
              className="h-11 rounded-2xl border-white/15 bg-neutral-950/40 text-white placeholder:text-white/40"
              placeholder="Hotel / Restaurant Name"
              value={form.business}
              onChange={(e) => onChange("business", e.target.value)}
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                className="h-11 rounded-2xl border-white/15 bg-neutral-950/40 text-white placeholder:text-white/40"
                placeholder="City"
                value={form.city}
                onChange={(e) => onChange("city", e.target.value)}
              />

              <Input
                className="h-11 rounded-2xl border-white/15 bg-neutral-950/40 text-white placeholder:text-white/40"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => onChange("phone", e.target.value)}
              />
            </div>

            <Textarea
              className="min-h-[120px] rounded-2xl border-white/15 bg-neutral-950/40 text-white placeholder:text-white/40"
              placeholder="Message (bottle size, quantity, delivery city, etc.)"
              value={form.message}
              onChange={(e) => onChange("message", e.target.value)}
            />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Button
                className="h-11 rounded-2xl bg-white text-neutral-950 hover:bg-white/90"
                onClick={onWhatsApp}
              >
                Send on WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                className="h-11 rounded-2xl border-white/20 bg-transparent text-white hover:bg-white/10"
                onClick={() => {
                  alert("Demo form only. Connect this to your backend or email service.");
                }}
              >
                Submit Form
              </Button>
            </div>

            <p className="text-xs text-white/50">
              By submitting, you agree to be contacted via call/WhatsApp.
            </p>

          </div>

        </CardContent>
      </Card>

    </div>
  </div>
</section>
   
      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white text-neutral-950">
                  <Droplets className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Droplets Ventures</p>
                  <p className="text-xs text-white/60">
                    Bottle Packaging & Branding
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/60 max-w-lg">
                Premium branded bottle packaging exclusively for hotels and
                restaurants. Multi-city delivery available.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
  {["Hotels", "Restaurants", "Banquets", "Resorts"].map((item, index) => (
    <motion.div
      key={item}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.7,
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Badge className="rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-white-500/20">
        {item}
      </Badge>
    </motion.div>
  ))}
</div>
          </div>
          
          <div className="mt-8 border-t border-white/10 pt-6">
  <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/50 md:flex-row">

    {/* Left */}
    <p>
      © {new Date().getFullYear()} Droplets Ventures. All rights reserved.
    </p>

    {/* Center */}
    <a
  href="https://instagram.com/droplets_ventures_csn"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center gap-2 transition-transform duration-300 hover:scale-105"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="h-5 w-5"
  >
    <defs>
      <linearGradient id="instagramGradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FEDA75" />
        <stop offset="25%" stopColor="#FA7E1E" />
        <stop offset="50%" stopColor="#D62976" />
        <stop offset="75%" stopColor="#962FBF" />
        <stop offset="100%" stopColor="#4F5BD5" />
      </linearGradient>
    </defs>

    <path
      fill="url(#instagramGradient)"
      d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5Zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4Zm8.75 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
    />
  </svg>

  <span className="bg-gradient-to-r from-[#FEDA75] via-[#D62976] to-[#4F5BD5] bg-clip-text font-semibold text-transparent">
  droplets_ventures_csn
  </span>
</a>

    {/* Right */}
    <p className="text-white/60">
  💎 Your Brand, Our Craft
</p>

  </div>
</div>
          
        </div>
      </footer>
    </div>
  );
}
