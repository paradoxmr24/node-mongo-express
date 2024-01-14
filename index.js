import app from './app.js';

const port = process.argv[2] || process.env.PORT;

app.listen(port, () => console.log(`server is running on localhost:${port}`));
