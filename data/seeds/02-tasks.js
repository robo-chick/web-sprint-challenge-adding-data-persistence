exports.seed = async function(knex) {
  return knex("tasks").insert([
    {
      completed: true,
      description: "Hire campaign manager",
      notes: "Maybe Keanu Reeves",
      project_id: 1
    },
    {
      completed: true,
      description: "Platform: Mandatory napps for everyone",
      notes: "People will love you",
      project_id: 1
    },
    {
      completed: true,
      description: "Become l337 h4x0r",
      notes: "This may take some time while homeschooling",
      project_id: 2
    },
    {
      completed: true,
      description: "Homeschool kids to hack",
      notes: "Teamwork",
      project_id: 2
    },
    {
      completed: true,
      description: "Buy land with new President salary",
      notes: "some place warm",
      project_id: 3
    },
    {
      completed: true,
      description: "Find tigers",
      notes: "They're just big, loveable kitties",
      project_id: 3
    },
  ])
}
