const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.listen(3000, () => {
    console.log('Calculator API listening on port 3000');
});

app.post('/add', (req, res) => {
const num1 = req.body.num1;
const num2 = req.body.num2;

// Check if the request body parameters are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({
    status: 'error',
    message: 'Invalid data types'
    });
    }

// Check if the sum is greater than 1M
    if (num1 + num2 > 1000000) {
    return res.status(400).json({
    status: 'error',
    message: 'Overflow'
    });
    }

// Check if the sum is less than -1M
if (num1 + num2 < -1000000) {
return res.status(400).json({
status: 'error',
message: 'Underflow'
});
}

// Return the sum if all checks pass
return res.json({
status: 'success',
message: 'The sum of the given numbers',
sum: num1 + num2
});
});

app.post('/sub', (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;

    // Check if the request body parameters are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({
            status: 'error',
            message: 'Invalid data types'
        });
    }

    // Check if the difference is greater than 1M
    if (num1 - num2 > 1000000) {
        return res.status(400).json({
            status: 'error',
            message: 'Overflow'
        });
    }

    // Check if the difference is less than -1M
    if (num1 - num2 < -1000000) {
        return res.status(400).json({
            status: 'error',
            message: 'Underflow'
        });
    }
});
