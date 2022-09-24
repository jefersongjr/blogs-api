const express = require('express');
const authRoute = require('./routes/authRouter');
const userRoute = require('./routes/userRouter');

// const validation = require('./routes/validationRouter');

// ...

const app = express();

app.use(express.json());
app.use(authRoute);
app.use(userRoute);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
 app.use((error, req, res, _next) => {
    if (error.status) return res.status(error.status).json({ message: error.message });
    return res.status(500).json({ message: error.message });
  }); 

module.exports = app;
