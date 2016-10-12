'use strict';

const pg = require('pg');
const connectionString = process.env.DATABASE_URL  || 'postgres://localhost:5432/hfc';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
    'CREATE TABLE cottages(id SERIAL PRIMARY KEY, name VARCHAR(40) not null); CREATE TABLE cottage_dates(date date PRIMARY KEY)');

query.on('end', () => {client.end();});