const {Client} = require('pg');
const client = new Client({ connectionString: 'postgressql://leonio:leonio@localhost:5432/teste' });
const express = require('express');
const app = express();
port = 3080;
app.listen(port, () => { console.log(`Server listening on the port::${port}`); });
module.exports = {client, app};