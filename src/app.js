const express = require('express');
const authRoute = require('./routes/authRouter');
const userRoute = require('./routes/userRouter');
const erroMiddleware = require('./middlewares/erroMiddleware');

// const validation = require('./routes/validationRouter');

// ...

const app = express();

app.use(express.json());
app.use(authRoute);
app.use(userRoute);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
 app.use(erroMiddleware); 

module.exports = app;
