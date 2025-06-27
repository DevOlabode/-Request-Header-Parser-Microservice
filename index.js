const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ optionsSuccessStatus: 200 }));

// Root endpoint (optional)
app.get('/', (req, res) => {
  res.send('Request Header Parser Microservice is running');
});

// whoami API endpoint
app.get('/api/whoami', (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.get('Accept-Language'),
    software: req.get('User-Agent')
  });
});

// Listen on Render's dynamic port or 3000 locally
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Request Header Parser Microservice listening on port ${PORT}`);
});
