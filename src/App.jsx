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

// shadcn/ui
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

  const [activeSize, setActiveSize] = useState("250ml");

  const sizes = useMemo(
    () => [
      {
        key: "250ml",
        title: "250 ml",
        desc: "Perfect for premium table service & minibar.",
        moq: "MOQ: 1,000 pcs",
      },
      {
        key: "500ml",
        title: "500 ml",
        desc: "Most popular for dining & guest rooms.",
        moq: "MOQ: 1,000 pcs",
      },
      {
        key: "750ml",
        title: "750 ml",
        desc: "Luxury presentation for fine dining.",
        moq: "MOQ: 500 pcs",
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
        q: "Do you supply PET bottles?",
        a: "No. We specialize in premium hospitality bottle packaging options for a luxury look and strong branding.",
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
              <p className="text-sm font-semibold tracking-wide">AquaSignature</p>
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
              Premium Bottle Packaging for Hospitality
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
                        <h3 className="mt-1 text-2xl font-semibold">Hospitality Brands</h3>
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
              <p className="mt-2 text-xs">In-room bottles & minibar supply</p>
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
                  <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
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
                <h3 className="mt-2 text-3xl font-semibold">
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
            ].map((p) => (
              <Card
                key={p.step}
                className="rounded-3xl border-white/10 bg-white/5"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-white/70">{p.step}</p>
                    <div className="h-10 w-10 rounded-2xl bg-white/10" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {p.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
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
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card
                key={t.name}
                className="rounded-3xl border-white/10 bg-neutral-950/40"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 text-white">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/70">
                    “{t.text}”
                  </p>
                  <div className="mt-5 border-t border-white/10 pt-4">
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-white/60">{t.org}</p>
                  </div>
                </CardContent>
              </Card>
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
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Phone className="h-5 w-5 text-white" />
                  <div>
                    <p className="text-sm font-semibold">Phone / WhatsApp</p>
                    <p className="text-sm text-white/70">+91 99999 99999</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Mail className="h-5 w-5 text-white" />
                  <div>
                    <p className="text-sm font-semibold">Email</p>
                    <p className="text-sm text-white/70">sales@aquasignature.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <MapPin className="h-5 w-5 text-white" />
                  <div>
                    <p className="text-sm font-semibold">Service Area</p>
                    <p className="text-sm text-white/70">Multi-city delivery available</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-3xl border border-white/10 bg-neutral-950/40 p-6">
                <p className="text-sm font-semibold">Fast Response Promise</p>
                <p className="mt-2 text-sm text-white/70">
                  We respond within <span className="text-white">2–6 hours</span>
                  during business hours.
                </p>
              </div>
            </div>

            <Card className="rounded-3xl border-white/10 bg-white/5">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">Send Inquiry</h3>
                <p className="mt-2 text-sm text-white/70">
                  Share your bottle requirement and we will contact you.
                </p>

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
                        alert(
                          "Demo form only. Connect this to your backend or email service." 
                        );
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
                  <p className="text-sm font-semibold">AquaSignature</p>
                  <p className="text-xs text-white/60">
                    Bottle Packaging & Branding for Hospitality
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/60 max-w-lg">
                Premium branded bottle packaging exclusively for hotels and
                restaurants. Multi-city delivery available.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge className="rounded-full bg-white/10 text-white">Hotels</Badge>
              <Badge className="rounded-full bg-white/10 text-white">Restaurants</Badge>
              <Badge className="rounded-full bg-white/10 text-white">Banquets</Badge>
              <Badge className="rounded-full bg-white/10 text-white">Resorts</Badge>
            </div>
          </div>

          <div className="mt-8 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
            <p>© {new Date().getFullYear()} AquaSignature. All rights reserved.</p>
            <p>Designed for Hospitality Bottle Branding Business</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
