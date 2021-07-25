Hipages application

### Steps to run the application

## 1. Mysql setup
Install mysql in your system, create a database 'hipages' and import table from "init.sql"

Starting from the root repo:
`mysql -u root`
`CREATE DATABASE hipages;`
`SHOW DATABASES;` // should show the new created database
`exit;`
`cd db/`
`mysql -u root hipages < init.sql`

## 2. Start the node server

From root repo:
`cd server/`
`npm install -g nodemon`  // globally install nodemon
`DEBUG=server:* nodemon bin/www` or `npm run start:nodemon`  // run the server in debug mode

## 2. Start the UI

From root repo:
`cd ui/`
`yarn install`
`yarn start`