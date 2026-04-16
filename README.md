# Gala 35 - AIESEC Romania

Website for the 35th Anniversary Gala of AIESEC in Romania, a two-day event held on April 24-25, 2026 at Sheraton Hotel Bucharest. The site serves as the primary information hub for alumni and active members, covering event registration, agenda, venue details, donations, accommodation booking, and a searchable directory of past and present participants.

## Features

- Event information and countdown to the gala dates
- Registration form integration
- Agenda overview for both event days
- Venue details and travel directions
- Accommodation booking for Sheraton Hotel
- Participant directory with filtering by generation and local committee
- Donations section with IBAN details and committee breakdown
- Bilingual support (Romanian and English)
- FAQ section

## Tech Stack

**Framework:** Next.js 16 (App Router) with React 19

**Language:** TypeScript

**Styling:** Tailwind CSS 4

**Database and Storage:** Supabase (PostgreSQL via REST API, Storage for participant photos)

**Analytics:** Vercel Analytics

**Deployment:** Vercel

**Internationalization:** Custom locale routing with Romanian and English dictionaries, implemented via Next.js dynamic route segments (`[locale]`)

## Project Structure

```
src/
  app/
    api/participants/   Next.js API route for paginated participant queries
    (site)/[locale]/    Locale-scoped pages (home, agenda, participants, donations, venue, shop)
  components/
    home/               Countdown timer and venue carousel
    participants/       Participant card and grid components
  lib/supabase/         Supabase client logic and participant data fetching
  i18n/                 Romanian and English translation dictionaries
```

## Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

## Getting Started

```bash
npm install
npm run dev
```

The development server starts at `http://localhost:3000`.
