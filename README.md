# Sviato Landing

Окремий мінімальний landing page для додатку Sviato, створений на React + Vite + TypeScript.

## Локальний запуск

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Деплой на Vercel

1. Створи окремий GitHub репозиторій для цієї папки.
2. Запуш `sviato-landing` у репозиторій.
3. У Vercel натисни **Add New Project** і вибери цей репозиторій.
4. Framework Preset: **Vite**.
5. Build Command: `npm run build`.
6. Output Directory: `dist`.
7. Deploy.
## GitHub Pages

Проєкт налаштований для GitHub Pages через GitHub Actions. Після push у `main` відкрий репозиторій на GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

Після успішного workflow сторінка буде доступна за адресою:

```text
https://bo-ov.github.io/sviato-landing/
```
