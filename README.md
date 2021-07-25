# Hipages application

## Steps to run the application

### 1. Clone repo and move inside it
* `git clone https://github.com/revanshu/hipages.git`
* `cd hipages/`

### 2. Mysql setup
Install mysql in your system, create a database 'hipages' and import table from "init.sql"

Starting from the root repo:
* `mysql -u root`
* `CREATE DATABASE hipages;`
* `SHOW DATABASES;` // should show the new created database
* `exit;`
* `cd db/`
* `mysql -u root hipages < init.sql`

### 3. Start the node server

From root repo:
* `cd server/`
* `npm install`
* `npm install -g nodemon`  // globally install nodemon
* `DEBUG=server:* nodemon bin/www` or `npm run start:nodemon`  // run the server in debug mode
* NOTE: If you have different mysql uername and password, change configuration in config.js

### 4. Start the UI

From root repo:
* `cd ui/`
* `yarn install`
* `yarn start`