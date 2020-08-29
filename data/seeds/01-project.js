exports.seed = function(knex) {
  return knex("project").insert([
    {
      name: "Project 1", 
      description: "Become President",
      completed: true,
    },
    {
      name: "Project 2", 
      description: "Destroy Facebook",
      completed: true,
    },
    {
      name: "Project 3", 
      description: "Rescue Tigers",
      completed: true,
    },
  ])
}
