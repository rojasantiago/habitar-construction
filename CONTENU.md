# Règles de contenu — à lire avant de toucher au texte du site

Ce fichier n'est pas une préférence de style. Chaque règle vient d'une
contrainte légale ou d'une décision du propriétaire, et les enfreindre
exposerait l'entreprise. Tout le texte visible vit dans
`src/lib/i18n/dictionaries/fr.ts` et `en.ts` — les deux doivent rester en
miroir.

## L'entreprise, en fait vérifiables

- **Habitar Construction** = 9377-7720 Québec inc., immatriculée le
  **30 avril 2018** (NEQ 1173640773).
- **Licence RBQ 5763-1392-01**, catégorie *entrepreneur spécialisé*,
  14 sous-catégories : excavation et terrassement, travaux d'emplacement,
  petits ouvrages de béton, maçonnerie non structurale / marbre / céramique,
  ouvrages métalliques, charpentes de bois, travaux de bois et plastique,
  isolation-étanchéité-couvertures-revêtement extérieur, portes et fenêtres,
  travaux de finition, équipements et produits spéciaux, armoires et
  comptoirs usinés, installations spéciales ou préfabriquées,
  intercommunication-téléphonie-surveillance.
- Adresse : 7146, boulevard Pie-IX, Montréal (Québec) H2A 2G4.
- Entreprise **familiale** : fondée par le père, qui cumule plus de quinze
  ans de chantier et reste en retrait pour conseiller ; son fils, chargé de
  projet en construction, dirige maintenant les chantiers.

## Interdit d'écrire

Une demande de **licence d'entrepreneur général** est en traitement à la RBQ.
Tant qu'elle n'est pas délivrée, ces mots ne doivent apparaître nulle part :

- « entrepreneur général »
- « clé en main »
- « design build » (en plus de la licence, les plans relèvent d'un architecte
  ou d'un ingénieur — ça ne s'offrira jamais seul)
- « de A à Z », « on s'occupe de tout », « un seul contrat pour tout »

La Loi sur la protection du consommateur juge **l'impression générale** que
dégage une page, pas seulement ses mots. Une page construite pour faire
croire à une licence qu'on n'a pas est traitée comme une page qui la
revendique — et se plaide plus mal, parce que l'intention se voit.

## Interdit de démentir non plus

Symétriquement : **ne pas écrire que l'entreprise n'est pas entrepreneur
général**, et ne pas ajouter de mise en garde du genre « la plomberie et
l'électricité sont faites par d'autres ». Rien n'oblige à démentir ce qu'on
n'a jamais prétendu, et ces phrases écartaient des clients qui reviendront
dans quelques mois.

C'est **la soumission écrite** qui fixe la portée exacte d'un contrat, pas la
page d'accueil.

## Rien qui ne soit prouvable

- **Les quinze ans appartiennent au fondateur, jamais à l'entreprise.** Écrire
  « un propriétaire qui cumule plus de quinze ans », jamais « Habitar,
  15 ans d'expérience ». L'entreprise porte sa date : 2018.
- **`home.testimonials` reste vide** tant qu'un vrai client n'a pas accepté
  d'être cité **et nommé**. La section se masque toute seule quand le tableau
  est vide. Ne jamais inventer de citation ni de nom.
- **`projects.items` reste vide** tant qu'il n'y a pas de photos des vrais
  chantiers. Aucune image de banque ne doit être présentée comme une
  réalisation, avec ou sans ville et superficie.
- **Aucune adhésion ni garantie** — Garantie GCR, membre APCHQ, assurance —
  tant qu'elle n'est pas prouvée. La GCR ne couvre que le neuf et exige une
  licence 1.1.1 ou 1.1.2 : elle ne s'applique pas ici.
- **Aucun chiffre de performance** inventé (projets complétés, taux de
  satisfaction, années d'expérience de l'entreprise).

## Les projets faits chez un autre entrepreneur

Le fils a travaillé comme chargé de projet chez un entrepreneur général
(MDA Valleyfield, agrandissement Hoogan et Beaufort, blocs 5 et 7 Angus —
350 logements avec commerces et un CPE). Sur le site :

- ces projets se décrivent **sans les nommer** et **sans photos** ;
- ils s'attribuent **à la personne**, jamais à Habitar. Un CV dit « j'ai
  travaillé sur X », pas « mon entreprise a bâti X ».

La formulation actuelle est « formé sur de grands chantiers montréalais ».

## Ce qu'on ne promet pas

Ces promesses ont été retirées parce qu'elles ne se tiennent pas :

- un prix **détaillé poste par poste** — la soumission l'est, mais on ne
  l'annonce pas ; ça invite le client à démonter le prix métier par métier ;
- être averti d'un imprévu **le jour même** — remplacé par des rencontres
  régulières avec le client et les sous-traitants ;
- **mettre un prospect en contact avec d'anciens clients** — ça exige leur
  consentement.

La dernière des quatre étapes se termine sur la **satisfaction du client**,
jamais sur la facture.

## Le ton

- Des mots de client, pas le vocabulaire de la Régie. La liste des
  sous-catégories a été retirée des pages exprès : elle faisait « spécialiste
  qui récite les limites de son permis ». Le **numéro** de licence suffit à
  rendre l'entreprise vérifiable.
- Entreprise **familiale**, à taille humaine, bâtie par le bouche-à-oreille.
- « Une équipe derrière votre projet », jamais « un seul responsable » — ça
  faisait travailleur autonome.
- Le suivi de budget interne ne se met pas sur le site : ça ne regarde pas le
  client.
- Ne pas faire peur. « Fondation au millimètre » et « ne pardonne pas
  l'à-peu-près » ont été retirés : dire ce que la précision **rapporte**, pas
  ce qu'elle exige.

## Les trois services, dans cet ordre

1. **Construction neuve**
2. **Maisons modulaires** — annoncer honnêtement les limites (le volume hors
   sol est contraint par le transport) autant que les avantages (échéancier,
   coût, météo). Ne nommer **aucun** manufacturier : rien n'est signé.
3. **Rénovation et transformation** — du réaménagement d'un intérieur à la
   reprise complète à partir de la structure existante.

## Le site n'est pas public

Il est derrière un mot de passe, réglé par deux variables d'environnement sur
Vercel (voir `src/proxy.ts`) :

- `SITE_PASSWORD` — le mot de passe (n'importe quel nom d'utilisateur passe) ;
- `SITE_PUBLIC=true` — ouvre le site à tous.

**Ne pas rendre le site public sans que le propriétaire le demande
explicitement.**

## Quand la licence générale arrivera

Le texte a été écrit pour que ce soit un ajout, pas une réécriture :
« clé en main » et « entrepreneur général » deviendront permis, et le
positionnement se met à jour en quelques minutes. Demander confirmation que
la licence est **délivrée** avant de changer quoi que ce soit.
