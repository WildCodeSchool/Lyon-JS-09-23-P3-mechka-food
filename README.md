## Concept

Introducing our recipe sharing app, Mechka Food! Mechka Food is your go-to destination for discovering, sharing, and organizing delicious recipes from around the world. Whether you're a seasoned chef or a kitchen novice, Mechka Food makes cooking fun and accessible for everyone. Browse through a vast collection of user-generated recipes, each accompanied by mouthwatering photos and easy-to-follow instructions. Feeling inspired? Share your own culinary creations with the community and receive feedback and love from fellow food enthusiasts. With features like personalized recipe collections, ingredient shopping lists, and step-by-step cooking timers, CookHub streamlines your cooking experience and brings the joy of home-cooked meals to your fingertips. Join the CookHub community today and embark on a flavorful journey of discovery!

## Setup & Use

You have the possibility to :
- create an account & log into it,
- check previously added recipes, from all users, by clicking on any image you encounter across the site,
- access to a search page, where you can, first of all, have listed in 3 differents categories adn see all related recipes by clicking on it. And obviously, you can look for any recipe present in the database with the help of the searchBar,
- add you own recipe with all required details, to help other users to cook it to the perfection,
- access to your admin page, listing all previously added recipes, that you can modify or delete.
- log out from your session.

### Windows users

Be sure to run these commands in a git terminal to avoid [issues with newline formats](https://en.wikipedia.org/wiki/Newline#Issues_with_different_newline_formats):

```
git config --global core.eol lf
git config --global core.autocrlf false
```

### Project Initialization

- In VSCode, install plugins **Prettier - Code formatter** and **ESLint** and configure them
- Clone this repo, enter it
- Run command `git switch dev`
- Run command `npm install`
- Create environment files (`.env`) in both `backend` and `frontend`: you can copy `.env.sample` files as starters (**don't** delete them)
- Run command `cd backend/`
- Run command `npm run db:migrate`
- Run command `npm run db:seed`
- Run command `cd ..`
- In frontend, create a `public` folder and a `images` folder in it
- Run command `npm run dev`


### Available Commands

- `db:migrate` : Run the database migration script
- `db:seed` : Run the database seed script
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools (will be executed on every _commit_, and refuse unclean code)

## FAQ

### Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS

### About the database

The database is automaticaly deployed with the name of your repo. During the build of the projet (`docker-entry.sh`), the `node migrate.js` command is executed in the backend. If you want to seed automaticaly your database using the `seed.js` script, replace the command _build_ on you `backend/package.json` by `node migrate.js && node seed.js`.

### About public assets (pictures, fonts...)

Don't use any public folder on your frontend. This folder won't be accessible online. You may move your public assets in the `backend/public` folder. Prefer [static assets](https://vitejs.dev/guide/assets) when possible.

### About Logs

If you want to access the logs of your online projet (to follow the deployement or to watch any bug error), connect to your VPS (`ssh user@host`).
Then, go on your specific project and run  `docker compose logs -t -f`.
