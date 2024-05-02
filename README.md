# DailyForge / Habitica project
Motivate yourself to achieve your goals.
It's time to have fun when you get things done! Join over 4 million Habiticans and improve your life one task at a time.

![image](https://github.com/myunghun0721/DailyForge/assets/46683500/1948206d-c571-48be-a95f-168e1681d56f)

![image](https://github.com/myunghun0721/DailyForge/assets/46683500/0ffb7cb6-b208-4617-8ca1-e6cec293d4f8)

![image](https://github.com/myunghun0721/DailyForge/assets/46683500/23f4f08f-64ac-4307-a1f6-5e71ccc24106)

![image](https://github.com/myunghun0721/DailyForge/assets/46683500/3bee85af-fdbb-4529-bc7f-8c90dfcbca1b)


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
* Logged-in users can create, view, edit, and delete their avatar.

## Daily
* Logged-in users can create, view, edit and delete their dailies.

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
* Logged-in users can search gears

### More about this project.
https://github.com/myunghun0721/DailyForge/wiki/Database-Schema-and-Backend-Routes

### Technologies
[![My Skills](https://skillicons.dev/icons?i=js,html,css,python)](https://skillicons.dev)
[![My Skills](https://skillicons.dev/icons?i=js,react,redux,flask)](https://skillicons.dev)
[![My Skills](https://skillicons.dev/icons?i=js,postgres,sqlite)](https://skillicons.dev)
