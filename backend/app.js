const express = require('express');
const cors = require('./middleware/cors');
const app = express();

// Apply CORS middleware before other routes
app.use(cors);

// ...existing code...

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});