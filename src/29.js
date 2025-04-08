const express = require('express');
const app = express();
app.use(express.static('./public'));

app.get('/index', (req, res) => {
  res.sendfile('./index.html');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
