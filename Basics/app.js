const http = require("http");
const port = 3000;
const fs = require("fs");
const requestHandler = require("./routes");
// End of Imports

const server = http.createServer(requestHandler);

server.listen(port, () => {
    console.log(`The server is running at: http://localhost:${port}`);
});
