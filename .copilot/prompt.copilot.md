# Role and Ownership

Act as a Senior Solution Architect, Senior UI/UX Engineer, and Principal Frontend Developer.

You are responsible for designing and implementing this React + TypeScript portfolio application as a production-quality product representing a Full-Stack Software Engineer.

Think and work as the owner of the frontend system, not as a code generator that only creates components.

You own and are accountable for:

- Frontend architecture and scalable folder organization
- UI/UX decision-making and professional visual presentation
- Reusable component design and composition
- Tailwind CSS design-token governance
- Responsive design for mobile, tablet, laptop, and desktop
- Accessibility, semantic HTML, keyboard navigation, focus states, ARIA correctness, and color contrast
- TypeScript correctness, explicit types, and maintainable component APIs
- Performance, dependency discipline, and clean rendering patterns
- Loading, disabled, hover, active, error, empty, and focus-visible states where relevant
- Cross-browser behavior and mobile usability
- Linting, build validation, and maintainable source code

Think before writing code.

Do not choose the first obvious implementation if it causes:

- Technical debt
- Duplicate styles
- Hardcoded configuration
- Poor accessibility
- Weak mobile experience
- Unnecessary dependencies
- Inconsistent design tokens
- Overly coupled components
- Premature abstractions
- A structure that will not scale

Use this decision order:

1. Accessibility and semantic correctness
2. User experience and responsive behavior
3. Maintainability and reusability
4. Type safety and predictable component APIs
5. Tailwind design-token consistency
6. Performance and minimal dependencies
7. Visual polish and professional presentation

---

# Repository Context

This is a personal portfolio application for:

```text
Name: Vikram Ganesan
Role: Full-Stack Software Engineer
Location: Chennai, Tamil Nadu, India
Portfolio: [https://vikramg.vercel.app/](https://vikramg.vercel.app/)
Email: gvikram989@gmail.com
GitHub: [https://github.com/Vikram-Ganesan](https://github.com/Vikram-Ganesan)
LinkedIn: [https://www.linkedin.com/in/vikramganesan/](https://www.linkedin.com/in/vikramganesan/)
```

Tech stack:

```text
React
TypeScript
Vite
Tailwind CSS
npm
```

The Vite development server must run at:

```text
http://localhost:3000
```

Before making changes:

1. Inspect the existing repository structure.
2. Inspect `package.json`.
3. Inspect the installed Tailwind CSS version.
4. Inspect `src/index.css`.
5. Inspect `vite.config.ts`.
6. Inspect existing TypeScript and ESLint configuration.
7. Reuse existing project conventions where they are valid.

Do not introduce Bootstrap, Material UI, Chakra UI, Ant Design, styled-components, CSS Modules, Sass, Redux, Zustand, React Query, or any other dependency unless it already exists in the repository and there is a compelling reason to use it.

Do not replace project tooling or configuration without a technical reason.

---

# Styling System

This project uses Tailwind CSS.

Follow these rules strictly:

- Use Tailwind utility classes directly in TSX components.
- Do not create CSS Modules.
- Do not create component-level `.css`, `.scss`, or `.module.css` files.
- Do not create a duplicate TypeScript design-token file containing colors, spacing, radius, breakpoints, or typography values.
- Do not use arbitrary values repeatedly, such as:

```tsx
bg-[#2563EB]
px-[17px]
rounded-[11px]
```

- Do not dynamically build Tailwind class names such as:

```ts
`bg-${color}-600``text-${size}`;
```

Tailwind scans for complete class names in source code; use typed maps containing complete static class strings.

- Use a shared `cn` utility for conditional Tailwind class composition when needed.
- Use the existing Tailwind token configuration already present in the project.

## Tailwind Version Rule

Inspect the installed Tailwind version before implementation.

### If Tailwind v4 is installed

Define project-level semantic design tokens in:

```text
src/index.css
```

Use the Tailwind v4 `@theme` directive.

Example intent only:

```css
@import 'tailwindcss';

@theme {
  --color-surface-primary: #ffffff;
  --color-surface-secondary: #f8fafc;
  --color-surface-inverse: #0f172a;

  --color-content-primary: #0f172a;
  --color-content-secondary: #475569;
  --color-content-muted: #64748b;
  --color-content-inverse: #ffffff;

  --color-brand-50: #eff6ff;
  --color-brand-500: #2563eb;
  --color-brand-600: #1d4ed8;
  --color-brand-700: #1e40af;

  --color-border-default: #e2e8f0;
  --color-border-strong: #cbd5e1;

  --radius-control: 0.625rem;
  --radius-card: 1rem;

  --shadow-navbar: 0 1px 3px rgb(15 23 42 / 0.08);
  --shadow-card: 0 8px 30px rgb(15 23 42 / 0.08);
}
```

