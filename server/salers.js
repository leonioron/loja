const server = require('../server/cs.js');
const userType = require('../src/app/shared/userTypeEnum.ts');
const client = server.client;
const app = server.app;
client.connect();

app.get('/salers', (req, ress) => {
    client.query(`
    SELECT 
        * 
    FROM 
        users 
    WHERE 
        type_id = ${userType.SALER}`,
        (err, res) => {
            ress.send(res);
        })
});
