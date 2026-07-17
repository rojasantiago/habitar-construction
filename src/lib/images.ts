// Central catalogue of curated, verified construction/architecture photography.
// Each entry is a stable Unsplash photo. Swap any id for the client's own photos
// later without touching the components.

const UNSPLASH = "https://images.unsplash.com";

function build(id: string, w: number, q = 80): string {
  return `${UNSPLASH}/${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export interface SiteImage {
  id: string;
  alt: string;
}

const IDS = {
  houseDusk: "photo-1600585154340-be6161a56a0c", // modern house exterior at dusk
  siteAerial: "photo-1541888946425-d81bb19240f5", // aerial construction site with crew
  blueprints: "photo-1503387762-592deb58ef4e", // architect working on blueprints
  livingRoom: "photo-1600607687939-ce8a6c25118c", // modern living room interior
  siteRebar: "photo-1504307651254-35680f356dfd", // workers on structural site
  whiteHousePool: "photo-1512917774080-9991f1c4c750", // white modern house with pool
  tradesWorker: "photo-1621905251189-08b45d6a269e", // tradesperson at work
  glassBuilding: "photo-1487958449943-2429e8be8625", // modern commercial glass building
  kitchenMarble: "photo-1556911220-bff31c812dba", // renovated marble kitchen
  livingStairs: "photo-1600566753086-00f18fb6b3ea", // open living room with staircase
  woodHouse: "photo-1600566753190-17f0baa2a6c3", // modern timber-clad house
  bathroom: "photo-1604709177225-055f99402ea3", // renovated grey bathroom
} as const;

export function img(id: string, w: number, q = 80): string {
  return build(id, w, q);
}

export const IMAGES = IDS;
