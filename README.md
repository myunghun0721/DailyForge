# DailyForge / Habitica project
Motivate yourself to achieve your goals.
It's time to have fun when you get things done! Join over 4 million Habiticans and improve your life one task at a time.

## Landing page
![image](https://github.com/myunghun0721/DailyForge/assets/46683500/1948206d-c571-48be-a95f-168e1681d56f)

## Home page
![image](https://github.com/myunghun0721/DailyForge/assets/46683500/8bfd2c74-f7f3-4d31-84b9-bac94d571851)

![image](https://github.com/myunghun0721/DailyForge/assets/46683500/175105dd-504d-4798-aaf2-0db58620030d)

## Avatar page
![image](https://github.com/myunghun0721/DailyForge/assets/46683500/28a70aac-8f53-4495-b273-f5fb0e048d96)

![image](https://github.com/myunghun0721/DailyForge/assets/46683500/3bee85af-fdbb-4529-bc7f-8c90dfcbca1b)

## Daily page
![image](https://github.com/myunghun0721/DailyForge/assets/46683500/aac0009c-f729-4fad-84bd-0e10a6ec2750)

![image](https://github.com/myunghun0721/DailyForge/assets/46683500/c847b4f0-2c8f-498e-b46a-922937e74ee3)

![image](https://github.com/myunghun0721/DailyForge/assets/46683500/d4f7dc4b-e565-414a-87e6-1f98deb720d1)

## Sign-up
![image](https://github.com/myunghun0721/DailyForge/assets/46683500/3b27c455-bb5f-4b07-a6a2-8a50643ada64)


## Link to live site:
https://dailyforge-1.onrender.com

## Getting started

1. Clone this repository (only this branch).

2. Install dependencies.

   ```bash
   pipenv install -r requirements.txt
   ```
3. Create a .env file based on the example with proper settings for your development environment.
4. Make sure the SQLite3 database connection URL is in the .env file.
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

## Daily
* Logged-in users can create, view, edit, and delete their dailies.

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
* Logged-in users can search for gears

## End Points
### Avatars
`GET /api/avatar`
  * Return the information for the avatar

`POST /api/avatars/new`
  * Creates a new avatar

`PUT /api/avatars/:id`
  * Edits the information for one avatar

`DELETE /api/avatars/:id`
  * Deletes an avatar

### Dailies
`GET /api/dailies`
  * Return the information for all dailies

`POST /api/dailies/new`
  * Creates new dailies

`GET /api/dailies/:id`
  * Return the information for one dailies

`PUT /api/dailies/:id`
  * Edits the information for one dailies

`DELETE /api/dailies/:id`
  * Deletes a dailies

### Parties
`GET /api/parties`
  * Return the information for all parties

`POST /api/parties/new`
  * Creates new dailies

`GET /api/parties/:id`
  * Return the information to one party

`PUT /api/parties/:id`
  * Edits the information for one party

`DELETE /api/parties/:id`
  * Deletes a party

### Monsters
`GET /api/monsters`
  * Return the information for all monsters

`POST /api/monsters/new`
  * Creates new monster

`GET /api/monsters/:id`
  * Return the information for one monster

`PUT /api/monsters/:id`
  * Edits the information for one monster

`DELETE /api/parties/:id`
  * Deletes a monster

### More about this project.
https://github.com/myunghun0721/DailyForge/wiki/Database-Schema-and-Backend-Routes

### Technologies used
![js](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![html](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![css](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![postgres](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![sqlite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
