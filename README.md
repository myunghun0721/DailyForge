# DailyForge

## Link to live site:
https://habitica.onrender.com/

## Getting started

1. Clone this repository (only this branch).

2. Install dependencies.

   ```bash
   pipenv install -r requirements.txt
   ```
3. Create a .env file based on the example with proper settings for your development environment.
4. Make sure the SQLite3 database connection url is in the .env file.
5. This starter organizes all tables inside the flask_schema schema, defined by the SCHEMA environment variable. Replace the value for SCHEMA with a unique name, making sure you use the snake_case convention.
6. Get into your pipenv, migrate your database, seed your database, and run your Flask app:
   ```bash
   pipenv shell
   ```
   ```bash
   flask db upgrade
   ```
   ```bash
   flask seed all
   ```
   ```bash
   flask run
   ```
7. To run the React frontend in development: -cd into the react-vite directory and run npm i to install dependencies.
8. Next, run npm run build to create the dist folder. This command includes the --watch flag. This flag will rebuild the dist folder whenever you change your code, keeping the production version up to date.

## Avatar
* Logged-in users can create, view, edit, and delete their avatars.
* Logged-out users can view avatars.

## Daily
* Logged-in users can create, view, edit and delete their daily.

## Party
* Logged-in users can create, view, edit, and delete party

## Monster
* Logged-in users can create, view, edit, and delete monster

# Bonus Features
## Event
* Logged-in user can start raid (fight with monster)

## Chat
* Logged-in user (party) can chat with the party members

## Shop Search
* Logged-in/out users can search gears
