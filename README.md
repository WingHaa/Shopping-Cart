This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## About using Ref with TypeScript

Ref can be an object with a current property and can also be a function. You need to write your code so that it cover both case.

When using forwardRef for dynamic DOM access. You need type checking for the DOM element, the ref and its current property so TS know that they aren't null.

Useful references from Stackoverflow:
https://stackoverflow.com/questions/65876809/property-current-does-not-exist-on-type-instance-htmldivelement-null

https://stackoverflow.com/questions/62238716/using-ref-current-in-react-forwardref

## React Hydration Error

Due to Server Side Rendering, when component use tools that generate unique string as id there will be a mismatch due to string getting generated on server and then on client side.

https://nextjs.org/docs/messages/react-hydration-error

https://stackoverflow.com/questions/50231301/prop-mismatch-server-client-how-to-generate-a-unique-id-that-persists
