const express = require('express');
const proxy = require('http-proxy-middleware');
const PORT = 666;
app = express();

app.use(proxy('/api/checkout', {target: 'http://localhost:1234'}));
app.use(proxy('/products', {target: 'http://localhost:3333'}));
app.use(proxy('/api/seller', {target: 'http://localhost:5000'}));
app.use(proxy('/api/description', {target: 'http://localhost:3000'}));
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}:`);
});