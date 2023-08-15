-- This file is used to manage the database schema of a project during the db setup and init process.  NOTE:  Executing this file will result in the loss of ALL data stored in the pantry_db database.

DROP DATABASE IF EXISTS pantry_db;
-- Checks if a database named pantry_db exists and deletes it.  The IF EXISTS clause prevents an error from occurring if the database does NOT exist

CREATE DATABASE pantry_db;
-- Creates a new database named pantry_db