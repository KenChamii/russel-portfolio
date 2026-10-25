export interface Service {
  title: string;
  description: string;
  tags: string[];
}

export const servicesIntro = 'Available for contract and freelance work. These are the services I offer.';

export const services: Service[] = [
  {
    title: 'Full-stack web apps',
    description:
      'Internal tools, dashboards and customer-facing apps, from database design to a clean Angular interface.',
    tags: ['Angular', '.NET and C#', 'SQL Server, PostgreSQL'],
  },
  {
    title: 'APIs and backend',
    description:
      'Well-structured REST APIs, background jobs and integrations that stay maintainable as the product grows.',
    tags: ['ASP.NET Core', 'Clean Architecture', 'Hangfire, EF Core'],
  },
  {
    title: 'Workflow automation',
    description:
      'Small, practical tools that remove repetitive work: report and data exports, scheduled jobs, checkers and trackers.',
    tags: ['Scheduled jobs', 'Data pipelines', 'Internal tools'],
  },
  {
    title: 'AI-assisted development',
    description:
      'Faster delivery through agentic workflows, with human review on everything and no AI near sensitive data.',
    tags: ['Agentic workflows', 'MCP integrations', 'AI-assisted review'],
  },
  {
    title: 'Deployment and CI/CD',
    description:
      'Containerised builds, automated pipelines and cloud hosting, so releases are repeatable and low risk.',
    tags: ['Docker', 'Azure, AWS', 'CI/CD pipelines'],
  },
];
