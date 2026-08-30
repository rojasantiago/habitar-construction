export interface Dictionary {
  meta: {
    titleSuffix: string;
    defaultDescription: string;
  };
  nav: {
    home: string;
    services: string;
    modular: string;
    projects: string;
    about: string;
    contact: string;
    getQuote: string;
  };
  footer: {
    tagline: string;
    ctaTitle: string;
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
    rbqLicense: string;
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
    /** Carte flottante du héro : un chiffre, et il doit être vérifiable. */
    badgeValue: string;
    badgeLabel: string;
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
    /**
     * Empty until real, attributable client quotes exist. The section removes
     * itself rather than render invented praise.
     */
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
  /** Factory-built homes assembled on site — the work the licence already covers. */
  modular: {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    introTitle: string;
    introParagraphs: string[];
    galleryTitle: string;
    gallerySubtitle: string;
    galleryNote: string;
    gallery: { caption: string; imageId: string }[];
    stepsEyebrow: string;
    stepsTitle: string;
    stepsSubtitle: string;
    steps: { title: string; description: string }[];
    advantagesEyebrow: string;
    advantagesTitle: string;
    advantages: { title: string; description: string }[];
    ctaTitle: string;
    ctaSubtitle: string;
  };
  projects: {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    filterAll: string;
    /** Empty until the owner's own photographs replace the placeholders. */
    items: {
      title: string;
      category: string;
      location: string;
      description: string;
      imageId: string;
    }[];
    emptyTitle: string;
    emptyBody: string;
    ctaTitle: string;
    ctaSubtitle: string;
  };
  about: {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    storyTitle: string;
    storyParagraphs: string[];
    /** Chiffre mis en avant sur la photo : le seul qui soit vérifiable. */
    badgeValue: string;
    badgeLabel: string;
    /**
     * The licence, transcribed in the Régie's own wording. It is the one claim
     * on this site a visitor can verify independently, so it is stated in full
     * rather than summarised.
     */
    licenceEyebrow: string;
    licenceTitle: string;
    licenceSubtitle: string;
    licenceNote: string;
    licenceItems: { code: string; label: string }[];
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
      successHint: string;
      emailSubject: string;
    };
    projectTypes: string[];
    infoTitle: string;
    infoPhone: string;
    infoEmail: string;
    infoRegion: string;
    infoHours: string;
  };
}
