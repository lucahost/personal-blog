export default {
  title: `Starting my blog...`,
  tags: ['welcome', 'general'],
  spoiler: 'What it will be about.',
  getContent: () => import('./document.mdx'),
}
