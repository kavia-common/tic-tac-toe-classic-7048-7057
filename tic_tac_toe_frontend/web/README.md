# Web Notes

This Expo app supports web via:
- web/index.html (HTML shell)
- web/manifest.json (PWA metadata)

Storage:
- src/utils/storage.web.ts provides a web-only storage shim using localStorage
- Native builds use AsyncStorage via src/utils/storage.ts

Run:
- npm run web
- or npm start (then open the web preview)