### If Tailwind v3 is installed

Define semantic token extensions in:

```text
tailwind.config.ts
```

Do not create both a Tailwind v4 `@theme` system and a separate Tailwind v3 configuration system.

## Design Direction

The design must be:

```text
Modern
Minimal
Professional
Calm
Accessible
Premium but not flashy
Appropriate for a Full-Stack Software Engineer portfolio
```

Avoid:

```text
Generic Bootstrap appearance
Heavy gradients
Excessive glassmorphism
Neon effects
Overuse of shadows
Tiny typography
Low-contrast text
Overly decorative animations
```

---

# Scope of This Task

Rework the implementation from the beginning, but only implement these items now:

1. Tailwind design-token foundation
2. Typed profile configuration
3. Typed navigation configuration
4. Reusable `Avatar` base component
5. Reusable `Button` base component
6. Responsive and accessible `NavBar` layout component
7. Minimal app integration and anchor sections needed to validate navigation behavior
8. Folder structure for future reusable components

Do not build the complete Hero, About, Skills, Projects, Experience, Contact, Footer, Modal, Loader, or Timeline UI yet.

Create only the required types and folder exports for future components such as Modal, Loader, and Timeline. Do not create unused runtime placeholder components.

---

# Required Folder Structure

Create or update the source structure to follow this organization:

```text
src/
├── assets/
│   ├── images/
│   │   ├── profile/
│   │   └── projects/
│   └── icons/
│
├── components/
│   ├── reusable/
│   │   ├── base/
│   │   │   ├── Avatar/
│   │   │   │   ├── Avatar.tsx
│   │   │   │   ├── Avatar.types.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.types.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── Loader/
│   │   │   │   ├── Loader.types.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   └── Modal/
│   │   │       ├── Modal.types.ts
│   │   │       └── index.ts
│   │   │
│   │   ├── features/
│   │   │   └── Timeline/
│   │   │       ├── Timeline.types.ts
│   │   │       └── index.ts
│   │   │
│   │   └── layout/
│   │       └── NavBar/
│   │           ├── NavBar.tsx
│   │           ├── NavBar.types.ts
│   │           └── index.ts
│
├── config/
│   ├── navigation.config.ts
│   ├── profile.config.ts
│   └── social-links.config.ts
│
├── constants/
│   └── component.constants.ts
│
├── features/
│   ├── home/
│   ├── about/
│   ├── skills/
│   ├── projects/
│   ├── experience/
│   └── contact/
│
├── lib/
│   └── cn.ts
│
├── types/
│   ├── common.types.ts
│   └── navigation.types.ts
│
├── utils/
│   └── string.utils.ts
│
├── App.tsx
├── index.css
└── main.tsx
```

## Folder Responsibilities

```text
components/reusable/base
  Generic, domain-independent primitives:
  Avatar, Button, Loader, Modal, Input, Badge, etc.

components/reusable/features
  Reusable higher-level presentation patterns:
  Timeline, ProjectCard, ExperienceCard, etc.

components/layout
  Application layout and navigation elements:
  NavBar, Footer, PageContainer, etc.

features
  Portfolio-specific sections:
  home, about, skills, projects, experience, contact

config
  Typed static application data:
  profile details, navigation items, social links, project data later

constants
  Non-visual shared component constants:
  default variants, default component sizes, IDs, etc.

lib
  Shared library utilities:
  `cn` class-name helper

types
  Shared TypeScript types only

utils
  Pure reusable utility functions:
  string helpers, formatting helpers, initials utility
```

Rules:

- `Avatar`, `Button`, and `NavBar` must be implemented completely.
- `Loader`, `Modal`, and `Timeline` must contain only types and barrel exports in this task.
- Use a component folder when a component has types, tests, multiple files, or is expected to grow.
- Do not create unnecessary folders for tiny, private, single-use components.
- Do not place portfolio-specific components under `reusable/base`.
- Do not create a global dumping-ground `components` folder.

---

# Shared Class Name Utility

Create:

```text
src/lib/cn.ts
```

Use the existing `clsx` utility only if it is already installed.

If no class-name utility exists, create a small typed utility without adding an unnecessary dependency.

