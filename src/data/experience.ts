export interface Bullet {
  /** Optional bold lead-in. */
  lead?: string;
  text: string;
  /** Renders in the stronger "note" style. */
  emphasis?: boolean;
}

export interface Role {
  title: string;
  org: string;
  dates: string;
  bullets: Bullet[];
}

// TODO: replace [START] and [END] with real dates before publishing.
export const experience: Role[] = [
  {
    title: 'Software Engineer',
    org: 'Remote.com (Philippines)',
    dates: 'June to October 2026',
    bullets: [
      {
        text: 'Own the Angular frontend and .NET API layer of a corporate actions and trade processing platform in a two-person team, delivering features end to end.',
      },
      {
        lead: 'DataHub, a report and data export platform.',
        text: 'Built on .NET with Snowflake and SQL Server, generating password-protected CSV, Excel and PDF files. Large exports run as Hangfire background jobs, streaming rows in bounded, size-aware batches to keep memory use under control on multi-million-row exports.',
      },
      {
        text: 'Built PDF ingestion for OTC trade confirmations, replacing manual data entry, and delivered automated trade file download and monitoring that replaced a legacy console app.',
      },
      {
        text: 'Designed with Clean Architecture, CQRS (MediatR) and vertical slices, and built a dynamic AND/OR report filter builder so users create their own report queries.',
      },
      {
        text: 'Use agentic AI coding workflows to speed up implementation, documentation and refactoring, with human review on every change.',
      },
    ],
  },
  {
    title: 'Product Developer',
    org: 'DXC Technology, Life Sciences Regulatory Platform',
    dates: 'Sep 2022 to May 2026',
    bullets: [
      {
        text: 'Developed full-stack features for a global regulatory platform supporting clinical submissions in 5+ regions (AU, US, EU, JP, KR and others).',
      },
      {
        lead: 'Sensitive, regulated clinical data.',
        text: 'Wrote, tested and reviewed all code manually under strict data-handling controls, with no AI assistants involved.',
        emphasis: true,
      },
      {
        text: 'Built drag-and-drop file management, validation systems and document property interfaces that reduced manual steps and rework for submission teams.',
      },
      {
        text: 'Translated regulatory requirements and business logic into maintainable software, working with Business Analysts and stakeholders.',
      },
      {
        text: 'Diagnosed and fixed critical bugs across multiple modules, improving stability and reducing production issues.',
      },
    ],
  },
  {
    title: 'Part-time Technical Instructor',
    org: 'Prosper I.T Consulting (Remote Freelance)',
    dates: 'Feb 2025 to September 2026',
    bullets: [
      { text: 'Maintained and extended the LMS with new features that improved the student learning experience.' },
      { text: 'Worked with instructors and operations to turn platform improvement ideas into technical solutions.' },
      {
        text: 'Mentored students on software development best practices and prepared them for entry-level developer roles.',
      },
      { text: 'Tracked course completions to support learner outcomes.' },
    ],
  },
  {
    title: 'Developer',
    org: 'IMBC Services Corporation',
    dates: 'Jun 2021 to Aug 2022',
    bullets: [
      { text: 'Built healthcare analytics dashboards and clinic management tools for medical workflows.' },
      { text: 'Built a responsive Angular appointment site that streamlined booking and reviews.' },
      { text: 'Migrated and validated client data, preserving integrity across platform databases.' },
      { text: 'Implemented client-requested features and resolved reported bugs.' },
    ],
  },
  {
    title: 'Associate Software Engineer',
    org: 'Accenture, Makati',
    dates: 'Apr 2019 to Nov 2021',
    bullets: [
      {
        text: 'Built embedded C automation tools that replaced manual test execution, cutting testing time and human intervention.',
      },
      { text: 'Made end-to-end test runs continue after errors instead of needing manual restarts.' },
      { text: 'Built a logging system for errors and test results to improve traceability and debugging.' },
      { text: 'Wrote unit tests to catch issues early in development.' },
    ],
  },
];
