import type { Dictionary } from "../types";

/**
 * English mirror of fr.ts. Same rule applies: nothing is claimed here that
 * cannot be verified, and the words "general contractor" do not appear until
 * the Régie has issued that licence.
 */
const en: Dictionary = {
  meta: {
    titleSuffix: "Habitar Construction",
    defaultDescription:
      "Habitar Construction — building contractor serving Greater Montreal. Excavation, concrete, framing, roofing, cladding, doors and windows, cabinetry and finishing under one RBQ licence. Modular homes.",
  },
  nav: {
    home: "Home",
    services: "Services",
    modular: "Modular homes",
    projects: "Our work",
    about: "About",
    contact: "Contact",
    getQuote: "Free estimate",
  },
  footer: {
    tagline:
      "One licensed contractor for the site work, the structure, the envelope and the finishing of your project.",
    ctaTitle: "Questions about your project? Let's talk.",
    servicesTitle: "Services",
    companyTitle: "Company",
    contactTitle: "Contact",
    hours: "Business hours",
    hoursValue: "Mon – Fri: 7:00 AM – 5:00 PM",
    rights: "All rights reserved.",
  },
  common: {
    phone: "(514) 655-2458",
    email: "habitar.construction@gmail.com",
    region: "Greater Montreal and surrounding areas",
    addressLine: "7146 Pie-IX Blvd, Montreal, Quebec H2A 2G4",
    ctaPrimary: "Request an estimate",
    ctaSecondary: "See our services",
    readMore: "Learn more",
    viewAll: "View all services",
    rbqLicense: "RBQ licence: 5763-1392-01",
  },
  home: {
    heroEyebrow: "Building contractor — Greater Montreal",
    heroTitle: "From the ground up",
    heroHighlight: "to the last coat.",
    heroSubtitle:
      "Our RBQ licence covers fourteen subcategories: excavation, concrete, framing, masonry, roofing, exterior cladding, doors and windows, cabinetry and finishing. Fewer contractors on your site, and one person answering for all of it.",
    heroCtaPrimary: "Request a free estimate",
    heroCtaSecondary: "What our licence covers",
    heroTrust: "RBQ licence 5763-1392-01 · 14 authorized subcategories",
    trustBadges: [
      "RBQ licence 5763-1392-01",
      "14 authorized subcategories",
      "Excavation and earthwork",
      "Wood framing",
      "Roofing and exterior cladding",
      "Doors and windows",
      "Cabinets and countertops",
      "Modular homes",
      "Recommended by word of mouth",
      "Free estimate",
    ],
    badgeValue: "14",
    badgeLabel: "subcategories authorized on our licence",
    stats: [
      { value: "Site", label: "excavation, earthwork and site preparation" },
      { value: "Structure", label: "small concrete works and wood framing" },
      { value: "Envelope", label: "insulation, roofing, cladding, doors and windows" },
      { value: "Finishing", label: "ceramic, marble, cabinets, countertops and finishing" },
    ],
    servicesEyebrow: "What we do",
    servicesTitle: "Six areas, one licence",
    servicesSubtitle:
      "Minor and major renovation, new construction, envelope, site work, modular homes and project management — under the same licence number.",
    whyEyebrow: "Why Habitar",
    whyTitle: "Fewer hands, fewer grey areas",
    whySubtitle:
      "Most jobs go wrong at the seams: between the excavator and the concrete crew, between the roofer and the finisher. When both sides of a seam belong to the same contractor, the seam stops being your problem.",
    whyItems: [
      {
        title: "A broad licence",
        description:
          "Fourteen subcategories, from earthwork to cabinetry. The number is public — look it up in the Régie du bâtiment register before you even call us.",
      },
      {
        title: "One person accountable",
        description:
          "You don't referee between trades, and you don't explain your project to three different people. The owner is on site and answers personally for the schedule, the budget and the quality, from the first shovel to the last touch-up.",
      },
      {
        title: "A written price",
        description:
          "A firm estimate, broken down line by line, stating what is included and what is not. Any addition goes through a signed change order before the work starts — never discovered on the final invoice.",
      },
      {
        title: "A budget tracked daily",
        description:
          "Every hour worked and every purchase is recorded against your project. When you ask where the budget stands, the answer already exists.",
      },
    ],
    processEyebrow: "How we work",
    processTitle: "Four steps, no surprises",
    processSteps: [
      {
        title: "Site visit",
        description:
          "We walk the space, listen to what you want, and note what has to be done. Free, with no commitment.",
      },
      {
        title: "Estimate",
        description:
          "A firm price, broken down by line item. You see what's included, what isn't, and the proposed schedule.",
      },
      {
        title: "Construction",
        description:
          "Work proceeds on the agreed schedule. If something unexpected comes up, you hear about it that day — not at the end.",
      },
      {
        title: "Handover",
        description:
          "A walkthrough with you, corrections where needed, then the final invoice — matching the estimate and any signed change orders.",
      },
    ],
    featuredEyebrow: "Our work",
    featuredTitle: "Recent projects",
    featuredSubtitle: "A look at the projects we've delivered.",
    featuredCta: "See all our work",
    testimonialsEyebrow: "Testimonials",
    testimonialsTitle: "What our clients say",
    // Intentionally empty. The section stays hidden until a real client has
    // agreed to be quoted and named.
    testimonials: [],
    ctaTitle: "Ready to start your project?",
    ctaSubtitle:
      "Get a free, no-obligation estimate. We answer every request within 24 hours.",
  },
  services: {
    heroEyebrow: "Our services",
    heroTitle: "From bare ground to the last coat of paint",
    heroSubtitle:
      "Minor and major renovation, structure and envelope on new builds, site work, modular homes and project management — fourteen RBQ subcategories under a single licence number.",
    list: [
      {
        title: "Residential renovation — minor and major",
        description:
          "From a single bathroom to rebuilding the entire interior of a house. Demolition, reconfiguring the layout, new interior framing, envelope, finishing: the licence covers every trade a major renovation calls for.",
        points: [
          "Kitchens, bathrooms and basements",
          "Full reconfiguration, demolition and interior rebuild",
          "Ceramic, marble, factory-made cabinets and countertops",
          "Doors, windows and finishing work",
        ],
        imageId: "photo-1600607687939-ce8a6c25118c",
      },
      {
        title: "New construction — structure and envelope",
        description:
          "On a new building we handle the ground, the foundation, the framing and the full envelope — the shell, closed and weathertight. We work for owners, developers and general contractors.",
        points: [
          "Excavation, earthwork and foundation",
          "Wood framing and metalwork",
          "Insulation, weatherproofing, roofing and exterior cladding",
          "Doors, windows and interior finishing",
        ],
        imageId: "photo-1541888946425-d81bb19240f5",
      },
      {
        title: "Building envelope",
        description:
          "Everything standing between the interior and the Quebec climate. Roofing, insulation, weatherproofing and cladding fall under a single subcategory of our licence — the one that decides the heating bill and how long the building lasts.",
        points: [
          "Roofing and weatherproofing",
          "Insulation and air barriers",
          "Exterior cladding",
          "Door and window replacement",
        ],
        imageId: "photo-1600585154340-be6161a56a0c",
      },
      {
        title: "Site work and foundation",
        description:
          "The ground before the building: digging, grading, draining, then pouring the footings, slab or light foundation that will carry the structure.",
        points: [
          "Excavation, earthwork and site preparation",
          "Small concrete works — slabs, footings, light foundations",
          "Grading and drainage",
          "Metalwork",
        ],
        imageId: "photo-1504307651254-35680f356dfd",
      },
      {
        title: "Modular homes",
        description:
          "The house comes out of a factory. The site, the foundation, the assembly, the sealing and the finishing happen here — and that is exactly what our licence covers, including the prefabricated installation subcategory.",
        points: [
          "Site preparation and foundation",
          "Module placement and anchoring",
          "Sealing the envelope and roof",
          "Interior finishing and connections",
        ],
        imageId: "photo-1600566753190-17f0baa2a6c3",
      },
      {
        title: "Project management",
        description:
          "A job site is ten trades that have to arrive in the right order. We build the budget, set the schedule, coordinate the trades and track progress — while you keep your own contract with each contractor.",
        points: [
          "Estimating and a line-by-line budget",
          "Schedule and trade sequencing",
          "Site coordination and progress reporting",
          "Cost control: every hour and every purchase on file",
        ],
        imageId: "photo-1503387762-592deb58ef4e",
      },
    ],
    ctaTitle: "Have a project in mind?",
    ctaSubtitle:
      "Let's talk. We'll assess your project and propose a solution that fits your budget.",
  },
  modular: {
    heroEyebrow: "Modular construction",
    heroTitle: "The house is built in a factory. The site is ours.",
    heroSubtitle:
      "A modular home is built indoors, away from the weather, then delivered to your lot in sections. Everything that happens afterwards on site — the ground, the foundation, the assembly, the sealing, the finishing — falls under subcategories we already hold.",
    introTitle: "How it works",
    introParagraphs: [
      "Modular is not a mobile home. These are complete sections of a house — walls, floors, roof, insulation, sometimes even cabinets and tile — built in a plant to the Quebec Construction Code, then transported and assembled on a permanent foundation.",
      "The factory does what a factory does better than a job site: work dry, under constant light, with jigs and a quality check at every station. The result is a more consistent envelope and a schedule that no longer depends on rain or frost.",
      "But a modular home does not set itself down. It needs prepared ground, a foundation accurate to the millimetre, a crane, a watertight assembly, then all the finishing on site. That is where we come in, and it is precisely what our licence covers.",
    ],
    galleryTitle: "What it looks like",
    gallerySubtitle:
      "Today's prefab is nothing like the catalogue bungalow: large openings, flat or low-slope roofs, wood and metal cladding.",
    galleryNote:
      "Illustrative images showing the style of contemporary modular construction. These are not projects built by Habitar Construction.",
    gallery: [
      { caption: "Simple volume, wood cladding", imageId: "photo-1600566753190-17f0baa2a6c3" },
      { caption: "Large openings and a low-slope roof", imageId: "photo-1600585154340-be6161a56a0c" },
      { caption: "Sections assembled on a foundation", imageId: "photo-1541888946425-d81bb19240f5" },
      { caption: "Open interior finishing", imageId: "photo-1600566753086-00f18fb6b3ea" },
    ],
    stepsEyebrow: "Our role",
    stepsTitle: "What we do on site",
    stepsSubtitle:
      "The factory delivers the modules. The five steps below happen on your lot, and each one matches a subcategory listed on our licence.",
    steps: [
      {
        title: "The ground",
        description:
          "Excavation, grading and site preparation. Delivering a module requires access for a long truck and a crane: that gets planned before anyone digs.",
      },
      {
        title: "The foundation",
        description:
          "Footings, slab or light foundation poured to the factory's exact dimensions. A modular home does not forgive approximation — the modules have to land to the millimetre.",
      },
      {
        title: "The assembly",
        description:
          "Sections craned into place, anchored, floors and walls joined. This is the day the house appears.",
      },
      {
        title: "The sealing",
        description:
          "Joints between modules are insulated and made airtight and watertight, then the roof and exterior cladding are completed. This step decides how the house performs for the next thirty years.",
      },
      {
        title: "The finishing",
        description:
          "Interior connections, tile, cabinets, countertops and touch-ups. Reserved trades — plumbing, electrical, ventilation — are carried out by contractors licensed in their own specialty.",
      },
    ],
    advantagesEyebrow: "Why modular",
    advantagesTitle: "What it changes for you",
    advantages: [
      {
        title: "A shorter schedule",
        description:
          "The factory builds the house while we prepare the ground and the foundation. The two run in parallel instead of one after the other.",
      },
      {
        title: "Less weather risk",
        description:
          "The structure and insulation are never exposed to rain or frost before being closed in. In Quebec, that exposure is what costs the most in rework.",
      },
      {
        title: "A price known earlier",
        description:
          "A large share of the cost is fixed at the plant, on quote. What stays variable is the site — and the site is the part we price.",
      },
      {
        title: "Measured quality",
        description:
          "Every module passes factory inspections before shipping, under the standards applicable in Quebec.",
      },
    ],
    ctaTitle: "Have a lot and a modular project in mind?",
    ctaSubtitle:
      "Let's talk about the land, the access and the foundation. That's where feasibility is decided, and the conversation is free.",
  },
  projects: {
    heroEyebrow: "Our work",
    heroTitle: "Our projects",
    heroSubtitle: "Our projects, and why there are more of them than photos.",
    filterAll: "All",
    // Empty until photographs of real job sites are added here. No stock
    // photograph will ever be presented as our own work.
    items: [],
    emptyTitle: "Few photos, plenty of job sites",
    emptyBody:
      "Habitar was built on word of mouth. For years our energy went into the result and the client's satisfaction rather than our own shop window — so we have collected finished job sites a good deal faster than photographs. We're catching up, and this page will fill. In the meantime, call us: we'll talk you through projects comparable to yours, and we can put you in touch with clients we've worked for.",
    ctaTitle: "Your project could be next",
    ctaSubtitle: "Let's discuss your vision and see how we can build it.",
  },
  about: {
    heroEyebrow: "About",
    heroTitle: "Built on word of mouth",
    heroSubtitle:
      "A small Greater Montreal company, run by an owner with more than fifteen years on job sites — and one that got this far without ever advertising.",
    storyTitle: "Our story",
    storyParagraphs: [
      "Habitar Construction is a small company. Behind it is an owner with more than fifteen years of construction experience — new build and renovation, residential and commercial — who is still on the job sites today.",
      "The company grew without advertising. Every new client came on the recommendation of an old one, which remains the one form of marketing you cannot buy. For years our energy went into the result and the client's satisfaction rather than our own shop window — which is why we have more finished job sites behind us than photographs of them.",
      "Today Habitar is ready to take on more work. This site is part of that: it is the first time we have taken the time to describe what we do.",
      "The company is incorporated as 9377-7720 Québec inc. and holds RBQ licence 5763-1392-01. What sets us apart is the breadth of that licence: where many companies hold one or two subcategories, ours covers fourteen — from excavation and small concrete works through to cabinetry and finishing, by way of framing, roofing, exterior cladding, doors and windows.",
      "In practice that means fewer subcontractors to coordinate on your site, less waiting between trades, and one person to ask. Reserved trades — plumbing, electrical, ventilation — are entrusted to contractors licensed in their own specialty, as the law requires.",
      "The owner is a construction project manager. That is what explains how our sites are kept: a budget built line by line before the first hammer swing, a written schedule, and every hour worked and every purchase recorded against the project file — not estimated at the end.",
    ],
    badgeValue: "14",
    badgeLabel: "authorized RBQ subcategories",
    licenceEyebrow: "Verifiable",
    licenceTitle: "Our licence, in full",
    licenceSubtitle:
      "These are the subcategories listed on licence 5763-1392-01, in the Régie du bâtiment du Québec's own wording.",
    licenceNote:
      "This information is public. You can check it yourself against our licence number in the Régie du bâtiment du Québec's register of licence holders.",
    licenceItems: [
      { code: "2.5", label: "Excavation and earthwork" },
      { code: "2.7", label: "Site preparation work" },
      { code: "3.2", label: "Small concrete works" },
      { code: "4.2", label: "Non-structural masonry, marble and ceramic work" },
      { code: "5.2", label: "Metalwork" },
      { code: "6.1", label: "Wood framing" },
      { code: "6.2", label: "Wood and plastic work" },
      { code: "7", label: "Insulation, weatherproofing, roofing and exterior cladding" },
      { code: "8", label: "Doors and windows" },
      { code: "9", label: "Finishing work" },
      { code: "11.2", label: "Special equipment and products" },
      { code: "12", label: "Factory-made cabinets and countertops" },
      { code: "13.5", label: "Special or prefabricated installations" },
      { code: "17.2", label: "Intercom, telephony and surveillance" },
    ],
    valuesTitle: "What we hold to",
    values: [
      {
        title: "Say what is",
        description:
          "An honest estimate, even when the number disappoints. A surprise reported the day it happens, not on the final invoice.",
      },
      {
        title: "Write down what we say",
        description:
          "Price, schedule and scope are written before work begins. Any change goes through a signed change order.",
      },
      {
        title: "Own the seams",
        description:
          "What costs a client most is whatever falls between two trades. Our broad licence exists so that gap doesn't.",
      },
      {
        title: "Stay reachable",
        description:
          "One project, one person accountable. You never explain your file twice.",
      },
    ],
    statsTitle: "What our licence covers",
    stats: [
      { value: "Site", label: "excavation, earthwork and site preparation" },
      { value: "Structure", label: "small concrete works and wood framing" },
      { value: "Envelope", label: "insulation, roofing, cladding, doors and windows" },
      { value: "Finishing", label: "ceramic, marble, cabinets, countertops and finishing" },
    ],
    ctaTitle: "Want to work with us?",
    ctaSubtitle: "Get in touch to discuss your next project.",
  },
  contact: {
    heroEyebrow: "Contact us",
    heroTitle: "Let's talk about your project",
    heroSubtitle:
      "Fill in the form below or reach us directly. We answer every request within 24 hours.",
    formTitle: "Request an estimate",
    formFields: {
      name: "Full name",
      email: "Email",
      phone: "Phone",
      projectType: "Project type",
      message: "Describe your project",
      submit: "Send request",
      submitting: "Opening your email app...",
      success:
        "Your email app is opening with the request already written — all you have to do is send it.",
      successHint: "Nothing opened? Write or call us directly:",
      emailSubject: "Estimate request — Habitar Construction",
    },
    projectTypes: [
      "Residential renovation — minor or major",
      "New construction — structure and envelope",
      "Building envelope — roofing, cladding, windows",
      "Site work, excavation and foundation",
      "Project management",
      "Modular home",
      "Other",
    ],
    infoTitle: "Our details",
    infoPhone: "Phone",
    infoEmail: "Email",
    infoRegion: "Service area",
    infoHours: "Business hours",
  },
};

export default en;