It must support conditional class names safely.

Expected usage:

```tsx
className={cn(
  "inline-flex items-center justify-center",
  variantClasses[variant],
  sizeClasses[size],
  fullWidth && "w-full",
  className,
)}
```

Do not use an unsafe type such as `any`.

---

# Profile Configuration

Create:

```text
src/config/profile.config.ts
```

Use this exact typed configuration:

```ts
export const PROFILE_CONFIG = {
  fullName: 'Vikram Ganesan',
  role: 'Full-Stack Software Engineer',
  portfolioUrl: '[https://vikramg.vercel.app/](https://vikramg.vercel.app/)',
  email: 'gvikram989@gmail.com',
  location: 'Chennai, Tamil Nadu, India',
  githubUrl: '[https://github.com/Vikram-Ganesan](https://github.com/Vikram-Ganesan)',
  linkedInUrl:
    '[https://www.linkedin.com/in/vikramganesan/](https://www.linkedin.com/in/vikramganesan/)',
} as const;
```

Requirements:

- Import and use this configuration wherever profile data is needed.
- Do not hardcode:
  - `Vikram Ganesan`
  - `VG`
  - `Full-Stack Software Engineer`
  - email address
  - portfolio URL
  - location
  - GitHub URL
  - LinkedIn URL
    inside UI components.

---

# Navigation Types and Configuration

Create:

```text
src/types/navigation.types.ts
src/config/navigation.config.ts
```

Define a typed `NavigationItem` interface or type:

```ts
export interface NavigationItem {
  readonly id: string;
  readonly label: string;
  readonly href: string;
}
```

Create this typed, readonly configuration:

```ts
export const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'contact', label: 'Contact', href: '#contact' },
] as const;
```

Requirements:

- The NavBar must import and map over `NAVIGATION_ITEMS`.
- Do not hardcode navigation text, section IDs, or `href` hashes inside `NavBar.tsx`.

---

# Initials Utility

Create:

```text
src/utils/string.utils.ts
```

Implement this function:

```ts
export function getInitials(fullName: string): string;
```

Required behavior:

1. Trim leading, trailing, and repeated whitespace.
2. Return an empty string for empty or whitespace-only input.
3. Split the name by whitespace.
4. For names with two or more words:
   - Return the first character of the first word.
   - Return the first character of the last word.
5. Convert initials to uppercase.
6. `getInitials("Vikram Ganesan")` must return `"VG"`.
7. For a single-word name:
   - Return the first two characters in uppercase if at least two characters are available.
   - Return the first character in uppercase if only one character is available.
8. Do not use `any`.
9. Keep it a pure function.

---

# Reusable Base Component: Avatar

Create:

```text
src/components/reusable/base/Avatar/
```

Files:

```text
Avatar.tsx
Avatar.types.ts
index.ts
```

## Avatar Type Requirements

Create explicit types for:

```ts
export type AvatarSize = 'small' | 'medium' | 'large';

export interface AvatarProps {
  readonly fullName: string;
  readonly size?: AvatarSize;
  readonly className?: string;
  readonly ariaLabel?: string;
}
```

## Avatar Implementation Requirements

- Use `getInitials(fullName)` internally.
- Do not accept hardcoded initials as the primary input.
- Do not hardcode `"VG"` anywhere.
- Render initials inside a circular avatar.
- Use Tailwind utility classes.
- Keep variant and size class maps as typed static objects with complete Tailwind class strings.
- Use the shared `cn` helper.
- Default size must come from `component.constants.ts`, not be hardcoded directly inside the component.
- If `ariaLabel` is not supplied, derive a meaningful label from `fullName`.
- Handle an empty full name safely:
  - Render a fallback visual value such as `?`.
  - Provide a meaningful accessible label.
- Use `span` or another appropriate non-interactive semantic element.
- Do not use inline style objects.
- Ensure text contrast is sufficient.

Expected usage:

```tsx
<Avatar
  fullName={PROFILE_CONFIG.fullName}
  size="medium"
  ariaLabel={`${PROFILE_CONFIG.fullName} profile avatar`}
/>
```

---

# Reusable Base Component: Button

Create:

```text
src/components/reusable/base/Button/
```

Files:

```text
Button.tsx
Button.types.ts
index.ts
```

## Button Type Requirements

Create explicit types:

```ts
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost' | 'danger';

export type ButtonSize = 'small' | 'medium' | 'large';
```

Create `ButtonProps` that safely extends native button HTML attributes.

Support:

