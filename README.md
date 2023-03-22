This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project was built using Typescript and Tailwind CSS.

### Preview: [Hosted on Vercel](https://shopping-cart-omega-five.vercel.app)

## Some stuffs I learned writing this:

### About using Ref with TypeScript

Ref can be an object with a current property and can also be a function. You need to write your code so that it cover both case.

When using forwardRef for dynamic DOM access. You need type checking for the DOM element, the ref and its current property so TS know that they aren't null.

Useful references from Stackoverflow:
https://stackoverflow.com/questions/65876809/property-current-does-not-exist-on-type-instance-htmldivelement-null

https://stackoverflow.com/questions/62238716/using-ref-current-in-react-forwardref

### React Hydration Error

Due to Server Side Rendering, when component use tools that generate unique string as id there will be a mismatch due to string getting generated on server and then on client side.

https://nextjs.org/docs/messages/react-hydration-error

https://stackoverflow.com/questions/50231301/prop-mismatch-server-client-how-to-generate-a-unique-id-that-persists
