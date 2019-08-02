# grow #

## Pre-Requisites ##
* node

## Client Setup for Development ##
### Create .env file ###
* Add a file called `.env` to the client directory, it should contain the following to run locally with the server:
```
API_URL=http://[localhost]:[3000]
```
### Build and run the client app ###
```
cd client/
npm install
npm run build
npm run start
```

## Server Setup for Development ##
### Create database and add ormconfig.json file ###
* Run the database postgresql script found in the `./db` folder
* Add a file called `ormconfig.json` to the server directory, it should contain the following:
```
{
  "type": "postgres",
  "host": "[host/localhost]",
  "port": [port],
  "username": "[username]",
  "password": "[password]",
  "database": "grow",
  "entities": ["src/**/**.entity{.ts,.js}"],
  "synchronize": false
}
```
### Start the server ###
```
cd server/
npm install
npm run start
```
Navigate to http://localhost:3000/ and there will be a messaging saying `grow is running`.

* Sample endpoints:
    * `localhost:3000/accounts/1` - Get account by id
    * `localhost:3000/locations/account/1` - Get locations by account id
    * `localhost:3000/plants/location/1` - Get plants by location id