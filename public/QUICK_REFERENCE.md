# ANTIGRAVITY QUICK REFERENCE - YUGNEX LOGO

## 🎯 TASK
Replace text "YugNex" with monogram logo throughout website

---

## 📁 FILES TO COPY (9 files → `/public/images/logo/`)

```
✅ webapp_192x192.svg      (Header/Footer - Primary)
✅ webapp_512x512.svg      (Large displays)
✅ favicon_32x32.png       (Browser tab)
✅ favicon_48x48.png       (Browser tab HD)
✅ apple_touch_180x180.png (iOS icon)
✅ webapp_192x192.png      (Web app)
✅ webapp_512x512.png      (Web app large)
✅ og_1200x630.png         (Social media)
✅ kg_512x512.png          (Google)
```

---

## ⚡ QUICK IMPLEMENTATION

### 1. Logo Component (`app/components/Logo.tsx`)
```tsx
import Image from 'next/image'
import Link from 'next/link'

export default function Logo({ size = 'md', showText = true, href = '/' }) {
  const sizes = {
    sm: 32, md: 48, lg: 64, xl: 96
  }
  
  return (
    <Link href={href} className="flex items-center gap-3">
      <Image
        src="/images/logo/webapp_192x192.svg"
        alt="YugNex"
        width={sizes[size]}
        height={sizes[size]}
      />
      {showText && (
        <span className="text-xl font-bold text-yellow-400">YugNex</span>
      )}
    </Link>
  )
}
```

### 2. Header Update
```tsx
// FIND:
<div className="brand-logo">YugNex</div>

// REPLACE WITH:
<Logo size="md" showText={true} />
```

### 3. Metadata (`app/layout.tsx`)
```tsx
export const metadata = {
  icons: {
    icon: '/images/logo/favicon_32x32.png',
    apple: '/images/logo/apple_touch_180x180.png',
  },
  openGraph: {
    images: '/images/logo/og_1200x630.png',
  },
}
```

### 4. Manifest (`public/manifest.json`)
```json
{
  "name": "YugNex Technology",
  "icons": [
    { "src": "/images/logo/webapp_192x192.png", "sizes": "192x192" },
    { "src": "/images/logo/webapp_512x512.png", "sizes": "512x512" }
  ]
}
```

---

## ✅ TESTING CHECKLIST

- [ ] Logo shows in header (not text)
- [ ] Logo shows in footer
- [ ] Favicon in browser tab
- [ ] Works on mobile
- [ ] Works on desktop
- [ ] Logo links to homepage
- [ ] Social preview shows logo

---

## 🚨 IMPORTANT

- Use **SVG** for header/footer (crisp on all displays)
- Use **PNG** for favicons only
- Path is `/images/logo/` NOT `/public/images/logo/`
- Logo is **monogram only** (icon, no text in file)
- Pair with "YugNex" text using component

---

## 📞 QUESTIONS?

See full document: `ANTIGRAVITY_LOGO_IMPLEMENTATION.md`

---

**Time estimate: 2 hours** ⏱️
