const express = require("express")

const welcomeRouter = require("./routers/welcome");
const projectRouter = require("./routers/project");
const tasksRouter = require("./routers/tasks");
const resourcesRouter = require("./routers/resources");


const server = express()
const port = process.env.PORT || 4000

server.use(express.json())

server.use("/", welcomeRouter);
server.use("/api/projects", projectRouter);
server.use("/api/tasks", tasksRouter);
server.use("/api/resources", resourcesRouter);

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong!"
    })
})

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})