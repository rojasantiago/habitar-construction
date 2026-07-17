export interface Dictionary {
  meta: {
    titleSuffix: string;
    defaultDescription: string;
  };
  nav: {
    home: string;
    services: string;
    projects: string;
    about: string;
    contact: string;
    getQuote: string;
  };
  footer: {
    tagline: string;
    servicesTitle: string;
    companyTitle: string;
    contactTitle: string;
    hours: string;
    hoursValue: string;
    rights: string;
  };
  common: {
    phone: string;
    email: string;
    region: string;
    addressLine: string;
    ctaPrimary: string;
    ctaSecondary: string;
    readMore: string;
    viewAll: string;
  };
  home: {
    heroEyebrow: string;
    heroTitle: string;
    heroHighlight: string;
    heroSubtitle: string;
    heroCtaPrimary: string;
    heroCtaSecondary: string;
    heroTrust: string;
    trustBadges: string[];
    stats: { value: string; label: string }[];
    servicesEyebrow: string;
    servicesTitle: string;
    servicesSubtitle: string;
    whyEyebrow: string;
    whyTitle: string;
    whySubtitle: string;
    whyItems: { title: string; description: string }[];
    processEyebrow: string;
    processTitle: string;
    processSteps: { title: string; description: string }[];
    featuredEyebrow: string;
    featuredTitle: string;
    featuredSubtitle: string;
    featuredCta: string;
    testimonialsEyebrow: string;
    testimonialsTitle: string;
    testimonials: { quote: string; name: string; role: string }[];
    ctaTitle: string;
    ctaSubtitle: string;
  };
  services: {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    list: {
      title: string;
      description: string;
      points: string[];
      imageId: string;
    }[];
    ctaTitle: string;
    ctaSubtitle: string;
  };
  projects: {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    filterAll: string;
    items: {
      title: string;
      category: string;
      location: string;
      description: string;
      imageId: string;
    }[];
    ctaTitle: string;
    ctaSubtitle: string;
  };
  about: {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    storyTitle: string;
    storyParagraphs: string[];
    valuesTitle: string;
    values: { title: string; description: string }[];
    statsTitle: string;
    stats: { value: string; label: string }[];
    ctaTitle: string;
    ctaSubtitle: string;
  };
  contact: {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    formTitle: string;
    formFields: {
      name: string;
      email: string;
      phone: string;
      projectType: string;
      message: string;
      submit: string;
      submitting: string;
      success: string;
    };
    projectTypes: string[];
    infoTitle: string;
    infoPhone: string;
    infoEmail: string;
    infoRegion: string;
    infoHours: string;
  };
}
