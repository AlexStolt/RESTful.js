const http = require('http');
const app = require('./app');


//Read Port From Environmental Variable if Exists
const PORT = process.env.PORT || 8000; //export PORT=... to Set Environmental Variable

http.createServer(app).listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
});