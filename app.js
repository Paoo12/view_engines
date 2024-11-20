const express = require('express');
const app = express();
require('dotenv').config();
PORT = process.env.PORT || 8000;

app.listen(PORT, () => {

    console.log(`Connected to port ${PORT}`);

});