

## Update Courses Section: Add Price + Book Now Button

Restyle the Courses section to match the reference image — each course card will show its price and a "Book Now" button that opens WhatsApp with a pre-filled message for that specific course.

### What changes

**File:** `src/components/CoursesSection.tsx`

1. Add a `price` field (₹199) to each course in the `courses` array.
2. Restructure each card layout:
   - Top: small rounded-square icon badge (soft rose background) with the emoji
   - Middle: course title (heading font, bold) + short description
   - Bottom row: price on the left (rose/primary color, bold) + "Book Now" pill button on the right (gradient-rose, white text)
3. Each "Book Now" button links to WhatsApp (`https://wa.me/919929720831`) with a pre-filled message including the course name, e.g.:
   `Hi! I want to book the Makeup Artist Workshop (₹199). Please share details.`
4. Keep the existing 3-column responsive grid (`sm:grid-cols-2 lg:grid-cols-3`) and the section heading/subheading.
5. Remove the "Certificate Provided" tile since it's not a bookable course (certificate info is already covered in Workshop Details). Final list: Makeup, Hair Styling, Beauty & Skin, Nail Art, Cosmetology — 5 cards, matching the reference.

### Visual details

- Card: white/`bg-card`, rounded-2xl, soft border, subtle hover (border + shadow)
- Icon badge: ~48px rose-tinted rounded square with emoji centered
- Price: `text-primary font-bold` with ₹ symbol
- Book Now button: small pill, `gradient-rose`, white text, hover opacity, opens WhatsApp in new tab

### Out of scope

- No changes to other sections, pricing logic, or backend.
- No new dependencies.

