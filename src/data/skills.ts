export interface SkillGroup {
  heading: string;
  items: string;
}

export const skillGroups: SkillGroup[] = [
  { heading: 'Frontend', items: 'Angular, RxJS, TypeScript, JavaScript, HTML5, CSS3, PrimeNG, Kendo UI, Material UI' },
  {
    heading: 'Backend',
    items: '.NET, C#, ASP.NET Core, Entity Framework Core, MediatR, Hangfire, Python, OpenAPI, JWT',
  },
  { heading: 'Data', items: 'SQL Server, PostgreSQL, Oracle, Snowflake, Supabase, LINQ, stored procedures' },
  {
    heading: 'Architecture',
    items: 'Clean Architecture, DDD principles, CQRS, vertical slice, REST, background processing',
  },
  { heading: 'Cloud and tooling', items: 'Azure, AWS, Docker, CI/CD, Git, Jira, Postman, MSTest, NUnit, xUnit, Jest' },
  {
    heading: 'AI and agentic',
    items: 'Agentic coding workflows, prompt and context engineering, MCP integrations, AI-assisted review and testing',
  },
];
