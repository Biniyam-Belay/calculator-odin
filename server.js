const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '\\wsl.localhost\Ubuntu\home\biniyam\repos\calculator-odin')));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