```ts
variant?: ButtonVariant;
size?: ButtonSize;
fullWidth?: boolean;
loading?: boolean;
leftIcon?: ReactNode;
rightIcon?: ReactNode;
className?: string;
children: ReactNode;
```

## Button Implementation Requirements

- Render a native `<button>`.
- Default `type` must be `"button"` unless the consuming component overrides it.
- Default variant and size must be sourced from `component.constants.ts`.
- Use typed `Record<ButtonVariant, string>` and `Record<ButtonSize, string>` mappings with complete static Tailwind class names.
- Do not dynamically compose Tailwind utility names.
- Use `cn()` for class composition.
- Set `disabled={disabled || loading}`.
- Set `aria-busy={loading || undefined}`.
- Preserve any caller-supplied `disabled` state.
- Visually communicate disabled and loading states.
- Include `focus-visible` classes.
- Include a suitable transition but respect motion preferences globally.
- Support optional left and right icon slots.
- Avoid requiring an icon library.
- Use a small text-based or CSS-based loading indicator only if it does not require new dependencies.
- Ensure button variants have accessible contrast.
- Ensure adequate mobile touch target dimensions.
- Use Tailwind semantic theme utilities, not repetitive arbitrary hex values.
- Do not use inline styles.

Expected usage:

```tsx
<Button variant="primary" size="medium">
  Let’s Connect
</Button>

<Button variant="secondary" size="medium">
  View Projects
</Button>
```

---

# Component Constants

Create:

```text
src/constants/component.constants.ts
```

Store non-visual component defaults here.

At minimum:

```ts
import type { AvatarSize } from '../components/reusable/base/Avatar';
import type { ButtonSize, ButtonVariant } from '../components/reusable/base/Button';

export const DEFAULT_AVATAR_SIZE: AvatarSize = 'medium';

export const DEFAULT_BUTTON_VARIANT: ButtonVariant = 'primary';
export const DEFAULT_BUTTON_SIZE: ButtonSize = 'medium';

export const MOBILE_NAVIGATION_ID = 'mobile-navigation';
```

Avoid circular dependencies. If importing types from component folders causes a circular dependency, move shared variant/size union types into a neutral shared types file and import them from there.

Do not put visual colors, spacing, typography, radii, or breakpoints in this file.

---

# Layout Component: NavBar

Create:

```text
src/components/layout/NavBar/
```

Files:

```text
NavBar.tsx
NavBar.types.ts
index.ts
```

## NavBar Requirements

Use:

- Semantic `<header>`
- Semantic `<nav>`
- Navigation list markup where appropriate
- The reusable `Avatar`
- The reusable `Button`
- `PROFILE_CONFIG`
- `NAVIGATION_ITEMS`
- Local React state for mobile menu open/close behavior only

### Desktop Layout

Use this hierarchy:

```text
[ VG ]  Vikram Ganesan                       Home About Skills Projects Experience Contact    [ Let’s Connect ]
        Full-Stack Software Engineer
```

Left side requirements:

- Render the reusable `Avatar`.
- Pass `PROFILE_CONFIG.fullName`.
- Display `PROFILE_CONFIG.fullName`.
- Display `PROFILE_CONFIG.role`.
- Do not hardcode any profile values.

Navigation requirements:

- Render links by mapping through `NAVIGATION_ITEMS`.
- Do not hardcode labels or hashes.
- Use appropriate text size, spacing, hover state, and focus-visible state.
- Use a `<ul>` and `<li>` structure for grouped navigation links.

CTA requirements:

- Use the reusable Button component.
- Use `variant="primary"`.
- Text: `Let’s Connect`.
- Navigate to `#contact`.
- On desktop, show the CTA on the right.
- Do not use a raw `<button>` for this CTA if the component is intended to navigate; choose an accessible approach:
  - Either allow the Button component to render as a link through a carefully typed polymorphic API, or
  - Keep the base Button as a native button and use `window.location.hash = "contact"` with an accessible click handler, or
  - Use a semantic anchor styled through an explicitly designed reusable link/button approach.
- Prefer the simplest accessible solution that does not over-engineer the Button API.
- Explain the chosen approach in the final report.

### Mobile Layout

For smaller screens:

- Hide desktop navigation links and desktop CTA.
- Display a mobile menu toggle control.
- Do not add an icon dependency.
- If no existing icon library is installed, use accessible text such as `Menu` / `Close` or an inline SVG with correct semantics.
- Mobile toggle must use:
  - `type="button"`
  - `aria-label`
  - `aria-expanded`
  - `aria-controls={MOBILE_NAVIGATION_ID}`
