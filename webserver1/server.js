import express from "express";

const app = express();

app.get("/wakeup",async (req, res) => {

   try{
    await new Promise(resolve => setTimeout(resolve, 60000
    ));
    const response = await fetch("http://localhost:3000");

    const data = await response.text();

    res.send(data);
   }catch(error){
    console.error("Error waking up server:", error.message);
    res.status(500).send("Failed to wake up server");
   }
});

app.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});