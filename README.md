# LOOKBERRY premium e-commerce

A functional Uzbek-language storefront built with Next.js, TypeScript and responsive CSS. It includes the catalog, search/filters, product details, local persistent cart and favorites, checkout validation, server-side Telegram delivery, success/error states, public order-status lookup, and a protected admin dashboard.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`. The admin dashboard is at `/admin`.

## Required production environment variables

```env
TELEGRAM_BOT_TOKEN=123456:your-token
TELEGRAM_CHAT_ID=-1001234567890
ADMIN_PASSWORD=use-a-long-random-password
```

The bot token is only read in `app/api/orders/route.ts` and is never included in browser code. If Telegram rejects a request, the checkout displays an error and **does not** show fake success.

### Connect Telegram to @lookberrys

Telegram's Bot API does not reliably accept an account username as `chat_id`. To configure the numeric ID:

1. Create a bot with [@BotFather](https://t.me/BotFather) and copy its token to `TELEGRAM_BOT_TOKEN`.
2. For a direct chat, have `@lookberrys` open the bot and press **Start**. For a group/channel, add the bot and grant permission to post.
3. Send one message in that chat.
4. Visit `https://api.telegram.org/bot<BOT_TOKEN>/getUpdates` and find `message.chat.id` (or `channel_post.chat.id`).
5. Store that numeric value as `TELEGRAM_CHAT_ID`. Group/channel IDs commonly begin with `-100`.
6. Submit a real test order and verify the complete message arrives.

Never commit `.env.local`.

## Product and order data

Initial products are structured in `data/products.json`; admins can add, edit, and delete them. Orders are stored in `data/orders.json`. This file adapter works on a persistent Node server/volume. For stateless/serverless deployment, replace these two JSON adapters with PostgreSQL or another persistent database before accepting live orders; the API/UI contract can remain unchanged.

Product imagery lives in `public/products`. Replace files with approved original LOOKBERRY catalog exports while preserving the filenames, or update image paths in the admin panel.

## Quality checks

```bash
npm run build
npm audit
```

The production build and TypeScript checks pass. Current dependency audit reports zero vulnerabilities.
