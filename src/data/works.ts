export type WorkCategory = "Sports Design" | "JSW & BFC" | "AI & Motion" | "Print & Outdoor" | "Logos & Identity"

export type WorkItem = {
  id: string
  title: string
  category: WorkCategory
  src: string
  type: "image" | "video"
}

export type Project = {
  id: string
  name: string
  badge: string
  period: string
  org: string
  cover: string
  blurb: string
  role: string
  tools: string
  highlights: string[]
  gallery: string[]
}

export const PROJECTS: Project[] = [
  {
    id: "mumbai-indians",
    name: "Mumbai Indians",
    badge: "2 Seasons",
    period: "2022 – 2025",
    org: "Sportz Interactive",
    cover: "works/mi-2024-kv.jpg",
    blurb: "Led full-season campaign visuals for the Mumbai Indians across two IPL seasons, spanning matchday graphics and key art.",
    role: "Senior Designer",
    tools: "Adobe Suite",
    highlights: [
      "Full-season visual identity and matchday templates",
      "Player milestone, squad & fixture social rollouts",
      "High-tempo turnaround across live IPL matchdays",
      "Consistent franchise visual language across platforms",
    ],
    gallery: [
      "works/mi-2024-kv.jpg",
      "works/mi-semis.jpg",
      "works/mi-rushmore.jpg",
      "works/bumrah-poster.jpg",
      "works/ro-otd.jpg",
    ],
  },
  {
    id: "jsw-bfc",
    name: "JSW & Bengaluru FC",
    badge: "Current",
    period: "2025 – Present",
    org: "JSW Sports",
    cover: "works/bfc-1.jpg",
    blurb: "Creating branding, print, and social media assets across all JSW Sports verticals—athletes, Bengaluru FC, and official channels.",
    role: "Senior Designer",
    tools: "Adobe · AI",
    highlights: [
      "Branding & print collateral for JSW Sports verticals",
      "Bengaluru FC matchday & club campaign assets",
      "Athlete-focused visual storytelling & social kits",
      "Cross-channel visual consistency for JSW Sports",
    ],
    gallery: [
      "works/bfc-1.jpg",
      "works/bfc-2.jpg",
      "works/bfc-3.jpg",
      "works/jsw-1.jpg",
      "works/jsw-2.jpg",
    ],
  },
  {
    id: "global-sports",
    name: "Global Federations",
    badge: "5+ Leagues",
    period: "2022 – 2025",
    org: "Sportz Interactive",
    cover: "works/mirabai-olympics.jpg",
    blurb: "Crafted high-impact branding and promotional materials for leading global sports entities including BCCI, RB Leipzig, NBA, FIFA, and the Olympics.",
    role: "Senior Designer",
    tools: "Adobe · 3D",
    highlights: [
      "Promotional key art for BCCI, NBA & FIFA properties",
      "Club & tournament campaign graphics for RB Leipzig",
      "Olympic-cycle digital & social storytelling visuals",
      "Multi-market adaptations built for global audiences",
    ],
    gallery: [
      "works/mirabai-olympics.jpg",
      "works/nba-poster.jpg",
      "works/pkl-season.jpg",
      "works/maxwell-poster.jpg",
      "works/vikram-poster.jpg",
    ],
  },
  {
    id: "ai-motion",
    name: "AI & Motion Craft",
    badge: "AI Workflow",
    period: "2024 – Present",
    org: "JSW · Independent",
    cover: "works/ai-firefly.jpg",
    blurb: "Combining Midjourney, Firefly, Runway, Kling, and Photoshop compositing to push sports key art and motion posters.",
    role: "Creative Lead",
    tools: "AI · Blender",
    highlights: [
      "AI-assisted concepting with Midjourney & Firefly",
      "Seamless Photoshop compositing & color grading",
      "Motion posters for IPL Auction, WPL & Champions Trophy",
      "Rapid campaign prototyping for live sports moments",
    ],
    gallery: [
      "works/ai-firefly.jpg",
      "works/ai-midjourney.jpg",
      "works/ai-genai.jpg",
      "works/ai-chatgpt.jpg",
      "works/ai-bharatgas.jpg",
    ],
  },
  {
    id: "print-outdoor",
    name: "Print & Stadium",
    badge: "Outdoor",
    period: "2021 – 2025",
    org: "Campaigns & Print",
    cover: "works/pbks-outdoor-1.jpg",
    blurb: "Large-format stadium outdoor branding, exhibition walls, editorial posters, and commercial print campaigns.",
    role: "Senior Designer",
    tools: "Print · InDesign",
    highlights: [
      "Punjab Kings stadium outdoor & perimeter branding",
      "Large-format exhibition stand walls & wayfinding",
      "Theatrical & editorial poster compositions",
      "Print-ready production across OOH and merchandise",
    ],
    gallery: [
      "works/pbks-outdoor-1.jpg",
      "works/pbks-outdoor-2.jpg",
      "works/interstal-wall.jpg",
      "works/goat-life.jpg",
      "works/italian-foodfest.jpg",
    ],
  },
  {
    id: "logo-identity",
    name: "Brand & Identity",
    badge: "Logos",
    period: "2020 – 2024",
    org: "Brand Systems",
    cover: "works/m2r2-landing.jpg",
    blurb: "Visual identities, logo marks, esports crests, and physical brand touchpoints from lightboxes to stationery.",
    role: "Brand Designer",
    tools: "Illustrator",
    highlights: [
      "M2R2 complete identity, lightbox & stationery suite",
      "Esports team crests & apparel-ready emblems",
      "Hospitality, F&B & real-estate brand marks",
      "Scalable vector systems for print and digital",
    ],
    gallery: [
      "works/m2r2-landing.jpg",
      "works/m2r2-lightbox.jpg",
      "works/youmatter.jpg",
      "works/fudio.jpg",
      "works/para-commandos.jpg",
    ],
  },
]

