/** Site-wide personal details. Edit here, not in components. */
export const profile = {
  name: 'Russel Dave R. Bayanado',
  initials: 'RB',
  title: 'Software Engineer',
  location: 'Malvar, Batangas, Philippines',
  email: 'rdbayanado@gmail.com',
  /** WhatsApp number in international format, digits only (for example "639171234567"). Leave empty to hide the link. */
  whatsapp: '639398506046',
  /** Subject line used by every "send me a message" link. */
  emailSubject: 'Hello Russel',
  /** Path to a PDF in /public (for example "/resume.pdf"). Leave empty to hide the Resume button. */
  resumeUrl: '/Bayanado_RusselDave_CV.pdf',
  headline: 'I build reliable software for regulated, data-heavy systems.',
  intro:
    "I'm a full-stack engineer with 6+ years in .NET and Angular, working across financial services, life sciences, healthcare and education. I enjoy taking a problem from the screen to the API and seeing it through, and I'm still learning something new on every project.",
  closing:
    "Still doing things manually that a system could handle? Tell me about your manual process. I'll look at what can be automated and deliver results you can measure.",
  photo: {
    src: '/media/photo.jpg',
    webp: '/media/photo.webp',
    alt: 'Portrait of Russel Dave Bayanado',
  },
} as const;
