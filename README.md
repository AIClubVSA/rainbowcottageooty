# Rainbow Cottages Ooty

A warm, conversion-focused single-page site for Rainbow Cottages Ooty, built with
**Vite + React + TypeScript**, **Tailwind CSS v4**, **GSAP**, **Lenis**, **Framer Motion**, **Rive**, and **React Spring**.

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Customizing

Almost all content lives in **`src/data/site.ts`** — update it in one place:

| What | Where |
| --- | --- |
| Phone numbers, email, address | `CONTACT` |
| Photos | `IMAGES`, `ROOMS`, `GALLERY` |
| Rooms & in-room amenities | `ROOMS` |
| Amenities grid | `AMENITIES` |
| Nearby attractions & distances | `NEARBY` |
| Testimonials | `TESTIMONIALS` |

Brand colors, fonts, and the rainbow accent utilities (`.rainbow-text`, `.rainbow-bar`,
`.rainbow-underline`) are defined in **`src/index.css`** under `@theme`.

Shared animation variants (`fadeUp`, `stagger`, `VIEWPORT`, …) live in **`src/lib/motion.ts`**.
Motion respects `prefers-reduced-motion`, and the interactive journey is loaded separately from the initial page.

## Structure

```
src/
├── App.tsx                  # assembles all sections
├── index.css                # Tailwind theme tokens + brand utilities
├── data/site.ts             # all editable content
├── lib/motion.ts            # shared Framer Motion variants
└── components/
    ├── Navbar.tsx           # fixed nav, glass on scroll, mobile menu
    ├── Hero.tsx             # parallax bg, animated headline, floating CTA
    ├── About.tsx            # split layout + highlight cards
    ├── Journey.tsx          # GSAP pinned bus journey + Rive detail
    ├── Rooms.tsx / RoomCard.tsx
    ├── Amenities.tsx
    ├── Location.tsx         # address, nearby list, map card
    ├── Gallery.tsx          # grid + lightbox (Esc to close)
    ├── Testimonials.tsx
    ├── Contact.tsx          # booking form + contact chips
    ├── Footer.tsx
    └── ui/SectionHeading.tsx
```

> **Note:** The booking form is front-end only (shows a confirmation on submit).
> Wire `onSubmit` in `Contact.tsx` to your booking backend or a form service when ready.
