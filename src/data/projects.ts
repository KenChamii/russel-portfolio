export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  name: string;
  kind: string;
  stack: string[];
  description: string;
  links: ProjectLink[];
  video: {
    src: string;
    poster: string;
    /** width / height of the clip, used to reserve space and avoid layout shift. */
    width: number;
    height: number;
    label: string;
  };
}

export const projects: Project[] = [
  {
    name: 'FrierenHR',
    kind: 'HR management system',
    stack: ['.NET', 'Layered architecture', 'JWT', 'Angular + PrimeNG'],
    description:
      'An HR management application on a layered .NET solution (Core, Application, Infrastructure, Web API) with a dedicated test project and an Angular and PrimeNG frontend.',
    links: [
      { label: 'Live demo', href: 'https://frierenhr.irreversiblechain.workers.dev/' },
      { label: 'GitHub', href: 'https://github.com/KenChamii/FrierenHR' },
    ],
    video: {
      src: '/media/frierenhr.mp4',
      poster: '/media/frierenhr.jpg',
      width: 1000,
      height: 562,
      label: 'Screen recording of the FrierenHR app',
    },
  },
  {
    name: 'MasidBaha',
    kind: 'Flood monitoring PWA',
    stack: ['Angular PWA', '.NET 10', 'PostGIS', 'SignalR + Web Push'],
    description:
      'A flood monitoring PWA for the Philippines. Anyone can pin a flooded road with no account, neighbours confirm or clear it, and every open map updates live. A .NET 10 API on PostGIS with SignalR, web push and offline reports, plus a separate Angular admin portal for moderators.',
    links: [
      { label: 'Live demo', href: 'https://masidbaha.pages.dev/' },
      { label: 'GitHub', href: 'https://github.com/KenChamii/MasidBaha' },
    ],
    video: {
      src: '/media/masidbaha.mp4',
      poster: '/media/masidbaha.jpg',
      width: 720,
      height: 404,
      label: 'Screen recording of the MasidBaha map',
    },
  },
  {
    name: 'TalaanNiAna',
    kind: 'Inventory and POS',
    stack: ['Angular signals', 'ASP.NET Core + EF Core', 'Identity + JWT', 'SQL Server'],
    description:
      'Inventory and point-of-sale for Filipino sari-sari store owners, with a public pitch page. Split into an Angular frontend and an ASP.NET Core backend with token-based authentication.',
    links: [
      { label: 'Live demo', href: 'https://talaanniana.irreversiblechain.workers.dev/' },
      { label: 'GitHub', href: 'https://github.com/KenChamii/TalaanNiAna' },
    ],
    video: {
      src: '/media/talaan.mp4',
      poster: '/media/talaan.jpg',
      width: 720,
      height: 484,
      label: 'Screen recording of the TalaanNiAna app',
    },
  },
];
