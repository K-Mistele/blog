# AGENTS.md - Development Guidelines

## Build/Lint/Test Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint with auto-fix
- `npm run serve` - Start production server
- No test framework configured - verify changes manually

## Blog Structure & Content

- **Template**: Tailwind Next.js Starter Blog
- **Posts**: MDX files in `data/blog/` directory
- **Assets**: Images and media in `public/static/content/` (organized by post)
- **Frontmatter**: Required fields: title, date, tags, draft, summary
- **Code blocks**: Always use GitHub-style with language and filename: ```language filename=name.ext

## Code Style Guidelines

- **TypeScript**: Use TypeScript with strict null checks enabled
- **Imports**: Use `@/` path aliases for components, data, layouts, css
- **Components**: React functional components with TypeScript interfaces
- **Naming**: PascalCase for components, camelCase for variables/functions
- **Formatting**: Prettier with Tailwind CSS plugin for class sorting
- **Files**: Use `.tsx` for React components, `.ts` for utilities

## Cursor Rules (from .cursor/rules/rules.mdc)

1. Thoroughly search codebase before making changes to understand structure
2. Keep responses concise with high information density
3. Make minimal changes only - avoid unnecessary reformatting or refactoring
4. Don't alter spacing, semicolons, function signatures unless directly necessary

## Framework Details

- Next.js 15 with App Router, React 19, TypeScript, Tailwind CSS
- Content managed via Contentlayer2 for MDX blog posts
- Uses Pliny for analytics and search functionality
