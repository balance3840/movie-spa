# movie-spa

This SPA shows a list of movies in 3 different carousels. You can click on a movie's poster and access to its detail.

## Installing dependencies

Just need to run `npm install` or `yarn`

## Set API key

Right after you install all project dependecies, a env.js file is going to be created. In this you can set your API key from The Movie DB.

## Build the application

In order to build the assets for the application you just need to run `npm run build` or `yarn build` in the root of the project.

## Run the application

After you have built the application you can run `npm run docker` or `yarn docker`. This command is going to setup the environment you need using Docker container. The application will run in [http://localhost:3003](http://localhost:3003)

If you don't have docker installed on your machine you can also run the application running a Webpack dev server `npm run start` or `yarn start`