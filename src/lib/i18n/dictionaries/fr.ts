import type { Dictionary } from "../types";

/**
 * Tout ce qui est affirmé ici doit être vérifiable.
 *
 * Le site cite le numéro de licence RBQ 5763-1392-01, qui suffit à le rendre
 * vérifiable, et décrit les travaux en mots de client plutôt qu'en
 * sous-catégories de la Régie. La Loi sur la protection du consommateur juge
 * l'impression générale que dégage une page, pas seulement ses mots : le titre
 * « entrepreneur général » n'apparaît donc nulle part tant que la Régie ne
 * l'a pas délivré. Le site ne le nie pas non plus — rien n'oblige à démentir
 * ce qu'on n'a jamais prétendu. C'est la soumission écrite, pas la page
 * d'accueil, qui fixe la portée exacte de chaque contrat.
 *
 * Les quinze ans appartiennent au fondateur, pas à l'entreprise, et le texte
 * le dit chaque fois. L'entreprise, elle, porte sa date : immatriculée le
 * 30 avril 2018. Aucun témoignage ni aucune adhésion n'est avancé tant
 * qu'il ne peut pas être prouvé.
 */
const fr: Dictionary = {
  meta: {
    titleSuffix: "Habitar Construction",
    defaultDescription:
      "Habitar Construction — entreprise familiale de construction du Grand Montréal depuis 2018. Construction neuve, maisons modulaires et rénovation majeure. Licence RBQ 5763-1392-01.",
  },
  nav: {
    home: "Accueil",
    services: "Services",
    modular: "Maisons modulaires",
    projects: "Réalisations",
    about: "À propos",
    contact: "Contact",
    getQuote: "Soumission gratuite",
  },
  footer: {
    tagline:
      "Un seul entrepreneur licencié pour le terrassement, la structure, l'enveloppe et la finition de votre projet.",
    ctaTitle: "Une question sur votre projet ? Parlons-en.",
    servicesTitle: "Services",
    companyTitle: "Entreprise",
    contactTitle: "Contact",
    hours: "Heures d'ouverture",
    hoursValue: "Lun – Ven : 7h00 – 17h00",
    rights: "Tous droits réservés.",
  },
  common: {
    phone: "(514) 655-2458",
    email: "habitar.construction@gmail.com",
    region: "Grand Montréal et environs",
    addressLine: "7146, boulevard Pie-IX, Montréal (Québec) H2A 2G4",
    ctaPrimary: "Demander une soumission",
    ctaSecondary: "Voir nos services",
    readMore: "En savoir plus",
    viewAll: "Voir tous les services",
    rbqLicense: "Licence RBQ : 5763-1392-01",
  },
  home: {
    heroEyebrow: "Entrepreneur en construction — Grand Montréal",
    heroTitle: "Du terrassement",
    heroHighlight: "à la finition.",
    heroSubtitle:
      "Construction neuve, maisons modulaires et rénovation majeure dans le Grand Montréal. Une entreprise familiale depuis 2018, bâtie sur la recommandation de ses clients.",
    heroCtaPrimary: "Demander une soumission gratuite",
    heroCtaSecondary: "Découvrir nos services",
    heroTrust: "Licence RBQ 5763-1392-01 · Entreprise familiale depuis 2018",
    trustBadges: [
      "Licence RBQ 5763-1392-01",
      "Entreprise familiale depuis 2018",
      "Construction neuve",
      "Maisons modulaires",
      "Rénovation majeure",
      "Recommandé de bouche à oreille",
      "Soumission gratuite",
      "Réponse en 24 heures",
    ],
    badgeValue: "2018",
    badgeLabel: "en affaires depuis",
    // Les quatre temps d'un chantier, en mots qu'un propriétaire reconnaît.
    stats: [
      { value: "Terrain", label: "excavation, nivellement et fondation" },
      { value: "Structure", label: "charpente, toiture et ouvrages de béton" },
      { value: "Enveloppe", label: "isolation, revêtement, portes et fenêtres" },
      { value: "Finition", label: "céramique, armoires, comptoirs et retouches" },
    ],
    servicesEyebrow: "Ce que nous faisons",
    servicesTitle: "Trois façons de bâtir avec nous",
    servicesSubtitle:
      "Construire neuf, poser une maison modulaire, ou transformer complètement ce qui existe déjà.",
    whyEyebrow: "Pourquoi Habitar",
    whyTitle: "Moins d'intervenants, moins de zones grises",
    whySubtitle:
      "La plupart des chantiers dérapent aux jonctions : entre l'excavateur et le coffreur, entre le couvreur et le finisseur. Quand les deux côtés relèvent du même entrepreneur, la jonction cesse d'être votre problème.",
    whyItems: [
      {
        title: "Une entreprise de famille",
        description:
          "Fondée en 2018 et bâtie sans une seule publicité : chaque client est venu par la recommandation d'un autre. C'est exigeant, parce qu'une réputation bâtie comme ça se perd sur un seul chantier bâclé.",
      },
      {
        title: "Un seul responsable",
        description:
          "Vous n'arbitrez pas entre corps de métier, et vous ne racontez pas votre projet à trois personnes différentes. Une personne répond de l'échéancier, du budget et de la qualité, du premier coup de pelle à la dernière retouche.",
      },
      {
        title: "Un prix écrit",
        description:
          "Soumission ferme, détaillée poste par poste, avec ce qui est inclus et ce qui ne l'est pas. Tout ajout passe par un avenant signé avant les travaux — jamais découvert sur la facture finale.",
      },
      {
        title: "Un budget suivi au jour le jour",
        description:
          "Chaque heure travaillée et chaque achat sont enregistrés au dossier de votre projet. Quand vous demandez où en est le budget, la réponse existe déjà.",
      },
    ],
    processEyebrow: "Notre approche",
    processTitle: "Quatre étapes, sans surprise",
    processSteps: [
      {
        title: "Rencontre",
        description:
          "On visite les lieux, on écoute ce que vous voulez et on note ce qui doit être fait. Sans frais et sans engagement.",
      },
      {
        title: "Soumission",
        description:
          "Un prix ferme, détaillé par poste. Vous voyez ce qui est compris, ce qui ne l'est pas, et l'échéancier proposé.",
      },
      {
        title: "Chantier",
        description:
          "Les travaux avancent selon l'échéancier convenu. S'il y a un imprévu, vous l'apprenez le jour même, pas à la fin.",
      },
      {
        title: "Livraison",
        description:
          "Inspection avec vous, corrections s'il y a lieu, puis la facture finale — qui correspond à la soumission et aux avenants signés.",
      },
    ],
    featuredEyebrow: "Réalisations",
    featuredTitle: "Nos chantiers",
    featuredSubtitle: "Un aperçu des projets que nous avons menés.",
    featuredCta: "Voir toutes nos réalisations",
    testimonialsEyebrow: "Témoignages",
    testimonialsTitle: "Ce que disent nos clients",
    // Volontairement vide. La section ne s'affiche pas tant qu'un vrai client
    // n'a pas accepté d'être cité et nommé.
    testimonials: [],
    ctaTitle: "Prêt à démarrer votre projet ?",
    ctaSubtitle:
      "Obtenez une soumission gratuite et sans engagement. Nous répondons à toutes les demandes en moins de 24 heures.",
  },
  services: {
    heroEyebrow: "Nos services",
    heroTitle: "Du terrain nu au dernier coup de pinceau",
    heroSubtitle:
      "Trois façons de bâtir avec nous : construire neuf, poser une maison modulaire, ou transformer complètement ce qui existe déjà.",
    list: [
      {
        title: "Construction neuve",
        description:
          "Nous montons la maison : le terrain, la fondation, la charpente, le toit, l'enveloppe, les portes et fenêtres, puis toute la finition intérieure. Vous recevez une soumission écrite qui détaille poste par poste ce qui est compris et ce qui ne l'est pas, et un échéancier que nous tenons.",
        points: [
          "Excavation, terrassement et fondation",
          "Charpente de bois, toiture et ouvrages métalliques",
          "Isolation, étanchéité et revêtement extérieur",
          "Portes, fenêtres, armoires et finition intérieure",
        ],
        imageId: "photo-1541888946425-d81bb19240f5",
      },
      {
        title: "Maisons modulaires",
        description:
          "La maison sort de l'usine, close et isolée, puis se pose sur votre terrain. Le terrain, la fondation, l'assemblage à la grue, le scellement des jonctions et la finition se font sur place. C'est plus rapide, souvent moins cher, et la qualité de l'enveloppe est plus régulière qu'un chantier à ciel ouvert.",
        points: [
          "Préparation du terrain et fondation",
          "Assemblage et ancrage des modules",
          "Scellement de l'enveloppe et de la toiture",
          "Finition intérieure au choix du client",
        ],
        imageId: "photo-1600566753190-17f0baa2a6c3",
      },
      {
        title: "Rénovation majeure et transformation",
        description:
          "Vider un logement ou une maison jusqu'à la structure, refaire les divisions, l'isolation, les fenêtres et toute la finition. Résidentiel comme commercial — nous avons refait des logements complets comme des intérieurs de commerces.",
        points: [
          "Décapage complet jusqu'à la charpente",
          "Nouvelles divisions, isolation et insonorisation",
          "Cuisines, salles de bain et sous-sols",
          "Aménagement et rénovation de locaux commerciaux",
        ],
        imageId: "photo-1600607687939-ce8a6c25118c",
      },
    ],
    ctaTitle: "Un projet en tête ?",
    ctaSubtitle:
      "Parlons-en. Nous évaluons votre projet et vous proposons une solution adaptée à votre budget.",
  },
  modular: {
    heroEyebrow: "Construction modulaire",
    heroTitle: "La maison est usinée. Le chantier, c'est nous.",
    heroSubtitle:
      "Une maison modulaire est bâtie en usine, à l'abri du climat, puis livrée en sections sur votre terrain. Tout ce qui se passe ensuite sur le site — le terrain, la fondation, l'assemblage, le scellement, la finition — c'est nous.",
    introTitle: "Comment ça fonctionne",
    introParagraphs: [
      "Le modulaire n'est pas une maison mobile. Ce sont des sections complètes de maison — murs, planchers, toiture, isolation, parfois même les armoires et la céramique — construites en usine selon le Code de construction du Québec, puis transportées et assemblées sur une fondation permanente.",
      "L'usine fait ce qu'une usine fait mieux qu'un chantier : travailler au sec, sous éclairage constant, avec des gabarits et un contrôle de qualité à chaque poste. Le résultat est une enveloppe plus régulière et un échéancier qui ne dépend plus de la pluie ni du gel.",
      "Mais une maison modulaire ne se pose pas toute seule. Il faut un terrain préparé, une fondation au millimètre, une grue, un assemblage étanche, puis toute la finition sur place. C'est là que nous intervenons.",
    ],
    galleryTitle: "À quoi ça ressemble",
    gallerySubtitle:
      "Le préfabriqué d'aujourd'hui n'a plus rien du bungalow de catalogue : grandes ouvertures, toits plats ou à faible pente, revêtements de bois et de métal.",
    galleryNote:
      "Images d'illustration présentant le style de construction modulaire contemporaine. Ce ne sont pas des projets réalisés par Habitar Construction.",
    gallery: [
      { caption: "Volume simple, revêtement de bois", imageId: "photo-1600566753190-17f0baa2a6c3" },
      { caption: "Grandes ouvertures et toit à faible pente", imageId: "photo-1600585154340-be6161a56a0c" },
      { caption: "Assemblage de sections sur fondation", imageId: "photo-1541888946425-d81bb19240f5" },
      { caption: "Finition intérieure ouverte", imageId: "photo-1600566753086-00f18fb6b3ea" },
    ],
    stepsEyebrow: "Notre rôle",
    stepsTitle: "Ce que nous faisons sur le site",
    stepsSubtitle:
      "L'usine livre les modules. Les cinq étapes suivantes se passent sur votre terrain, et ce sont nos équipes qui les mènent.",
    steps: [
      {
        title: "Le terrain",
        description:
          "Excavation, nivellement et travaux d'emplacement. La livraison d'un module exige un accès pour un camion long et une grue : ça se planifie avant de creuser.",
      },
      {
        title: "La fondation",
        description:
          "Semelles, dalle ou fondation légère coulées aux dimensions exactes de l'usine. Une maison modulaire ne pardonne pas l'à-peu-près : les modules doivent se poser au millimètre.",
      },
      {
        title: "L'assemblage",
        description:
          "Pose des sections à la grue, ancrage, jonction des planchers et des murs. C'est la journée où la maison apparaît.",
      },
      {
        title: "Le scellement",
        description:
          "Les jonctions entre modules sont isolées, rendues étanches à l'air et à l'eau, puis la toiture et le revêtement extérieur sont complétés. C'est l'étape qui décide de la performance de la maison pour trente ans.",
      },
      {
        title: "La finition",
        description:
          "Raccords intérieurs, céramique, armoires, comptoirs et retouches. C'est l'étape où la maison cesse d'être un module posé sur une fondation et devient la vôtre.",
      },
    ],
    advantagesEyebrow: "Pourquoi le modulaire",
    advantagesTitle: "Les avantages, et les limites",
    advantages: [
      {
        title: "Un échéancier plus court",
        description:
          "L'usine construit la maison pendant que nous préparons le terrain et la fondation. Les deux avancent en parallèle au lieu de se suivre, ce qui retranche des mois par rapport à une construction traditionnelle.",
      },
      {
        title: "Un coût généralement moindre",
        description:
          "Une usine achète en volume, coupe avec des gabarits et perd beaucoup moins de matériaux qu'un chantier. Elle ne reprend pas non plus le travail abîmé par la pluie. Ces économies-là se retrouvent dans le prix.",
      },
      {
        title: "Moins d'aléas de météo",
        description:
          "La structure et l'isolation ne sont jamais exposées à la pluie ou au gel avant d'être fermées. Au Québec, c'est ce qui coûte le plus cher en reprises — et ça ne se voit qu'après quelques hivers.",
      },
      {
        title: "Ce qui est limité : le volume",
        description:
          "C'est la structure hors sol qui impose les contraintes. Un module doit tenir sur une remorque et passer sous les fils : la largeur des sections, la portée et certaines formes de toit sont donc encadrées. On ne dessine pas n'importe quelle géométrie.",
      },
      {
        title: "Ce qui ne l'est pas : la finition",
        description:
          "Les revêtements, les planchers, la céramique, les armoires, les comptoirs, la couleur et la quincaillerie s'ajustent à votre goût. Le choix est plus encadré que sur un chantier traditionnel, mais assez large pour que deux maisons du même modèle ne se ressemblent pas.",
      },
      {
        title: "Une qualité mesurée",
        description:
          "Chaque module passe des contrôles en usine avant d'être expédié, selon les normes applicables au Québec — poste par poste, plutôt qu'à l'œil en fin de chantier.",
      },
    ],
    ctaTitle: "Un terrain et un projet de maison modulaire ?",
    ctaSubtitle:
      "Parlons du terrain, de l'accès et de la fondation. C'est là que se joue la faisabilité, et c'est gratuit d'en discuter.",
  },
  projects: {
    heroEyebrow: "Nos réalisations",
    heroTitle: "Nos chantiers",
    heroSubtitle: "Nos chantiers, et pourquoi il y en a plus que de photos.",
    filterAll: "Tous",
    // Vide tant que les photos des chantiers réels ne sont pas versées ici.
    // Aucune image de banque ne sera présentée comme une réalisation.
    items: [],
    emptyTitle: "Peu de photos, beaucoup de chantiers",
    emptyBody:
      "Habitar s'est bâtie par le bouche-à-oreille. Pendant des années, notre énergie est allée au résultat et à la satisfaction du client plutôt qu'à notre propre vitrine — nous avons donc accumulé les chantiers terminés bien plus vite que les photos. Nous rattrapons ce retard et cette page se remplira. D'ici là, appelez-nous : nous vous parlerons volontiers de projets comparables au vôtre.",
    ctaTitle: "Votre projet pourrait être le prochain",
    ctaSubtitle: "Discutons de votre vision et voyons comment nous pouvons la concrétiser.",
  },
  about: {
    heroEyebrow: "À propos",
    heroTitle: "Une entreprise de famille",
    heroSubtitle:
      "Fondée en 2018 par un homme de métier, bâtie sans une seule publicité, et reprise aujourd'hui par la génération suivante — avec le même monde et les mêmes exigences.",
    storyTitle: "Notre histoire",
    storyParagraphs: [
      "Habitar Construction est une entreprise familiale. Elle a été bâtie par un homme de métier qui cumule plus de quinze ans de chantier et qui, pendant des années, a tout fait lui-même : l'estimation, le travail, le suivi des clients.",
      "L'entreprise est immatriculée depuis avril 2018 et n'a jamais fait de publicité. Chaque nouveau client est venu par la recommandation d'un ancien, ce qui reste la seule forme de marketing qui ne s'achète pas. Notre énergie est allée au résultat et à la satisfaction du client plutôt qu'à notre propre vitrine — c'est pour ça que nous avons plus de chantiers derrière nous que de photos.",
      "Aujourd'hui, la relève est arrivée. La direction des chantiers est passée à un chargé de projet en construction, formé sur de grands chantiers montréalais ; le fondateur reste en retrait, pour conseiller. C'est ce qui permet à Habitar de prendre des projets plus ambitieux qu'avant, avec la même exigence sur le travail et un suivi plus serré sur le budget.",
      "Ce qu'un chargé de projet apporte, c'est la tenue du chantier : un budget monté poste par poste avant le premier coup de marteau, un échéancier écrit, et chaque heure travaillée comme chaque achat consignés au dossier du projet — pas estimés à la fin.",
      "L'entreprise est constituée sous le nom de 9377-7720 Québec inc. et détient la licence RBQ 5763-1392-01.",
    ],
    badgeValue: "2018",
    badgeLabel: "en affaires depuis",
    licenceEyebrow: "Vérifiable",
    licenceTitle: "Notre licence",
    licenceSubtitle:
      "Une entreprise de construction doit être licenciée par la Régie du bâtiment du Québec. Voici notre numéro — il est public, et rien ne vous empêche de le vérifier avant de nous confier quoi que ce soit.",
    licenceNote:
      "Vérifiez-le au registre des détenteurs de licence de la Régie du bâtiment du Québec. Nous sommes aussi immatriculés au Registraire des entreprises sous le numéro 1173640773, depuis le 30 avril 2018.",
    licenceItems: [],
    valuesTitle: "Nos valeurs",
    values: [
      {
        title: "Dire ce qui est",
        description:
          "Une estimation honnête, même quand le chiffre déplaît. Un imprévu annoncé le jour où il survient, pas à la facture finale.",
      },
      {
        title: "Écrire ce qu'on dit",
        description:
          "Le prix, l'échéancier et la portée des travaux sont écrits avant de commencer. Tout changement passe par un avenant signé.",
      },
      {
        title: "Faire les jonctions",
        description:
          "Ce qui coûte cher au client, c'est ce qui tombe entre deux corps de métier. Nous couvrons nous-mêmes les deux côtés de la plupart de ces jonctions, pour que ce vide n'existe pas.",
      },
      {
        title: "Rester joignable",
        description:
          "Un projet, une personne responsable. Vous ne racontez pas votre dossier deux fois.",
      },
    ],
    statsTitle: "Les quatre temps d'un chantier",
    stats: [
      { value: "Terrain", label: "excavation, nivellement et fondation" },
      { value: "Structure", label: "charpente, toiture et ouvrages de béton" },
      { value: "Enveloppe", label: "isolation, revêtement, portes et fenêtres" },
      { value: "Finition", label: "céramique, armoires, comptoirs et retouches" },
    ],
    ctaTitle: "Envie de travailler avec nous ?",
    ctaSubtitle: "Contactez-nous pour discuter de votre prochain projet.",
  },
  contact: {
    heroEyebrow: "Contactez-nous",
    heroTitle: "Parlons de votre projet",
    heroSubtitle:
      "Remplissez le formulaire ci-dessous ou contactez-nous directement. Nous répondons à toutes les demandes en moins de 24 heures.",
    formTitle: "Demande de soumission",
    formFields: {
      name: "Nom complet",
      email: "Courriel",
      phone: "Téléphone",
      projectType: "Type de projet",
      message: "Décrivez votre projet",
      submit: "Envoyer la demande",
      submitting: "Ouverture de votre messagerie...",
      success:
        "Votre logiciel de courriel s'ouvre avec votre demande déjà rédigée — il ne vous reste qu'à l'envoyer.",
      successHint: "Rien ne s'est ouvert ? Écrivez-nous ou appelez-nous directement :",
      emailSubject: "Demande de soumission — Habitar Construction",
    },
    projectTypes: [
      "Rénovation résidentielle — mineure ou majeure",
      "Construction neuve — structure et enveloppe",
      "Enveloppe du bâtiment — toiture, revêtement, fenêtres",
      "Travaux extérieurs, excavation et fondation",
      "Gestion de projet",
      "Maison modulaire",
      "Autre",
    ],
    infoTitle: "Nos coordonnées",
    infoPhone: "Téléphone",
    infoEmail: "Courriel",
    infoRegion: "Région desservie",
    infoHours: "Heures d'ouverture",
  },
};

export default fr;
