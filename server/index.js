const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models"); //Getting the tables inside models folder.

//Routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

const commentsRouter = require("./routes/Comments");
app.use("/comments", commentsRouter);

db.sequelize.sync().then(() => {      //Syncing the database first then starting the server.
    app.listen(3001, () => {
        console.log("Server is running on port 3001");
    })
})
