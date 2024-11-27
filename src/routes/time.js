const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const { timezone } = req.query;

    // Get the current UTC time
    const currentTime = new Date().toISOString();
    let response = { currentTime };

    // If a timezone offset is provided, calculate the adjusted time
    if (timezone) {
        const offset = parseFloat(timezone);

        if (isNaN(offset) || offset < -12 || offset > 14) {
            return res.status(400).json({ error: "Invalid timezone offset. Must be between -12 and +14." });
        }

        const adjustedTime = new Date(new Date().getTime() + offset * 60 * 60 * 1000).toISOString();
        response.adjustedTime = adjustedTime;
    }

    res.json(response);
});

module.exports = router;
