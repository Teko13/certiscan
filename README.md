## CertiScan — 2D-Doc QR Code Scanner & Decoder

CertiScan is a modern Next.js web application to scan images of French 2D-Doc QR codes, extract their raw payload, decode the document data and check the signature according to ANTS specifications. It runs entirely in the browser for scanning and uses a server route for decoding when needed.

### Features

- Upload an image containing a 2D-Doc QR code
- Robust QR detection with multiple attempts/sizes
- Decoding via `@teko13/certiscan` (JavaScript port of a Python decoder)
- Clear, structured results: header, message dataset, signature validity
- Dark UI with black/yellow palette, responsive layout

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or yarn/pnpm/bun)

### Install

```bash
cd certiscan
npm install
```

### Run (development)

```bash
npm run dev
# Open http://localhost:3000
```

### Build & Start (production)

```bash
npm run build
npm run start
```

---

## Main Libraries Used

- Next.js (App Router) — application framework and routing
- Tailwind CSS — styling, dark theme and custom palette
- zxing-wasm — robust QR/Barcode detection from image files
- @teko13/certiscan — 2D-Doc decoder and signature verification

---

## How It Works (High Level)

1. You upload an image on the Scanner page (`/scanner`).
2. The app tries multiple canvas resizes and uses `zxing-wasm` to read the QR payload.
3. The raw payload is sent to an API route (`/api/decode`).
4. The API route calls `decoderQrCode` from `@teko13/certiscan`, which:
   - Parses the 2D-Doc header and message
   - Extracts the dataset fields
   - Validates the digital signature using the internal keychain
5. The UI displays the structured result and signature status.

Notes:

- The UI is responsive (mobile/tablet/desktop) with a minimal, modern design.
- No sample 2D-Doc raw text is embedded in the Next.js app code.

---

## Project Structure (excerpt)

- `app/` — App Router pages and components (Home, Scanner, API routes)
- `app/api/decode/route.ts` — server-side decoding endpoint
- `app/components/` — reusable UI (Header, Footer, Logo)

---

## License

MIT
