const express = require('express');
const app = express();
const port = 3000;
const recordRouter = require('./routers/recordRouter.js');
app.use(express.json());
app.use('/records', recordRouter);
app.listen(port, () => {
    console.log("local server running at 3000");
});