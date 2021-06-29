<<<<<<< HEAD
# API Wars

## Story

Because you are so awesome, a golden humanoid droid wants to meet you in the nearest Kantina....

[Watch this intro!](https://starwarsintrocreator.kassellabs.io/?ref=redirect#!/BM1kT5Ezi0Q0b-Ell8TE)

Your task is to create a web application which shows data about the Star
Wars universe, store visitor preferences with cookies and handle user login with
sessions.

## What are you going to learn?

- create a Flask backend project
- use routes with Flask
- use Bootstrap
- simple queries in SQL
- use AJAX for API requests
- session handling
- store passwords

## Tasks

1. Create a web server rendering a page that shows a table with all the planets in the Star Wars universe.
    - The opening page of the website (`/`) shows data of 10 planets
    - The page has an HTML `<table>` element containing the data
    - The columns of the table are `name`, `diameter` (shown in km), `climate`, `terrain`, `surface water` (shown as percentage), `population` (formatted as `1,000,000 people`)
    - The column titles are proper table headers
    - The page follows this basic design:
![API Wars Screenshot 01](media/web/apiwars-screenshot-01.png)
    - There's a next button above the table, clicking that shows the next 10 planets, if any
    - There's a previous button above the table, clicking that shows the previous 10 planets, if any
    - Double clicking on the next or previous buttons shows the next/previous 10 planets only once
    - Unknown values for surface water percentage and population are stated clearly and without any suffix (e.g for planet Coruscant and Hoth)

2. Display a button in each row if the planet has residents. These buttons should open a modal, populate its data containing the list of residents with more detailed information.
    - In the planet table there is a button in each row in a new column showing the planet's number of residents if the planet has any, otherwise the `No known residents` text is shown
    - Clicking the `<n> residents` button in the planet table, a modal shows up showing all the residents of that planet (every time)
    - The modal has an HTML `<table>` element containing the data
    - The columns of the table are `name`, `height` (shown in meters), `mass` (shown in kg), `skin color`, `hair color`, `eye color`, `birth year`, `gender` (an icon representation)
    - Data is loaded into the table without page refresh (with AJAX)
    - There is an X icon in the top right corner and a `Close` button in the bottom right corner; clicking these closes the modal
    - The modal follows this basic design:
![API Wars Screenshot 02](media/web/apiwars-screenshot-02.png)

3. Create a simple user login system with registration page, login page and logout link in the header.
    - There is a link in the header that leads to the registration page
    - On the registration page (`/register` route) the visitor can create a username/password pair that gets stored in the database
    - Password storage and retrieval uses salted password hashing for maximum security
    - If either field is empty while clicking on the `Submit` button on the registration page the `Please, fill in both fields.` error message appears
    - If the username field contains a username that already exists in the database while clicking on the `Submit` button on the registration page the `Username already exists, please choose another one!` error message appears
    - On successful registration the `Successful registration. Log in to continue.` text is shown and the user is redirected to the login page
    - There is a link in the header that leads to the login page
    - On the login page (`/login` route) the visitor can log in using the username/password previously created during registration
    - If the username/password pair doesn't match while clicking on the `Submit` button on the login page the `Wrong username or password.` error message appears
    - After logging in, the username is displayed in the top right corner with the text `Signed in as <username>` and a logout link is shown in the header
    - Clicking the logout link (`/logout` route) logs the user out

4. [OPTIONAL] If the user is logged in, display a button in each row with which the logged in user can vote on a planet. Save this vote in a database and inform a user that the vote has been saved.
    - If the user is logged in, a `Vote` button is displayed in the planet table in a new column
    - Clicking the vote button saves the vote in the database without refreshing the page (with AJAX)
    - If the save is successful after clicking the vote button, the `Voted on planet <planetname> successfully.` message appears
    - If the save is failed after clicking the vote button, the `There was an error during voting on planet <planetname>.` error message appears
    - Users can vote on unlimited number of planets and with unlimited number of votes on a planet

5. [OPTIONAL] Create a new modal window accessible from the main page where you display the statistics about voted planets.
    - There is a link in the header that opens a modal showing voting statistics based on the user votes saved in the database
    - The modal has an HTML `<table>` element containing the data
    - The columns of the table are `Planet name`, `Received votes`
    - Data is loaded into the table without page refresh (with AJAX)
    - There is an X icon in the top right corner and a `Close` button in the bottom right corner; clicking these closes the modal
    - The modal follows this basic design:
![API Wars Screenshot 03](media/web/apiwars-screenshot-03.png)

6. [OPTIONAL] Do some improvements in order to make the web application easier to use.
    - Planet list is showing a loading indicator while the content is loading
    - Planet list navigation gets disabled while the requested data is loading
    - Residents modal is showing a loading indicator while the content is loading
    - Residents modal is not showing the table's header until the content is loaded
    - A nice background image is used, that fits nicely to the site and does not draw your attention out from actual content
    - If a UI framework is used (Bootstrap, Material-UI, etc), the default theme is personalized for the project and not just used without changes.

## General requirements

- For the whole assignment, get the data using [The Star Wars API](https://swapi.dev/)
- The page doesn't show a server error anytime during the review

## Hints

- The starting repository is empty on purpose.

- Use Bootstrap, if you don't want to spend too much time with design.
- For displaying various (error) messages, you can use the flash function of Flask.
- Use Javascript `modules` for cleaner codebase.

- Use a `<h1>` tag for the page heading.
- Add buttons for navigating between chunks of data (loading all planets would
  take too much resources, so SWAPI implements a pagination. Just look into it's
  response, it has a `next` and a `previous` attribute).
- Use a bordered table to display the needed information.
- You are not required to use AJAX for the base page data. If you like, you can
  use the back-end for parts of the data processing (like the planet list), BUT
  the modal windows **must** load by calling an API with AJAX. This API can be
  SWAPI directly, or you can write a proxy in your web-server. When using Bootstrap, the
  "[Varying modal content based on trigger
  button](https://getbootstrap.com/docs/4.1/components/modal/#via-javascript)"
  section of the Bootstrap documentation might help a lot.
- For the login system use sessions.
- For sending data from server side to client side with AJAX, it is advised to
  use JSON.
- You are advised to use a data schema based on this for the login system and voting tasks:
  - `users` table
    - `id` : serial, primary key
    - `username` : unique name for users - varchar
    - `password` : hashed password - varchar
  - `planet-votes` table
    - `id` : serial, primary key
    - `planet_id` : integer (id from SWAPI data)
    - `planet_name` : varchar
    - `user_id` : integer, foreign_key
    - `submission_time` : datetime

## Background materials

- <i class="far fa-exclamation"></i> [The last missing piece: API](project/curriculum/materials/pages/web/the-last-missing-piece-api.md)
- <i class="far fa-book-open"></i> [RESTful](project/curriculum/materials/pages/web/restful.md)
- <i class="far fa-book-open"></i> [Front-End Frameworks and Libraries (including Bootstrap)](project/curriculum/materials/pages/javascript/frontend-libraries-and-frameworks.md)
- <i class="far fa-exclamation"></i> [A web-framework for Python: Flask](project/curriculum/materials/pages/python/python-flask.md)
- <i class="far fa-book-open"></i> [Flask documentation](http://flask.palletsprojects.com/) (the Quickstart gives a good overview)
- <i class="far fa-exclamation"></i> [Creating DOM elements](project/curriculum/materials/pages/javascript/javascript-extending-the-dom.md)
- <i class="far fa-exclamation"></i> [JavaScript modules](project/curriculum/materials/pages/javascript/javascript-modules.md)
- <i class="far fa-exclamation"></i> [Sessions](project/curriculum/materials/pages/web/authentication-sessions.md)
- <i class="far fa-exclamation"></i> [Salted password hashing functions in Werkzeug](https://werkzeug.palletsprojects.com/en/1.0.x/utils/#module-werkzeug.security)
- <i class="far fa-book-open"></i> [Web storage mechanisms](project/curriculum/materials/pages/javascript/web-storage-mechanisms.md)
- <i class="far fa-candy-cane"></i> [Flask's jsonify function](https://flask.palletsprojects.com/en/1.1.x/api/#flask.json.jsonify)

=======
# API Wars deployment

## Story

*Software deployment is all of the activities that make a software system available for use. The general deployment process consists of several interrelated activities with possible transitions between them.*

In this case, we deploy our Flask application to Heroku, a PaaS (platform as a service) service that you can use for free. In the background materials section at the bottom you'll find a tutorial about how to deploy your app to Heroku. Please read it.

## What are you going to learn?

The objectives are:

- to learn how to use Heroku CLI,
- being able prepare your application for continuous deployment,
- learn how to provision DB on Heroku

## Tasks

1. Create a new account on Heroku and activate it.
    - You can log in to your account on Heroku.

2. Create a new application on Heroku for your API Wars deployment.
    - There is a new app created on your Heroku account.

3. Install Heroku command-line interface.
    - Executing the `heroku --version` command in the shell shows something similar as a result: heroku/7.0.0 (darwin-x64) node-v8.0.0

4. Install the `gunicorn` package using the pip package manager.
    - Executing `pip list | grep -F gunicorn` command in the shell shows a line starting with `gunicorn`

5. Create required config files (`requirements.txt`, `runtime.txt`, `Procfile`) in your project's root folder.
    - Three required config files (`requirements.txt`, `runtime.txt`, `Procfile`) exists in the project's root folder

6. Provision a Postgres DB instance using eg. Heroku Postgres add-on (or any other service), connect to it and create your application schema.
    - Database is created (eg. using Heroku Postgres add-on) and you can connect to it using either `psql` or Heroku CLI commands:
  `heroku login
   heroku pg:psql`.
For more details on connecting to Postgres, check background materials list.
    - Database schema (table structure) for your application is created. Running `\dt` command after connecting to the database lists all required tables. Alternatively (if the above doesn't work), running  `SELECT * FROM pg_catalog.pg_tables
 WHERE schemaname != 'pg_catalog' AND schemaname != 'information_schema';` 
query should also list all required tables.

7. Build, deploy to Heroku and check if your application is accessible on the internet.
    - Your application has been successfully built and no errors are shown on the console.
    - Application has been deployed to Heroku and is accessible on the internet.
    - The deployed app on Heroku works in the exactly the same way as the one submitted to the API Wars project repository

## General requirements

None

## Hints

- make a `runtime.txt` with one line in it which is your python version (like python-3.5.2 - check <https://devcenter.heroku.com/articles/python-runtimes> what runtimes are available on Heroku),
- be careful with `requirements.txt`. Don't just write the whole `pip freeze` into it. First go through that tutorial and make that basic flask app run. It only needs those things what are screenshot in the tutorial (`flask`, `gunicorn`, `itsdangerous`, `jinja2` etc.). If your app needs more modules, put them into the requirements.txt but only if it is needed!
- Heroku command-line interface can be installed with `wget -qO- https://cli-assets.heroku.com/install-ubuntu.sh | sh` command

## Background materials

- <i class="far fa-exclamation"></i> [Heroku + Flask Tutorial](https://marcellban.github.io/heroku-flask/) (Thanks for one of the Codecoolers, Marcell Bán for this tutorial.)
- <i class="far fa-exclamation"></i> [Heroku Docs - Getting started with Python](https://devcenter.heroku.com/articles/getting-started-with-python)
- <i class="far fa-exclamation"></i> [Deploying Heroku App with Git](https://devcenter.heroku.com/articles/git)
- <i class="far fa-exclamation"></i> [Using Heroku Postgres CLI commands](https://devcenter.heroku.com/articles/heroku-postgresql#using-the-cli)
- <i class="far fa-exclamation"></i> [Connecting to Heroku Postgres database using `psql` command](https://medium.com/@kagaramag/how-to-connect-to-heroku-postgres-database-using-cli-a2e51cc25029)
- <i class="far fa-book-open"></i> [About deployment](project/curriculum/materials/pages/devops/deployment.md)
>>>>>>> d7d1c42e8599924d56849a0d665857004a0446a9
