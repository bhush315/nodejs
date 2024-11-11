// Print Hello World
console.log("HELLO WORLD");

// create a server
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello Node!!!!</h1>\n");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log("Server is running at http://localhost:3000");
});

// write to a file
const fs = require("fs");

fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("File written successfully!");
});

// read the file
fs.readFile("welcome.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("File content:", data);
});

// generates random passwords
const generatePassword = require("generate-password");

const password = generatePassword.generate({
  length: 12,
  numbers: true,
  symbols: true,
});

console.log("Generated Password:", password);

//Node mailer

const nodemailer = require("nodemailer");

// smtp details
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "youremail@gmail.com",
    pass: "yourpassword",
  },
});

// Set up the email options
let mailOptions = {
  from: "myemail@gmail.com",
  to: "myfriend@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

// Send the email
transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log("Error occurred:", err);
  } else {
    console.log("Email sent:", info.response);
  }
});
