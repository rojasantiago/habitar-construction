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
      "Habitar Construction — a family construction company serving Greater Montreal since 2018. New construction, modular homes and major renovation. RBQ licence 5763-1392-01.",
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
      "New construction, modular homes and major renovation across Greater Montreal. A family company since 2018, built on its clients' recommendations.",
    heroCtaPrimary: "Request a free estimate",
    heroCtaSecondary: "See our services",
    heroTrust: "RBQ licence 5763-1392-01 · Family company since 2018",
    trustBadges: [
      "RBQ licence 5763-1392-01",
      "Family company since 2018",
      "New construction",
      "Modular homes",
      "Major renovation",
      "Recommended by word of mouth",
      "Free estimate",
      "Answered within 24 hours",
    ],
    badgeValue: "2018",
    badgeLabel: "in business since",
    // The four stages of a job, in words a homeowner recognizes.
    stats: [
      { value: "Site", label: "excavation, grading and foundation" },
      { value: "Structure", label: "framing, roofing and concrete works" },
      { value: "Envelope", label: "insulation, cladding, doors and windows" },
      { value: "Finishing", label: "tile, cabinets, countertops and touch-ups" },
    ],
    servicesEyebrow: "What we do",
    servicesTitle: "Three ways to build with us",
    servicesSubtitle:
      "Build new, set down a modular home, or transform completely what is already there.",
    whyEyebrow: "Why Habitar",
    whyTitle: "Fewer hands, fewer grey areas",
    whySubtitle:
      "Most jobs go wrong at the seams: between the excavator and the concrete crew, between the roofer and the finisher. When both sides of a seam belong to the same contractor, the seam stops being your problem.",
    whyItems: [
      {
        title: "A family company",
        description:
          "Founded in 2018 and built without a single advertisement: every client came on another's recommendation. That is demanding, because a reputation built that way is lost on one badly run job.",
      },
      {
        title: "One person accountable",
        description:
          "You don't referee between trades, and you don't explain your project to three different people. One person answers for the schedule, the budget and the quality, from the first shovel to the last touch-up.",
      },
      {
        title: "An estimate we explain",
        description:
          "A firm written estimate, which we take the time to walk you through before you sign. What is included and what is not is set out in black and white, and any addition goes through a signed change order before the work starts — never discovered on the final invoice.",
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
          "A clear estimate, which we go through with you. We walk every element together — the work included, the work that is not, the schedule — so nothing is left vague.",
      },
      {
        title: "Construction",
        description:
          "Regular meetings, with you and with the trades alike, keep everyone at the same point: what is done, what is coming, and what needs deciding. You don't chase the information — it reaches you.",
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
      "Three ways to build with us: build new, set down a modular home, or transform completely what is already there.",
    list: [
      {
        title: "New construction",
        description:
          "We put the house up: the ground, the foundation, the framing, the roof, the envelope, the doors and windows, then all of the interior finishing. You get a clear written estimate, which we take the time to explain to you, and a schedule we hold to.",
        points: [
          "Excavation, earthwork and foundation",
          "Wood framing, roofing and metalwork",
          "Insulation, weatherproofing and exterior cladding",
          "Doors, windows, cabinets and interior finishing",
        ],
        imageId: "photo-1541888946425-d81bb19240f5",
      },
      {
        title: "Modular homes",
        description:
          "The house leaves the factory closed in and insulated, then lands on your lot. The ground, the foundation, the crane assembly, the sealing of the joints and the finishing happen on site. It is faster, often cheaper, and the envelope comes out more consistent than one built in the open.",
        points: [
          "Site preparation and foundation",
          "Module placement and anchoring",
          "Sealing the envelope and roof",
          "Interior finishing to the client's choice",
        ],
        imageId: "photo-1600566753190-17f0baa2a6c3",
      },
      {
        title: "Major renovation and conversion",
        description:
          "Stripping a unit or a house back to the structure, then rebuilding the partitions, the insulation, the windows and every finish. Residential and commercial alike — we have rebuilt entire units and store interiors.",
        points: [
          "Full strip-out back to the framing",
          "New partitions, insulation and soundproofing",
          "Kitchens, bathrooms and basements",
          "Commercial fit-out and renovation",
        ],
        imageId: "photo-1600607687939-ce8a6c25118c",
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
      "A modular home is built indoors, away from the weather, then delivered to your lot in sections. Everything that happens afterwards on site — the ground, the foundation, the assembly, the sealing, the finishing — is ours.",
    introTitle: "How it works",
    introParagraphs: [
      "Modular is not a mobile home. These are complete sections of a house — walls, floors, roof, insulation, sometimes even cabinets and tile — built in a plant to the Quebec Construction Code, then transported and assembled on a permanent foundation.",
      "The factory does what a factory does better than a job site: work dry, under constant light, with jigs and a quality check at every station. The result is a more consistent envelope and a schedule that no longer depends on rain or frost.",
      "But a modular home does not set itself down. It needs prepared ground, a foundation accurate to the millimetre, a crane, a watertight assembly, then all the finishing on site. That is where we come in.",
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
      "The factory delivers the modules. The five steps below happen on your lot, and our crews are the ones who carry them out.",
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
          "Interior connections, tile, cabinets, countertops and touch-ups. This is the stage where the house stops being a module set on a foundation and becomes yours.",
      },
    ],
    advantagesEyebrow: "Why modular",
    advantagesTitle: "The advantages, and the limits",
    advantages: [
      {
        title: "A shorter schedule",
        description:
          "The factory builds the house while we prepare the ground and the foundation. The two run in parallel instead of one after the other, which takes months off a conventional build.",
      },
      {
        title: "Generally a lower cost",
        description:
          "A plant buys in volume, cuts to jigs and wastes far less material than a job site. It also never redoes work the rain got to. Those savings show up in the price.",
      },
      {
        title: "Less weather risk",
        description:
          "The structure and insulation are never exposed to rain or frost before being closed in. In Quebec that exposure is what costs the most in rework — and it only shows after a few winters.",
      },
      {
        title: "What is limited: the volume",
        description:
          "The constraints come from the above-ground structure. A module has to fit on a trailer and pass under the wires, so section widths, spans and certain roof shapes are bounded. You cannot draw just any geometry.",
      },
      {
        title: "What is not: the finishes",
        description:
          "Cladding, flooring, tile, cabinets, countertops, colour and hardware are all adjusted to your taste. The range is more framed than on a conventional site, but wide enough that two houses of the same model do not look alike.",
      },
      {
        title: "Measured quality",
        description:
          "Every module passes factory inspections before shipping, under the standards applicable in Quebec — station by station, rather than by eye at the end of a job.",
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
      "Habitar was built on word of mouth. For years our energy went into the result and the client's satisfaction rather than our own shop window — so we have collected finished job sites a good deal faster than photographs. We're catching up, and this page will fill. In the meantime, call us: we'll gladly talk you through projects comparable to yours.",
    ctaTitle: "Your project could be next",
    ctaSubtitle: "Let's discuss your vision and see how we can build it.",
  },
  about: {
    heroEyebrow: "About",
    heroTitle: "A family company",
    heroSubtitle:
      "Founded in 2018 by a tradesman, built without a single advertisement, and taken over today by the next generation — same crew, same standards.",
    storyTitle: "Our story",
    storyParagraphs: [
      "Habitar Construction is a family company. It was built by a tradesman with more than fifteen years on job sites who, for years, did all of it himself: the estimating, the work, the follow-up with clients.",
      "The company has been registered since April 2018 and has never advertised. Every new client came on the recommendation of an earlier one, which remains the one form of marketing you cannot buy. Our energy went into the result and the client's satisfaction rather than our own shop window — which is why we have more finished job sites behind us than photographs of them.",
      "Today the next generation has stepped in. Site management has passed to a construction project manager trained on large Montreal job sites, while the founder stays in the background to advise. That is what lets Habitar take on more ambitious work than before, with the same standards on the build and a tighter grip on the budget.",
      "What a project manager brings is how the site is kept: a budget built line by line before the first hammer swing, a written schedule, and every hour worked and every purchase recorded against the project file — not estimated at the end.",
      "The company is incorporated as 9377-7720 Québec inc. and holds RBQ licence 5763-1392-01.",
    ],
    badgeValue: "2018",
    badgeLabel: "in business since",
    licenceEyebrow: "Verifiable",
    licenceTitle: "Our licence",
    licenceSubtitle:
      "A construction company has to be licensed by the Régie du bâtiment du Québec. Here is our number — it is public, and nothing stops you from checking it before you trust us with anything.",
    licenceNote:
      "Look it up in the Régie du bâtiment du Québec's register of licence holders. We are also on the Quebec enterprise register under number 1173640773, since 30 April 2018.",
    licenceItems: [],
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
          "What costs a client most is whatever falls between two trades. We cover both sides of most of those seams ourselves, so that gap does not exist.",
      },
      {
        title: "Stay reachable",
        description:
          "One project, one person accountable. You never explain your file twice.",
      },
    ],
    statsTitle: "The four stages of a job",
    stats: [
      { value: "Site", label: "excavation, grading and foundation" },
      { value: "Structure", label: "framing, roofing and concrete works" },
      { value: "Envelope", label: "insulation, cladding, doors and windows" },
      { value: "Finishing", label: "tile, cabinets, countertops and touch-ups" },
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
