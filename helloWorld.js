const fs = require("fs");

let data = "This is the string that I want to write in the file!";
let data2 = "This is the another string that I want to write in the file!";
fs.writeFileSync("hello.txt", `${data}\n${data2}`);
