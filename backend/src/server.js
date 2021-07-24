const express = require ('express');
const routesUser = require('./routes/user.routes');

const app = express();

app.use(express.json());
app.use(routesUser);

app.listen(3333);