export const WORKS: WorkItem[] = [
  // Sports Design
  { id: "mi-2024-kv", title: "Mumbai Indians 2024 Key Visual", category: "Sports Design", src: "works/mi-2024-kv.jpg", type: "image" },
  { id: "mi-semis", title: "MI — Into the Semis", category: "Sports Design", src: "works/mi-semis.jpg", type: "image" },
  { id: "mi-rushmore", title: "MI Hero Mount Rushmore", category: "Sports Design", src: "works/mi-rushmore.jpg", type: "image" },
  { id: "bumrah-poster", title: "Jasprit Bumrah Movie Poster", category: "Sports Design", src: "works/bumrah-poster.jpg", type: "image" },
  { id: "ro-otd", title: "Rohit Sharma — On This Day", category: "Sports Design", src: "works/ro-otd.jpg", type: "image" },
  { id: "mirabai-olympics", title: "Mirabai Chanu — Olympics", category: "Sports Design", src: "works/mirabai-olympics.jpg", type: "image" },
  { id: "nba-poster", title: "NBA Campaign Poster", category: "Sports Design", src: "works/nba-poster.jpg", type: "image" },
  { id: "pkl-season", title: "Pro Kabaddi League Season", category: "Sports Design", src: "works/pkl-season.jpg", type: "image" },
  { id: "vikram-poster", title: "Vikram Tribute Poster", category: "Sports Design", src: "works/vikram-poster.jpg", type: "image" },
  { id: "maxwell-poster", title: "Glenn Maxwell Key Visual", category: "Sports Design", src: "works/maxwell-poster.jpg", type: "image" },

  // JSW & BFC
  { id: "bfc-1", title: "Bengaluru FC Matchday I", category: "JSW & BFC", src: "works/bfc-1.jpg", type: "image" },
  { id: "bfc-2", title: "Bengaluru FC Matchday II", category: "JSW & BFC", src: "works/bfc-2.jpg", type: "image" },
  { id: "bfc-3", title: "Bengaluru FC Campaign III", category: "JSW & BFC", src: "works/bfc-3.jpg", type: "image" },
  { id: "bfc-4", title: "Bengaluru FC Campaign IV", category: "JSW & BFC", src: "works/bfc-4.jpg", type: "image" },
  { id: "jsw-1", title: "JSW Sports Social I", category: "JSW & BFC", src: "works/jsw-1.jpg", type: "image" },
  { id: "jsw-2", title: "JSW Sports Social II", category: "JSW & BFC", src: "works/jsw-2.jpg", type: "image" },
  { id: "jsw-3", title: "JSW Sports Social III", category: "JSW & BFC", src: "works/jsw-3.jpg", type: "image" },
  { id: "jsw-4", title: "JSW Sports Social IV", category: "JSW & BFC", src: "works/jsw-4.jpg", type: "image" },

  // AI & Motion
  { id: "champions-trophy", title: "Champions Trophy Motion Poster", category: "AI & Motion", src: "works/champions-trophy.mp4", type: "video" },
  { id: "wpl-motion", title: "WPL Motion Poster", category: "AI & Motion", src: "works/wpl-motion.mp4", type: "video" },
  { id: "jsw-sports-day", title: "JSW Sports Day Motion", category: "AI & Motion", src: "works/jsw-sports-day.mp4", type: "video" },
  { id: "ai-firefly", title: "Photoshop + Firefly Composite", category: "AI & Motion", src: "works/ai-firefly.jpg", type: "image" },
  { id: "ai-midjourney", title: "Midjourney + Photoshop Key Art", category: "AI & Motion", src: "works/ai-midjourney.jpg", type: "image" },
  { id: "ai-genai", title: "Photoshop Generative AI", category: "AI & Motion", src: "works/ai-genai.jpg", type: "image" },
  { id: "ai-chatgpt", title: "ChatGPT + Photoshop Concept", category: "AI & Motion", src: "works/ai-chatgpt.jpg", type: "image" },
  { id: "ai-bharatgas", title: "Bharat Gas AI Carousel", category: "AI & Motion", src: "works/ai-bharatgas.jpg", type: "image" },

  // Print & Outdoor
  { id: "pbks-outdoor-1", title: "Punjab Kings Stadium Branding I", category: "Print & Outdoor", src: "works/pbks-outdoor-1.jpg", type: "image" },
  { id: "pbks-outdoor-2", title: "Punjab Kings Stadium Branding II", category: "Print & Outdoor", src: "works/pbks-outdoor-2.jpg", type: "image" },
  { id: "interstal-wall", title: "Interstal Exhibition Stand Wall", category: "Print & Outdoor", src: "works/interstal-wall.jpg", type: "image" },
  { id: "goat-life", title: "The Goat Life Poster", category: "Print & Outdoor", src: "works/goat-life.jpg", type: "image" },
  { id: "italian-foodfest", title: "Italian Food Fest Print", category: "Print & Outdoor", src: "works/italian-foodfest.jpg", type: "image" },
  { id: "leamington-ad", title: "Leamington Print Ad", category: "Print & Outdoor", src: "works/leamington-ad.jpg", type: "image" },

  // Logos & Identity
  { id: "m2r2-landing", title: "M2R2 Brand Identity", category: "Logos & Identity", src: "works/m2r2-landing.jpg", type: "image" },
  { id: "m2r2-lightbox", title: "M2R2 Lightbox Signage", category: "Logos & Identity", src: "works/m2r2-lightbox.jpg", type: "image" },
  { id: "youmatter", title: "You Matter Identity", category: "Logos & Identity", src: "works/youmatter.jpg", type: "image" },
  { id: "fudio", title: "Fudio Logo Design", category: "Logos & Identity", src: "works/fudio.jpg", type: "image" },
  { id: "para-commandos", title: "Para Commandos Esports Crest", category: "Logos & Identity", src: "works/para-commandos.jpg", type: "image" },
  { id: "hands-on-people", title: "Hands On People Identity", category: "Logos & Identity", src: "works/hands-on-people.jpg", type: "image" },
]
