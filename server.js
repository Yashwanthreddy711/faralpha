const express = require('express');
const app = express();
const port = 80;

app.get('/sayHello', (req, res) => {
  res.json({ message: 'Hello Users' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
