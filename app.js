require('dotenv').config();
const express = require('express');
const path = require('path');
movieRoutes = require('./routes/movieRoutes');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/api', movieRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/details.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'details.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`servido em http://localhost:${PORT}`));