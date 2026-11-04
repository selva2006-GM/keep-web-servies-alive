import express from "express";



const app = express();

app.get("/about", (req, res) => {
    res.send("This is my Express server");
});

app.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});