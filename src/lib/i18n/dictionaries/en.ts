import type { Dictionary } from "../types";

const en: Dictionary = {
  meta: {
    titleSuffix: "Habitar Construction",
    defaultDescription:
      "Habitar Construction — general contractor specializing in project management, turnkey construction, and residential & commercial renovation.",
  },
  nav: {
    home: "Home",
    services: "Services",
    projects: "Projects",
    about: "About",
    contact: "Contact",
    getQuote: "Free Quote",
  },
  footer: {
    tagline:
      "A trusted general contractor for your residential and commercial projects, from the first blueprint to the final key.",
    ctaTitle: "Questions about your project? Let's talk.",
    servicesTitle: "Services",
    companyTitle: "Company",
    contactTitle: "Contact",
    hours: "Business Hours",
    hoursValue: "Mon – Fri: 7:00 AM – 5:00 PM",
    rights: "All rights reserved.",
  },
  common: {
    phone: "(514) 000-0000",
    email: "info@habitarconstruction.com",
    region: "Greater Montreal Area",
    addressLine: "1234 Construction St, Montreal, QC",
    ctaPrimary: "Request a Free Quote",
    ctaSecondary: "View Our Projects",
    readMore: "Learn More",
    viewAll: "View All Services",
    rbqLicense: "RBQ License: 57631392",
  },
  home: {
    heroEyebrow: "General Contractor — Residential & Commercial",
    heroTitle: "Your project, built",
    heroHighlight: "without compromise.",
    heroSubtitle:
      "Habitar Construction manages your construction and renovation projects from A to Z: planning, permits, trades, and turnkey delivery.",
    heroCtaPrimary: "Request a Free Quote",
    heroCtaSecondary: "Explore Our Services",
    heroTrust: "RBQ License 57631392 · Insured · Guaranteed",
    trustBadges: [
      "RBQ License 57631392",
      "Liability Insured",
      "GCR Warranty",
      "APCHQ Member",
      "15 Years of Experience",
      "Free Quote",
    ],
    stats: [
      { value: "15+", label: "years of experience" },
      { value: "120+", label: "projects completed" },
      { value: "98%", label: "satisfied clients" },
      { value: "100%", label: "licensed & insured" },
    ],
    servicesEyebrow: "What We Offer",
    servicesTitle: "Complete services, one dedicated team",
    servicesSubtitle:
      "From project management to turnkey construction, we coordinate every step so you don't have to.",
    whyEyebrow: "Why Habitar",
    whyTitle: "A reliable partner from groundbreaking to the final key",
    whySubtitle:
      "We combine hands-on expertise with rigorous project management to deliver on time and on budget.",
    whyItems: [
      {
        title: "Transparent Management",
        description:
          "Clear timelines, detailed budgets, and constant communication at every stage of the project.",
      },
      {
        title: "Skilled Team",
        description:
          "A network of specialized, licensed trades supervised directly by our own team.",
      },
      {
        title: "Guaranteed Quality",
        description:
          "Rigorous construction standards and a workmanship warranty for your peace of mind.",
      },
      {
        title: "On-Time Delivery",
        description:
          "Tight planning that minimizes delays and surprises, from start to finish.",
      },
    ],
    processEyebrow: "Our Approach",
    processTitle: "A simple, four-step process",
    processSteps: [
      {
        title: "Consultation",
        description: "We discuss your vision, needs, and budget.",
      },
      {
        title: "Planning",
        description: "Plans, permits, and a timeline are prepared before the first hammer swings.",
      },
      {
        title: "Construction",
        description: "Our teams carry out the work with regular progress updates.",
      },
      {
        title: "Handover",
        description: "Final inspection and key handover for a project delivered as promised.",
      },
    ],
    featuredEyebrow: "Recent Work",
    featuredTitle: "A glimpse of our craftsmanship",
    featuredSubtitle:
      "Every project reflects our commitment to quality and attention to detail.",
    featuredCta: "View all our projects",
    testimonialsEyebrow: "Testimonials",
    testimonialsTitle: "What our clients say",
    testimonials: [
      {
        quote:
          "Habitar managed our extension from start to finish without any stress. Impeccable communication.",
        name: "Marie-Claude Tremblay",
        role: "Residential project, Laval",
      },
      {
        quote:
          "A professional team that respects deadlines and budget. We recommend them without hesitation.",
        name: "Simon Bérubé",
        role: "Commercial renovation, Montreal",
      },
      {
        quote:
          "From design to delivery, everything was handled with rigor. The result exceeded our expectations.",
        name: "Josée Lamontagne",
        role: "New construction, Longueuil",
      },
    ],
    ctaTitle: "Ready to start your project?",
    ctaSubtitle:
      "Get a free, no-obligation quote. Our team responds within 24 hours.",
  },
  services: {
    heroEyebrow: "Our Services",
    heroTitle: "A general contractor for every stage of your project",
    heroSubtitle:
      "Whether building, expanding, or renovating, Habitar Construction coordinates every trade under one roof.",
    list: [
      {
        title: "Project Management",
        description:
          "We orchestrate every aspect of your project — budget, timeline, permits, and subcontractors — for flawless execution.",
        points: [
          "Detailed planning and estimating",
          "Municipal permit acquisition",
          "Trade coordination",
          "Budget tracking and regular reporting",
        ],
        imageId: "photo-1503387762-592deb58ef4e",
      },
      {
        title: "Turnkey Construction",
        description:
          "From design to key handover, we manage your entire new-construction project.",
        points: [
          "New residential construction",
          "Extensions and additional stories",
          "Commercial buildings",
          "One single point of contact from start to finish",
        ],
        imageId: "photo-1541888946425-d81bb19240f5",
      },
      {
        title: "Residential & Commercial Renovation",
        description:
          "We transform your existing spaces with attention to detail and careful execution.",
        points: [
          "Kitchens, bathrooms, and basements",
          "Major renovations and full transformations",
          "Commercial space build-outs",
          "Code upgrades and energy efficiency",
        ],
        imageId: "photo-1600607687939-ce8a6c25118c",
      },
    ],
    ctaTitle: "Have a project in mind?",
    ctaSubtitle:
      "Let's talk. We'll assess your project and propose a solution that fits your budget.",
  },
  projects: {
    heroEyebrow: "Our Work",
    heroTitle: "Projects delivered with rigor and precision",
    heroSubtitle:
      "A look at our recent work in new construction, renovation, and project management.",
    filterAll: "All",
    items: [
      {
        title: "Contemporary Family Home",
        category: "New Construction",
        location: "Laval, QC",
        description:
          "Turnkey construction of a 2,800 sq. ft. home, from groundbreaking to key handover.",
        imageId: "photo-1600566753190-17f0baa2a6c3",
      },
      {
        title: "Kitchen & Dining Renovation",
        category: "Residential Renovation",
        location: "Montreal, QC",
        description:
          "Complete redesign of an open-concept kitchen with a center island and enlarged windows.",
        imageId: "photo-1556911220-bff31c812dba",
      },
      {
        title: "Corporate Office Build-Out",
        category: "Commercial Construction",
        location: "Brossard, QC",
        description:
          "Turnkey build-out of 6,000 sq. ft. of office space for a technology company.",
        imageId: "photo-1487958449943-2429e8be8625",
      },
      {
        title: "Extension & Finished Basement",
        category: "Residential Renovation",
        location: "Longueuil, QC",
        description:
          "Rear extension addition and complete basement build-out into a family living space.",
        imageId: "photo-1600566753086-00f18fb6b3ea",
      },
      {
        title: "Multi-Tenant Commercial Space",
        category: "Commercial Construction",
        location: "Terrebonne, QC",
        description:
          "Full project management for the construction of a three-unit commercial building.",
        imageId: "photo-1504307651254-35680f356dfd",
      },
      {
        title: "Primary Bathroom Renovation",
        category: "Residential Renovation",
        location: "Repentigny, QC",
        description:
          "Complete transformation of a primary bathroom with a custom shower and heated flooring.",
        imageId: "photo-1604709177225-055f99402ea3",
      },
    ],
    ctaTitle: "Your project could be next",
    ctaSubtitle: "Let's discuss your vision and see how we can bring it to life.",
  },
  about: {
    heroEyebrow: "About Us",
    heroTitle: "Building trust, one project at a time",
    heroSubtitle:
      "Habitar Construction is a general contracting company committed to quality, transparency, and keeping our word.",
    storyTitle: "Our Story",
    storyParagraphs: [
      "Habitar Construction was founded with a simple mission: to give homeowners and businesses a construction partner they can genuinely trust.",
      "Over the years, our team has built its reputation on disciplined project management, quality execution, and honest communication at every stage.",
      "Today, we support residential and commercial clients across the Greater Montreal Area, from the first sketch to the final key handover.",
    ],
    valuesTitle: "Our Values",
    values: [
      {
        title: "Integrity",
        description: "Honest estimates and commitments we always keep.",
      },
      {
        title: "Quality",
        description: "High standards at every step, with no shortcuts on materials or workmanship.",
      },
      {
        title: "Transparency",
        description: "Clear visibility into your project's timeline, budget, and progress.",
      },
      {
        title: "Commitment",
        description: "We treat every project, large or small, with the same rigor.",
      },
    ],
    statsTitle: "Habitar by the Numbers",
    stats: [
      { value: "15+", label: "years of experience" },
      { value: "120+", label: "projects completed" },
      { value: "40+", label: "partners and subcontractors" },
      { value: "98%", label: "client satisfaction rate" },
    ],
    ctaTitle: "Want to work with us?",
    ctaSubtitle: "Contact our team to discuss your next project.",
  },
  contact: {
    heroEyebrow: "Contact Us",
    heroTitle: "Let's talk about your project",
    heroSubtitle:
      "Fill out the form below or contact us directly. We respond to every request within 24 hours.",
    formTitle: "Request a Quote",
    formFields: {
      name: "Full Name",
      email: "Email",
      phone: "Phone",
      projectType: "Project Type",
      message: "Describe your project",
      submit: "Send Request",
      submitting: "Sending...",
      success: "Thank you! Your request has been sent. We'll be in touch shortly.",
    },
    projectTypes: [
      "New Residential Construction",
      "Residential Renovation",
      "Commercial Construction",
      "Project Management",
      "Other",
    ],
    infoTitle: "Contact Information",
    infoPhone: "Phone",
    infoEmail: "Email",
    infoRegion: "Service Area",
    infoHours: "Business Hours",
  },
};

export default en;
