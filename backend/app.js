const express = require('express');
const exchangeRoutes = require('./src/routes/exchangeRoutes');
const apiRoutes = require('./src/routes/apiRoutes');
const swaggerDocs = require('./src/swaggerConfig');

const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());
app.use('/api', apiRoutes);

swaggerDocs(app, port);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app; // for testing purposes
