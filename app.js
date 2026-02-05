const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
app.get('/', (req, res) => {
res.send('Welcome to the App');
});
app.get('/api/users', (req, res) => {
res.json({ users: [] });
});
module.exports = app;