const express = require('express');
const cors = require('cors')


const app = express();
const port = 8080;
app.use(cors());

app.get('/sayHello', (req, res) => {
  res.json({ message: 'Hello Users' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
