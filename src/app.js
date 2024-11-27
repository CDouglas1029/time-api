const express = require('express');
const timeRouter = require('./routes/time');

const app = express();
const PORT = 3000;

// Use the time router
app.use('/time', timeRouter);

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

module.exports = app;
