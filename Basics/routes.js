const fs = require("fs");

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.write("<html>");
        res.write("<head><title>This is the form page!</title></head>");
        res.write(
            `<body>
                <form action="/message" method="POST">
                    <input name="message" type ="text" />
                    <button type ="submit">Send</button>
                </form>
            </body>`
        );
        res.write("</html>");
        return res.end();
    }
    if (url === "/message" && method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
        });

        return req.on("end", () => {
            const parsedData = Buffer.concat(body).toString();
            const message = parsedData.split("=")[1];
            fs.writeFile(
                "./serverMessage.txt",
                message.split("+").toString().replaceAll(",", " "),
                (err) => {
                    res.writeHead(302, {
                        Location: "/",
                    });
                    return res.end();
                }
            );
        });
    }
    res.write("<html>");
    res.write("<head><title>Node JS web page</title></head>");
    res.write(
        "<body><body><h1>Hello from my NodeJS server!</h1></body></body>"
    );
    res.write("</html>");
    res.end();
};

module.exports = requestHandler;
