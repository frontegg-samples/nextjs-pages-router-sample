![Next.js Pages Router Hosted Login Banner](/public/assets/next-banner.png)

# Next.js Pages Router Hosted Login Sample

This sample demonstrates how to add authentication to a Next.js application using Frontegg's Hosted Login solution with Pages Router.

## Requirements

- [Node.js](https://nodejs.org)
- npm (comes with Node.js)
- A Frontegg account. [Sign up for free](https://portal.frontegg.com/signup).

## Setup

### 1. Clone and Install

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory and add your Frontegg credentials:

```env
FRONTEGG_BASE_URL=<YOUR_BASE_URL>
FRONTEGG_CLIENT_ID=<YOUR_CLIENT_ID>
FRONTEGG_APP_ID=<YOUR_APP_ID>
FRONTEGG_ENCRYPTION_PASSWORD=<YOUR_ENCRYPTION_PASSWORD>
FRONTEGG_HOSTED_LOGIN=<true|false>
```

### 3. Run the Application

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

The project follows the Next.js Pages Router structure:

```
├── pages/
│   ├── _app.tsx       # Application wrapper with Frontegg provider
│   ├── index.tsx      # Home page
│   ├── account.tsx    # Protected account page
│   └── api/          # API routes
├── components/        # Reusable components
└── public/           # Static assets
```

## Features

This application demonstrates:
- Next.js Pages Router integration with Frontegg's Hosted Login
- Protected routes and middleware implementation
- User authentication state management
- Access to user profile information
- Built-in security features

## Learn More

- [Frontegg Documentation](https://docs.frontegg.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [Pages Router Documentation](https://nextjs.org/docs/pages)
