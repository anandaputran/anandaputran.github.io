# Ananda Putra Nugraha — Personal Portfolio

[Versi Bahasa Indonesia](README_ID.md)

A from-scratch personal portfolio built as part of my ongoing development in Web Development and Frontend Development.

## Project Overview

This portfolio is a from-scratch rebuild of my previous personal portfolio, which was originally created as a learning project using a modified Bootstrap-based template. While the earlier version helped me learn how to structure and customize a portfolio website, its visual direction and implementation no longer represented where I am professionally.

As my skills and career direction became more focused on Web Development and Frontend Development, I decided to rebuild the portfolio rather than continue modifying the previous version. I see the earlier portfolio as a beta version, while this project represents a more intentional and stable iteration built around my current skills, projects, and professional direction.

The website is built from scratch with HTML, CSS, and JavaScript, with AI-assisted development used throughout the process for discussion, debugging, and refinement. Design direction, implementation choices, testing, and final decisions remain part of my own development process.

## Design Direction

The visual direction of this portfolio was shaped by a simple goal: to create something fresh, simple, elegant, and professional without feeling rigid or overly “programmer-like.”

I wanted the website to communicate a clear sense of technology, but without relying on common visual clichés such as Matrix-style animations, code backgrounds, or excessive effects. The goal was to keep the interface modern and visually engaging while remaining approachable for non-technical audiences such as recruiters, business owners, and potential collaborators.

This direction later evolved into a concept I describe as *Calm Tech + Crafted Details*: a calm and professional foundation, supported by selective visual details, interaction, and depth that add character without overwhelming the content.

## Design System

The design system was developed gradually to maintain consistency without forcing every element to look the same. It is built around four main foundations: typography, shape, color, and depth.

**DM Sans** is used as the primary typeface to provide a clean and modern appearance while maintaining readability across different screen sizes.

**Shape** is treated according to function rather than applying a single border radius everywhere. Cards, featured surfaces, navigation elements, buttons, and tags use different levels of rounding to establish hierarchy while maintaining a consistent visual language.

**Color** is built around a restrained dark neutral palette. Primary text, secondary information, borders, metadata, and surfaces use different levels of contrast to create hierarchy without introducing unnecessary color variation.

**Depth and surface** are applied selectively. Not every element needs to appear elevated; some sections remain intentionally flat while important surfaces and interactive elements receive subtle layering, highlights, or shadows. This helps preserve visual hierarchy and supports the principle that **if everything rises, nothing feels raised.**

## Interactions & Crafted Details

The interaction philosophy follows the same idea as the overall visual direction: something does not need to be loud or complex to feel polished. A calm and simple presentation can still be visually engaging when the details are intentional and well executed.

Interactions are therefore used to communicate intent rather than simply add movement. Buttons, links, navigation, and other actionable elements provide subtle visual feedback, while informational elements are intentionally kept static when interaction would create a false sense of clickability.

Crafted details are treated as accents rather than decoration applied everywhere. Subtle surface highlights, depth on primary actions, responsive logo behavior, and small visual cues are selectively introduced to give the interface character without competing with the content.

Accessibility is also considered through visible focus states and support for reduced-motion preferences, allowing interaction feedback to remain useful without requiring unnecessary animation.

> **Movement should confirm intent, not compete for attention.**
>
> **Crafted detail is an accent, not mass decoration.**

## Responsive Approach

Responsiveness is treated as adaptability rather than simply following the available screen size. The layout is allowed to change when necessary while preserving visual hierarchy, usability, and the overall design character across desktop, tablet, and mobile.

## Bilingual Support

The portfolio supports both English and Indonesian to make the content accessible to a broader audience. Language switching is handled through a lightweight JavaScript translation system using `data-i18n` attributes, while the selected language is stored locally so the user's preference is preserved across visits.

## Tech Stack & Project Structure

This portfolio is intentionally built with fundamental web technologies: HTML, CSS, and JavaScript. The decision was not based on project complexity, but on strengthening my understanding of the foundations behind modern web development before adding higher-level abstractions or frameworks.

Building from the fundamentals also gives me direct control over the document structure, responsive styling, interactions, and application behavior, allowing each implementation decision to be understood rather than hidden behind additional layers of tooling.

### Core Stack

- **HTML5** — semantic structure and content
- **CSS3** — visual system, responsive layout, interaction states, and accessibility preferences
- **JavaScript** — mobile navigation and bilingual functionality
- **DM Sans** — typography
- **Git & GitHub** — version control
- **GitHub Pages** — deployment

### Project Structure

```text
portfolio/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── icons/
│   ├── img/
│   │   ├── certificates/
│   │   └── projects/
│   └── js/
│       └── main.js
├── data/
│   ├── translations.js
│   ├── projects.js
│   └── certificates.js
└── index.html
```

The project structure is kept intentionally simple so each concern remains easy to locate and understand. Styles, scripts, media assets, and translation data are separated into their own directories while the main page structure remains in `index.html`.

> `projects.js` and `certificates.js` are currently reserved as placeholders for possible future data separation and are not part of the active rendering logic in v1.

## Development Process

The development process focuses on learning through iteration rather than generating the entire website at once. Each major area is discussed, implemented, tested, reviewed, and then treated as a checkpoint before moving to the next stage.

AI-assisted development is used throughout the process as a learning and problem-solving partner, particularly for discussing implementation approaches, reviewing code, debugging issues, and evaluating design decisions. Instead of relying on one-shot generation, changes are applied incrementally so I can understand the reasoning and behavior behind the implementation.

The process generally follows:

**Discuss → Implement → Test → Review → Refine → Lock → Continue**

This approach takes longer than generating a complete solution from a single prompt, but the goal of the project is not only to produce a finished portfolio. It is also to strengthen the fundamentals behind the work and build a development process I can understand, explain, and continue improving independently.

## Lessons Learned

One of the biggest lessons from rebuilding this portfolio is that good frontend work is not simply about adding more code, effects, or technologies. Many decisions become better when I understand why an element exists, how it should behave, and when something should be left simple.

I also learned that consistency does not mean making everything identical. Visual hierarchy can come from differences in shape, contrast, depth, and interaction, as long as those differences have a clear purpose. The same applies to responsive design: adapting a layout is more important than simply shrinking it to fit another screen.

Another important lesson is to test decisions instead of treating recommendations as rules. A suggested value or implementation can be a useful starting point, but the final decision should come from understanding the reasoning, testing it in context, and comparing the result.

Most importantly, this project reinforced why I want to keep strengthening my fundamentals. Tools, frameworks, and AI can accelerate development, but understanding the underlying HTML, CSS, and JavaScript gives me a foundation for deciding how and when those tools should be used.

## Project Status & Roadmap

The portfolio is currently approaching its first stable release. The core structure, responsive layout, bilingual support, visual system, interactions, and crafted details have been completed and documented.

Before the first release, the remaining work focuses on:

- Final visual and content polish
- Code and asset cleanup
- Cross-device and interaction QA
- Performance optimization
- SEO and metadata review

After v1 is released, the portfolio will continue to evolve as new projects, certifications, and skills become ready to be presented. Future additions will be treated as updates rather than blockers for the initial release.

**Current status: Documentation Catch-up → Final Polish → Cleanup / QA → Performance & SEO → v1 Release**
