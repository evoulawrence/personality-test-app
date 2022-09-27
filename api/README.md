Personality Test API.
----------------------------------------------

To Setup Your Local Database
-------------------------------------------------------------
* Create database name personality_test
* Inside sql/ directory there's database.sql. Run it to create your DB tables.
* Import the database file (database_records.sql) in sql/ directory to your database.

To Setup Your Project
--------------------------------------------------------------
* Extract the project folder to your project directory in your machine. 
* Move to your project directory, then api directory and run [composer install] to instll the dependencies
* Rename the .env.example to .env and input your database credenttials

Testing the API
---------------------------------------------------------------
You can test the API with a tool like Postman or Thunder client. First, go to the project directory and start the PHP server: php -S 127.0.0.1:8000 -t public
Then connect to 127.0.0.1:8000/teamway with Postman or Thunder client and send http requests. 