- Render a mobile menu container with `id={MOBILE_NAVIGATION_ID}`.
- Mobile links must map from `NAVIGATION_ITEMS`.
- Clicking a mobile navigation link must close the menu.
- Include the `Let’s Connect` CTA within the mobile menu.
- Ensure the mobile menu is keyboard accessible.
- Prevent horizontal scrolling or layout overflow.
- Make touch targets usable on mobile.

### Sticky Header

Use a sticky Navbar only if it is implemented cleanly.

If sticky:

- Use `sticky top-0`.
- Use a semantic background and border/shadow.
- Ensure the z-index is sufficient.
- Ensure anchor sections account for the sticky header with `scroll-mt-*` utilities.
- Do not cause content overlap.

### NavBar Accessibility

- Navigation links must have visible `focus-visible` states.
- The menu toggle must be keyboard-operable.
- Do not incorrectly use `aria-current` unless active-section logic is reliably implemented.
- Do not build scroll spy in this task.
- Do not trap focus unless creating a true modal/drawer behavior that requires it.
- Ensure menu-open state is visually obvious.
- Use meaningful aria labels.

---

# Future Components: Types and Exports Only

Do not create runtime implementations yet.

## Loader

Location:

```text
src/components/reusable/base/Loader/
```

Create `Loader.types.ts` with:

```ts
export type LoaderSize = 'small' | 'medium' | 'large';

export interface LoaderProps {
  readonly size?: LoaderSize;
  readonly label?: string;
  readonly fullScreen?: boolean;
}
```

Add an `index.ts` that exports these types.

Future requirements:

```text
role="status"
screen-reader label
token-based Tailwind sizes/colors
```

## Modal

Location:

```text
src/components/reusable/base/Modal/
```

Create `Modal.types.ts` with a future API such as:

```ts
import type { ReactNode } from 'react';

export interface ModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly title?: string;
  readonly children: ReactNode;
}
```

Add an `index.ts` that exports these types.

## Timeline

Location:

```text
src/components/reusable/features/Timeline/
```

Create `Timeline.types.ts` with:

```ts
export type TimelineOrientation = 'horizontal' | 'vertical';

export interface TimelineItem {
  readonly id: string;
  readonly title: string;
  readonly subtitle?: string;
  readonly description?: string;
  readonly period?: string;
}

export interface TimelineProps {
  readonly items: readonly TimelineItem[];
  readonly orientation?: TimelineOrientation;
}
```

Add an `index.ts` that exports these types.

Future Timeline requirements:

```text
One reusable component
horizontal and vertical layouts controlled by props
no separate duplicated timeline implementations
```

---

# Global Styles

Update `src/index.css` according to the detected Tailwind version.

It must include:

- Tailwind import/directives appropriate to the installed version
- Semantic Tailwind design tokens
- Global base styles only
- `html { scroll-behavior: smooth; }` if appropriate
- Base `body` colors using semantic theme utilities or CSS variables
- Consistent font family
- A global `prefers-reduced-motion` rule to reduce animation and transition behavior
- No component-specific styles that should belong in Tailwind classes

Ensure global styles do not fight Tailwind utilities.

---

# App Integration

Update `App.tsx` only enough to render and validate the NavBar.

Render:

```tsx
<NavBar />
```

Include minimal semantic anchor sections so each navigation link has a valid target:

```text
#home
#about
#skills
#projects
#experience
#contact
```

Example implementation intent:

```tsx
import { NavBar } from './components/layout/NavBar';

export function App(): JSX.Element {
  return (
    <>
      <NavBar />

      <main>
        <section id="home" className="scroll-mt-24">
          <h1>Vikram Ganesan</h1>
        </section>

        <section id="about" className="scroll-mt-24">
          <h2>About</h2>
        </section>

        <section id="skills" className="scroll-mt-24">
          <h2>Skills</h2>
        </section>

        <section id="projects" className="scroll-mt-24">
          <h2>Projects</h2>
        </section>

        <section id="experience" className="scroll-mt-24">
          <h2>Experience</h2>
        </section>

        <section id="contact" className="scroll-mt-24">
          <h2>Contact</h2>
        </section>
      </main>
    </>
  );
}
```

Do not build final content for these sections in this task. They exist only to validate navigation links.

---

# TypeScript Rules

Follow these rules strictly:

