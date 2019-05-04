/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
const path = require('path');
const express = require('express');
const serveStatic = require('serve-static');
const app = express();

app.use(serveStatic(__dirname + '/dist'));
app.listen(process.env.PORT || 8080, () => {
  // eslint-disable-next-line no-console
  console.log(`Express server listening on port ${process.env.PORT || 8080}`);
});
