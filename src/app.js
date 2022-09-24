const express = require('express');
const authRoute = require('./routes/authRouter');
// const validation = require('./routes/validationRouter');

// ...

const app = express();

app.use(express.json());
app.use(authRoute);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
 app.use((error, req, res, _next) => {
    if (error.status) return res.status(error.status).json({ message: error.message });
    return res.status(500).json({ message: error.message });
  }); 

module.exports = app;
