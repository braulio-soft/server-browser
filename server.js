const express = require('express');
const data = require('./data.json');
const path = require('path');
const app = express();
const cors = require('cors');
const PORT = 3005;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/student', (req, res) => {
    res.status(200).json(data)
})


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})