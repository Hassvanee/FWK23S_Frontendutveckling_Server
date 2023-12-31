let express = require("express"); // installera express
let app = express(); // skapa ett express server-objekt
let port = 8080; // ... som körs på port 8080

let httpServer = app.listen(port, function () {
  console.log(`Webbserver körs på port ${port}`); // samma som "Webbserver körs på port " + port
});

app.get("/", function (req, res) {
  console.log("En klient anslöt."); // skriv till serverns konsol
  res.sendFile(__dirname + "/index.html"); // läs in html-fil
});

app.get("/undersida", function (req, res) {
  // route till undersida
  res.sendFile(__dirname + "/undersida.html"); // läs in html-fil
});

app.use(express.static("filer")); // serva filer i mappen "filer" för att style ska kunna implementera

