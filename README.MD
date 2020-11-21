React template support for Typescript and Javascript at the same time using webpack, babel, react-router and tailwindcssV2, Further read to see how to optimize for production build.<br/>
You do not have to configure anything `git clone` the project and get a fully optimized environment for React development.<br/>
Follow the steps in `npm run build` section to use it in production.<br/>

## Create React application template

In the project directory, you can run:

### `npm install`

First install all the dependencies.<br />

### `npm start`

Execute this command ONLY FOR DEVELOPMENT (Not optimized).<br/>
For production use `npm run build` but before read the section and follow the steps.

### `npm run build`

Before you execute this command you need to follow these 3 steps: <br/>

1. Inside webpack.config.js file comment lines from 11 to 18 to make it production build by default<br/>
2. In the same file in line 29 change [hash] to [contenthash] (read the comment)<br/>
3. Inside tailwind.config.js change line 7 from false to true.
