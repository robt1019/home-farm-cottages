'use strict';

const pg = require('pg');
const connectionString = process.env.DATABASE_URL  || 'postgres://localhost:5432/hfc';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
    'CREATE TABLE cottages(id SERIAL PRIMARY KEY, name VARCHAR(40) not null);' + 
    'CREATE TABLE cottage_dates(date DATE, cottage_id int references cottages(id), PRIMARY KEY(date, cottage_id));' +
    'CREATE TABLE users(id SERIAL PRIMARY KEY, username VARCHAR(40) not null, password VARCHAR(40) not null)');

query.on('end', () => {client.end();});