- Use strict TypeScript.
- Do not use `any`.
- Do not use `unknown` as a shortcut to bypass typing.
- Use explicit interfaces or type aliases for component props, configuration objects, constants, and shared types.
- Prefer string union types for variants and sizes.
- Use `readonly` arrays and `as const` for static configuration.
- Use named exports.
- Do not make props optional unless a sensible default exists.
- Avoid needless generics.
- Use descriptive naming.
- Do not use enums unless they provide a clear advantage over union types.
- Avoid circular imports.
- Do not create unnecessary custom hooks for static presentational logic.

---

# Tailwind Quality Rules

- Use semantic Tailwind token utilities whenever available.
- Avoid repeated arbitrary values.
- Keep class maps static and type-safe.
- Use responsive Tailwind variants such as `sm:`, `md:`, `lg:`, and `xl:` appropriately.
- Use mobile-first responsive design.
- Use accessible focus styles, for example:

```text
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-brand-500
focus-visible:ring-offset-2
```

- Ensure interactive elements have hover, active, disabled, and focus-visible behavior where relevant.
- Ensure all important text meets accessible contrast requirements.
- Use `motion-reduce:` variants or global reduced-motion support when adding transitions.
- Do not use arbitrary raw values in JSX unless there is no semantic token alternative and you document the reason.

---

# Acceptance Criteria

Before finalizing, verify every requirement below.

## Architecture

- [ ] `Avatar`, `Button`, and `NavBar` are implemented in their own folders.
- [ ] Base, feature, layout, config, constants, types, lib, and utils folders have clear responsibilities.
- [ ] Loader is under `reusable/base`, not feature.
- [ ] Timeline is under `reusable/features`.
- [ ] No CSS Modules, Sass files, or component-level CSS files were created.
- [ ] No unnecessary dependencies were added.
- [ ] Navigation values come from typed configuration.
- [ ] Profile data comes from typed configuration.

## Avatar

- [ ] Avatar derives initials dynamically from `fullName`.
- [ ] `"VG"` is not hardcoded in any component.
- [ ] `Vikram Ganesan` renders as `VG`.
- [ ] Avatar supports small, medium, and large variants.
- [ ] Avatar has a meaningful accessible label.
- [ ] Avatar styles use Tailwind static utilities.

## Button

- [ ] Button supports `primary`, `secondary`, `tertiary`, `outline`, `ghost`, and `danger` variants.
- [ ] Button supports `small`, `medium`, and `large` sizes.
- [ ] Button uses a native `<button>`.
- [ ] Default type is `"button"`.
- [ ] Loading state disables the button.
- [ ] Loading state uses `aria-busy`.
- [ ] Button supports icon slots.
- [ ] Button supports full width.
- [ ] Button has visible focus-visible styles.
- [ ] Button class names are static and Tailwind-detectable.
- [ ] No raw visual values are duplicated inside the component.

## NavBar

- [ ] The identity section uses `PROFILE_CONFIG`.
- [ ] Avatar receives `PROFILE_CONFIG.fullName`.
- [ ] Navigation items map from `NAVIGATION_ITEMS`.
- [ ] No labels or hashes are hardcoded inside `NavBar.tsx`.
- [ ] Desktop layout includes identity, navigation links, and CTA.
- [ ] Mobile layout includes an accessible menu button.
- [ ] Mobile menu has `aria-expanded` and `aria-controls`.
- [ ] Mobile navigation links close the menu after selection.
- [ ] CTA remains accessible on mobile.
- [ ] No mobile horizontal overflow occurs.
- [ ] Nav links and controls have visible keyboard focus styles.
- [ ] Sticky behavior does not overlap anchor section headings.

## Validation

Run:

```bash
npm run lint
npm run build
```

If the project has tests, run applicable tests as well.

Fix all errors caused by the implementation.

Do not state that a command, test, browser check, visual review, or accessibility validation occurred unless it actually ran or was verified.

---

# Final Response Format

After implementation, provide a concise report in exactly this structure:

## Summary

State what was implemented.

## Architecture Decisions

List the key folder-structure, Tailwind-token, component-design, and accessibility decisions.

## Files Added or Updated

List files created or changed.

## Validation

List the commands actually run and their results.

## Next Steps

List logical next work items, for example:

- Build the Hero section
- Add ProjectCard and project configuration
- Implement reusable Timeline for experience
- Add Contact section and form
- Add dark mode
- Add unit/component tests
- Add responsive visual testing

Do not implement anything outside this task scope without first explaining why it is required.
