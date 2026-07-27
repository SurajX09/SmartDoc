# Components

---

# 1. Overview

This document defines all reusable UI components used in the SmartDoc Single Page Application (SPA).

Each component has a specific responsibility and should remain modular, reusable, and maintainable.

---

# Component Architecture

```
App
│
├── Navbar
├── Hero
├── About
├── Services
│   └── ServiceCard
├── WhyChooseUs
│   └── BenefitCard
├── HowItWorks
│   └── StepCard
├── FAQ
│   └── FAQAccordion
├── Contact
│   └── ContactCard
├── Footer
│
├── Button
├── SectionTitle
├── Container
├── Badge
├── Icon
└── ScrollToTop
```

---

# C-001 App

## Purpose

Root component responsible for rendering all website sections.

### Responsibilities

- Render all sections.
- Maintain application layout.
- Manage global state (if required in future).

---

# C-002 Navbar

## Purpose

Provide navigation across all website sections.

### Responsibilities

- Logo
- Navigation Links
- Active Section Highlight
- Mobile Menu
- WhatsApp Button

---

# C-003 Hero

## Purpose

Introduce SmartDoc.

### Contains

- Heading
- Description
- CTA Buttons
- Illustration

---

# C-004 About

## Purpose

Display business information.

### Contains

- Mission
- Vision
- Business Overview

---

# C-005 Services

## Purpose

Display all SmartDoc services.

### Uses

- ServiceCard Component

---

# C-006 ServiceCard

## Purpose

Display individual service information.

### Contains

- Icon
- Service Name
- Description
- WhatsApp Button

Reusable for every service.

---

# C-007 WhyChooseUs

## Purpose

Display SmartDoc advantages.

### Uses

- BenefitCard Component

---

# C-008 BenefitCard

## Purpose

Display a single benefit.

### Contains

- Icon
- Title
- Description

---

# C-009 HowItWorks

## Purpose

Explain service workflow.

### Uses

- StepCard Component

---

# C-010 StepCard

## Purpose

Display one process step.

### Contains

- Step Number
- Title
- Description

---

# C-011 FAQ

## Purpose

Display frequently asked questions.

### Uses

- FAQAccordion Component

---

# C-012 FAQAccordion

## Purpose

Expandable FAQ item.

### Features

- Expand
- Collapse
- Animation

---

# C-013 Contact

## Purpose

Display contact information.

### Uses

- ContactCard Component

---

# C-014 ContactCard

## Purpose

Display one contact method.

### Examples

- WhatsApp
- Email
- Business Hours

---

# C-015 Footer

## Purpose

Display website footer.

### Contains

- Logo
- Quick Links
- Contact Information
- Copyright

---

# Shared Components

---

# C-016 Button

Reusable button component.

### Variants

- Primary
- Secondary
- Outline

---

# C-017 SectionTitle

Reusable section heading.

### Contains

- Subtitle
- Title
- Description

---

# C-018 Container

Provides consistent page width and spacing.

Used in every section.

---

# C-019 Badge

Small reusable label.

Examples

- Popular
- Trusted
- New

---

# C-020 Icon

Wrapper around Lucide React icons.

Maintains consistent:

- Size
- Color
- Spacing

---

# C-021 ScrollToTop

Provides smooth scrolling back to the Hero section.

---

# Component Guidelines

Every component should be:

- Reusable
- Responsive
- Accessible
- Modular
- Easy to maintain

---

# Naming Convention

Use PascalCase for component names.

Examples

- Hero.jsx
- Navbar.jsx
- ServiceCard.jsx
- FAQAccordion.jsx

---

## File Information

**File Name:** `19-Components.md`

**Version:** 2.0

**Status:** Completed

**Last Updated:** 27 July 2026