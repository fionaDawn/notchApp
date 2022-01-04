//server.js
const app = require("./src/app");
const port = process.env.PORT || 3002;

app.listen(port, () => {
    console.log(`App is running on port ${port}.`);
});