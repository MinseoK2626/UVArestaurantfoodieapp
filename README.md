# Corner Check
A responsive, dependency-free prototype for exploring places to eat around the UVA Corner.

## Run
Requires Node.js 20 or newer. No dependency installation or credentials are required.

```sh
npm run dev
```
The server binds to `0.0.0.0:3000`; set `PORT` to change the port.

```sh
npm test
npm run build
```
The build copies static assets into `dist/` for static hosting.

## Demo data and methodology
All ratings, review counts, prices, walking times, review text, and map locations are simulated. Includes 20 local-name examples and one fictional demo restaurant. Current operating status, hours, and menus are unverified. Local names are illustrative; Midnight Grill is fictional. The map is a schematic, not navigation. Counts shown on cards are display fixtures; classifications use three sample reviews per restaurant.

Review signals are tagged as praise (+1), neutral (0), or concern (-1) for food, service, and value. A dimension is red when at least half its reviews raise concerns; green requires at least 60% praise and no concerns; other cases are yellow. Two red dimensions produce an overall red, all green dimensions produce green, and other cases produce yellow. Star ratings are never used for classification. Explanations are deterministic theme summaries, not output from a connected AI service.

## Real data integration
`src/data.js` exposes the async `getRestaurants()` provider. Replace its fixture implementation with an authorized, licensed source; keep credentials on a backend. Normalize reviews to the same theme signals with a validated analysis service, preserving source URL, date, attribution, and provenance. Supply verified coordinates and replace the schematic map with a real map adapter. Add missing-data, confidence, recency, and sampling policies before using real recommendations. No live review or AI API is connected in this prototype.

## UI
List and schematic map views, combined search/cuisine/status/budget filters, alphabetical/rating/price sorting, accessible restaurant dialogs, review excerpts and dimension breakdowns, empty-state filter reset, and a methodology dialog. External Google Fonts are optional; local system fonts are fallbacks.
