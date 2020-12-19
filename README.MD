## Boilerplate for React projects.

Starter for React projects using Atomic design structure with support to both JSX and TSX, using SASS/SCSS, Eslint, Prettier, TailwindcssV2 and more, all of this using Webpack.<br/>
`git clone` the project and get started with fully optimized environment for React development.<br/>

## Get started

### For development

1. `git clone` the repository to your local machine.
2. run `npm install` to install all the dependencies.
3. run `npm start` to start local development server.

Everything is suited for development with hot reloading using webpack.<br />

### For production

For production use `npm run build` but before we need to **purge** all tailwind css propreties that we didn't use in the project.

1. Inside `tailwind.config.js` be sure to have `purge: {enabled: true}` as it will make a big difference in build size.
2. now run `npm run build`, you will get a folder named "prod".
