const express = require('express');
const app = express();

// Serve static files from the "./templates" directory
app.use(express.static('./templates'));

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
