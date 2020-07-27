const server = require('../server/cs.js');
const client = server.client;
const app = server.app;
client.connect();

app.get('/users', (req, ress) => {
    client.query(`
    SELECT 
        * 
    FROM 
        users`,
        (err, res) => {
            ress.send(res);
        })
});

app.get('/products', (req, ress) => {
    client.query('SELECT * FROM products', (err, res) => {
        ress.send(res);
    })
});
