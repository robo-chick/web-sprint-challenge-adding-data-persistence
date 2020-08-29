const express = require("express")
const Project = require("../models/project")

const router = express.Router()

// get all projects
router.get("/", async (req, res, next) => {
    try {
        const projects = await Project.get()
        res.json(projects)
    } catch(err) {
        next(err)
    }
})

// get project by id
router.get("/:id", async (req, res, next) => {
    try {
        const project = await Project.getById(req.params.id)
        if (!project) {
            return res.status(404).json({
                message: "project not found",
            })
        }
        res.json(project)
    } catch(err) {
        next(err)
    }
})

// add project
router.post("/", async (req, res, next) => {
    try {
        const newProject = await Project.add(req.body)
        res.json(newProject)
    } catch(err) {
        next(err)
    }
})

// get resources by project
router.get("/:id/resources", async (req, res, next) => {
	try {
		const [resource] = await Project.getResourceByProject(req.params.id)
		if (!resource) {
			return res.status(404).json({
				message: "The resource not found.",
			})
		}
		res.json(resource)
	} catch (err) {
		next(err)
	}
})

// get tasks by project
router.get("/:id/tasks", async (req, res, next) => {
	try {
		const tasks = await Project.getTaskByProject(req.params.id)
		if (!tasks) {
			return res.status(404).json({
				message: "The tasks are not found.",
			});
		}
		res.json(tasks)
	} catch (err) {
		next(err)
	}
})

// delete project
router.delete("/:id", async (req, res, next) => {
	try {
		const project = await Project.deleteProject(req.params.id)
	
		res.json({
			message: "The project was removed."
		});
	} catch (err) {
		next(err)
	}
})

// edit project
router.put("/:id", async (req, res, next) => {
	try {
		const project = await Project.updateProject(req.params.id, req.body)
		res.json(project)
	} catch (err) {
		next(err)
	}
})

module.exports = router;